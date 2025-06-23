import { Text, StyleSheet, useWindowDimensions, Platform } from 'react-native';

function Title({ children }) {
  const { width, height } = useWindowDimensions();

  const isLandscape = width > height;
  const fontSize = isLandscape ? 20 : width < 380 ? 24 : width < 600 ? 28 : 32;
  const padding = width < 380 ? 10 : width < 600 ? 14 : 18;

  return (
    <Text
      style={[
        styles.title,
        {
          fontSize,
          padding,
        },
      ]}
    >
      {children}
    </Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'white',
    color: 'white',
    borderWidth: Platform.OS === 'android' ? 2 : 0,
  },
});
