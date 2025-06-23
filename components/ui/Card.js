import { View, StyleSheet, useWindowDimensions, Platform } from 'react-native';
import Colors from '../../Constants/Colors';

function Card({ children }) {
  const { width, height } = useWindowDimensions();

  // Responsive adjustments (inside the component)
  const padding = width < 360 ? 20 : width < 600 ? 30 : 50;
  const marginTop = height < 600 ? 24 : 30;
  const marginHorizontal = width < 360 ? 16 : 30;
  const borderRadius = width < 400 ? 6 : 16;
  const shadowRadius = width < 400 ? 4 : 6;

  return (
    <View
      style={[
        styles.card,
        {
          padding,
          marginTop,
          marginHorizontal,
          borderRadius,
          shadowRadius,
        },
      ]}
    >
      {children}
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    elevation: 4, // Android shadow
    // iOS shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
});
