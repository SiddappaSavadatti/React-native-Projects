import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserAvatar from '../components/UserAvatar'
import BackButton from '../components/BackButton'
import { s, vs } from 'react-native-size-matters'
import SocialSection from '../components/SocialSection'
// import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {Ionicons, FontAwesome6} from '@expo/vector-icons'
const ContactUsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <UserAvatar />
                <BackButton />

            </View>
            <Text style={styles.contactText}>Contact Us</Text>
            <View style={styles.socialContainer}>
                <Text style={styles.socialTitle}>Social Media Flatforms</Text>
                <SocialSection icon={<Ionicons name="logo-whatsapp" size={24} color="#178AD9" />} title={"WhatsApp"}/>
                <SocialSection icon={<FontAwesome6 name="xmark" size={24} color="#178AD9" />} title={"X" }/>
                <SocialSection icon={<Ionicons name="logo-instagram" size={24} color="#178AD9" />} title={"Instagram"} />
                <SocialSection icon={<Ionicons name="logo-snapchat" size={24} color="#178AD9" />} title={"Snap chat"} />
                <SocialSection icon={<Ionicons name="logo-tiktok" size={24} color="#178AD9" />} title={"Tik Tok"}/>
            </View>
        </View>
    )
}

export default ContactUsScreen

const styles = StyleSheet.create({
    container: {
        marginTop: vs(50),
        paddingHorizontal: s(17),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    contactText: {
        marginTop: 20,
        fontSize: s(30),
        fontWeight: 'semibold',
        marginStart: s(19),
    },
    socialContainer: {
        backgroundColor: '#F5F5FA',
        borderRadius: s(14),
        paddingHorizontal: s(18),
        paddingVertical: s(14),
        marginTop: vs(20),
    },
    socialTitle: {
        fontSize: s(16),
        fontWeight: 'semibold',
    }
})