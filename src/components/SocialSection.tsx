import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import SendButton from './SendButton'
import SocialCircle from './SocialCircle'
import { s, vs } from 'react-native-size-matters'

interface SocialSection{
 title: string,
  icon: React.ReactNode
}
const SocialSection: FC<SocialSection> = ({title, icon}) => {
  return (
    <View style={styles.container}>
      {/* <SocialCircle /> */}
        <View style={styles.circle}>
          {icon}
    </View>
      <Text style={styles.socialText}>{title}</Text>
      <SendButton />
    </View>
  )
}

export default SocialSection

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth:s(1),
    borderBottomColor: '#E4E6E8',
    paddingVertical: vs(15),

  },
  socialText: {
    flex: 1,
    marginStart: s(14),
    color: '#8083A3',
    fontSize: s(12),
  },
  circle:{
        backgroundColor:'#fff',
        height:s(46),
        width:s(46),
        borderRadius:s(23),
        justifyContent:'center',
        alignItems:'center',
        borderWidth:s(1),
        borderColor:'#E4E6E8'
        
    }
})