import React, { useState,useEffect } from 'react'
import { Card } from 'react-native-paper'
import { View,StyleSheet, Dimensions, ScrollView } from 'react-native'
import VideoPlayer from 'react-native-video-player'
import LoadingScreen from './LoadingScreen'

export default function VideoList() {

    const [videoList, setVideoList] = useState([])
    const [loading, setLoading] = useState(false)

    const WIDTH = Dimensions.get('window').width;
    
    useEffect(() => {
        getVideoList()
        return () => {
          console.log('clean up')
        }
      }, [])
    
    const getVideoList = async () => {
        try
        {
            setLoading(true)
            const result = await fetch("http://demo9818737.mockable.io/videos")
            const res = await result.json()
            setVideoList(res.videos)
            setLoading(false)

        }catch(error)
        {
            setLoading(false) 
        }
      
      }


    onchange = (nativeEvent) => {

    }
if(loading)
{
    return (
        <LoadingScreen/>
    )
}

    return (
        <View style={styles.parentView} >

           <View style={styles.childView} >
            <ScrollView
                onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
            >

                {
                        videoList.map(item => {

                        return <Card style={styles.card}>
                            <VideoPlayer
                                video={{ uri: item.video_url }}
                                autoplay={false}
                                defaultMuted={true}
                                videoHeight={300}
                                videoWidth={WIDTH}
                                thumbnail={{ uri: item.thumbnail_url }}
                            />
                        </Card>
                    })
                }

            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(

    {
        card: {
            margin: 10,
            elevation: 2,
            height: 300,
            width: Dimensions.get('window').width-20,
            backgroundColor:"black",
        },
        childView: {
            height:300
        },
        parentView:{

            backgroundColor:"white",
            height:Dimensions.get("window").height,
            alignItems:"center",
            justifyContent:"center"}
        

    }
)
