import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

export function App() {
    return (
        <div>
            <Header />
            <Post 
            author="Igor Henrique"
            content="mega do akon"     
        />
        <Post 
            author="Ericao"
            content="kkk"     
        />
        
        </div>
        
    )
}

 