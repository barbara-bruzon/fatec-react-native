import { View, Text, Button, Image } from "@gluestack-ui/themed"
import { CameraView, useCameraPermissions } from 'expo-camera/next'
import { useState } from "react"

export default function Camera(){
    const [permission, requestPermission] = useCameraPermissions()
    let camera: CameraView | null = null
    const [photo, setPhoto] = useState<string | undefined>(undefined)

    const takePhoto = async () => {
        if(permission && camera) {
            const photo = await camera.takePictureAsync()
            if(photo?.uri){
                setPhoto(photo.uri)
            }
        }
    }

    if (permission){
    return (
        <View flex={1} justifyContent='center' alignItems='center'>
            <CameraView 
            ref={(componente) => {camera = componente}}
            style={{width:200,height:200}} 
            facing="back"></CameraView>
            <Button onPress={takePhoto}>
                <Text>Tirar foto</Text>
            </Button>
            {
                photo && (
                    <Image 
                    source={{uri: photo}} 
                    alt="Foto" 
                    mt={5} 
                    width={200} 
                    height={200}></Image>
                )
            }
        </View>
    )
    } else {
        <View flex={1} justifyContent='center' alignItems='center'>
            <Text>Não tem permissão</Text>
        </View>
    }
}