import {Text, StyleSheet} from 'react-native'

function Title({children}){
    return(
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
       title:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        borderColor: 'white',
        borderWidth:2,
        color: 'white',
        padding:15,
    }
})