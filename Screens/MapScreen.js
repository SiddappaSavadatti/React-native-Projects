import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Animated,
  Easing,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MapView, { Marker, AnimatedRegion, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MapScreen() {
  const [region, setRegion] = useState(null);
  const [busInfo, setBusInfo] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);
  const [lastCoordinate, setLastCoordinate] = useState(null);

  const busCoord = useRef(
    new AnimatedRegion({
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    })
  ).current;
  const rotation = useRef(new Animated.Value(0)).current;
  const mapRef = useRef(null);
  const busNumber = '6201';

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.warn('Location permission denied');
        return;
      }
      const loc = await Location.getCurrentPositionAsync({});
      const initial = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      setRegion(initial);
      setLastCoordinate(initial);
    })();

    fetchBusData(); // initial fetch
    const interval = setInterval(fetchBusData, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchBusData = async () => {
    try {
      const res = await fetch(
        'https://valistus.skoolsmart.net/student/bus_tracking/?bus_number=KA51AJ3418',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bus_number: busNumber }),
        }
      );
      const data = await res.json();
      if (!data?.length) return;

      const { Latitude, Longitude, Direction } = data[0];
      const lat = parseFloat(Latitude);
      const lng = parseFloat(Longitude);
      const bearing = parseFloat(Direction);
      const coord = { latitude: lat, longitude: lng };

      // move marker & rotate
      busCoord.timing({ ...coord, duration: 5000, useNativeDriver: false }).start();
      Animated.timing(rotation, {
        toValue: bearing,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();

      setBusInfo({ ...data[0], Direction: bearing });
      setLastCoordinate(coord);

      if (firstLoad && mapRef.current) {
        mapRef.current.animateToRegion({ ...coord, latitudeDelta: 0.01, longitudeDelta: 0.01 }, 1000);
        setFirstLoad(false);
      }
    } catch (err) {
      console.error('Failed to fetch bus data:', err);
    }
  };

  const handleCenter = () => {
    if (!mapRef.current || !lastCoordinate) return;
    mapRef.current.animateToRegion(
      { ...lastCoordinate, latitudeDelta: 0.01, longitudeDelta: 0.01 },
      1000
    );
  };

  const rotate = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  if (!region) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Top Section: Bus Info */}
      <View style={styles.infoContainer}>
        {busInfo ? (
          <>
            <Text style={styles.infoTitle}>Bus Details</Text>
            <View style={styles.infoGrid}>
              <View style={styles.infoItem}>
                <Icon name="bus" size={18} color="#007AFF" />
                <Text style={styles.infoText}>Bus No: {busInfo.BusNumber}</Text>
              </View>
              <View style={styles.infoItem}>
                <Icon name="map" size={18} color="#007AFF" />
                <Text style={styles.infoText}>Route: {busInfo.RouteNumber}</Text>
              </View>
              <View style={styles.infoItem}>
                <Icon name="navigate" size={18} color="#007AFF" />
                <Text style={styles.infoText}>Direction: {busInfo.Direction}°</Text>
              </View>
              <View style={styles.infoItem}>
                <Icon name="speedometer" size={18} color="#007AFF" />
                <Text style={styles.infoText}>Speed: {busInfo.Speed} km/h</Text>
              </View>
            </View>
          </>
        ) : (
          <Text style={styles.infoText}>Fetching bus information...</Text>
        )}
      </View>

      {/* Map Section */}
      <View style={styles.mapWrapper}>
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          showsUserLocation
          showsMyLocationButton
        >
          {busInfo && (
            <Marker.Animated
              coordinate={busCoord}
              anchor={{ x: 0.5, y: 0.5 }} // center the anchor to avoid offset issues
              flat
              title={`Bus No: ${busInfo.BusNumber}`}
              description={`Speed: ${busInfo.Speed}, Direction: ${busInfo.Direction}`}
            >
              <Animated.Image
                source={require('../assets/school1.png')}
                style={[
                  styles.bus,
                  { transform: [{ rotate }], width: 40, height: 40 }, // you can adjust size here
                ]}
                resizeMode="contain"
              />
            </Marker.Animated>

          )}
        </MapView>

        {/* Center Button */}
        <TouchableOpacity style={styles.centerButton} onPress={handleCenter}>
          <Icon name="locate-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', padding: 10 },

  infoContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    elevation: 2,
    maxHeight: 120, // reduced height
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },

  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  infoItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },

  infoText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#333',
  },

  mapWrapper: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    elevation: 3,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

bus: {
  width: 40,  // keep width/height equal for square aspect ratio
  height: 40,
  ...Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
    android: {
      elevation: 6,
    },
  }),
},


  centerButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 30,
    elevation: 5,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});