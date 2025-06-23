import { Text, StyleSheet , Dimensions} from 'react-native';

import Colors from '../../Constants/Colors';

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const { width } = Dimensions.get('window');
const fontSize = width < 380 ? 20 : width < 600 ? 20 : 24;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: fontSize,
  },
});