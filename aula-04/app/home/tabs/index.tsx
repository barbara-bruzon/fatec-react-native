import { Text } from 'react-native'
import { Link } from 'expo-router'
import { useAuth } from '../../../hooks/auth'
import { Button } from '@gluestack-ui/themed'
import { useEffect, useState } from 'react'

interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

export default function Home(){
    const auth = useAuth()
    const [list, setList] = useState<IPost[]>([])

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setList(json)) 
    }, [])
    
    return (
        <>
        <Text>Login ({auth.user.email}) com sucesso!</Text>
        {
            list.map((post) => {
                <Text key={post.id}>{post.title}</Text>
            })
        }
        <Link href="/">Voltar ao login</Link>
        <Button onPress={auth.handleLogout}>
            Sair do sistema
        </Button>
        </>
    )
}