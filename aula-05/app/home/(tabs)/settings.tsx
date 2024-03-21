import {Text, View} from '@gluestack-ui/themed'
import { Gyroscope } from 'expo-sensors'
import { useState } from 'react'

export default function Settings(){

    const [{x,y,z},setData] = useState({
        x: 0,
        y: 0,
        z: 0
    })

    Gyroscope.setUpdateInterval(1000)
    Gyroscope.addListener((data) => {
        setData(data)
    })

    return (
        <View flex={1} justifyContent='center' alignItems='center'>
            <Text>Configurações</Text>
            <Text>X: {x}</Text>
            <Text>Y: {y}</Text>
            <Text>Z: {z}</Text>
        </View>
    )
}