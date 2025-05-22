import { View, Text, Image, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../Constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';
function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/success.png')} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber} </Text> 
                rounds to guess the number {' '}
             <Text style={styles.highlight}>{userNumber}</Text> 
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start a new Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer: {
        height: 300,
        width: 300,
        fontSize: 32,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 40,

    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText:{
        fontWeight:'semibold',
        fontSize:30,
        textAlign:'center',
        marginBottom:28,
    },
    highlight:{
          fontWeight:'bold',
          color:Colors.primary500,
    },
})