import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

export default function LoadingScreen() {
    return (
        <View style={styles.parentView}>
            <ActivityIndicator size="large" color="skyblue" />
        </View>
    )
}

const styles = StyleSheet.create(

    {

        parentView: {
            height:"100%",
            alignItems: "center",
            justifyContent: "center"
        }


    }
)
