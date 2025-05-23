import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'

const UserAvatar = () => {
  return (
    <View>
      <Image 
      source={{uri: 'https://yt3.googleusercontent.com/8_sUGHA4WPR8pl6MbERPt1mYzcNutFapNcNAEkqsJuZKWNfejQgOaFqXOUJ9Vl7b9nbJrmRN=s900-c-k-c0x00ffffff-no-rj'}} 
      style={styles.avatar}
      />
    </View>
  )
}

export default UserAvatar

const styles = StyleSheet.create({
    avatar:{
        height:s(32),
        width:s(32),
        borderRadius:s(16),
    }
})