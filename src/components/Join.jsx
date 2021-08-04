import React from 'react'
import axios from 'axios';


export default function Join({onLogin}) {
    const [roomId, setRoomId] = React.useState('')
    const [userName, setUserName] = React.useState('')
    const [isLoading, setLoading] = React.useState(false)

    const onEnter = async () => {
        if(!roomId || !userName){
            return alert('enter room and name')
        }
        const obj = {roomId, userName}
        setLoading(true)
        await axios.post('/rooms', obj); 
        onLogin(obj)
        
    }
    return (
    <div className="join-block">
        <input type="text" placeholder="Room ID" value={roomId} onChange={e => setRoomId(e.target.value)} />
        <input type="text" placeholder="Your Name" value={userName} onChange={e => setUserName(e.target.value)}/>
        <button disabled={isLoading} onClick={onEnter}>{isLoading ? "ENTERING..." : "ENTER"}</button>
    </div>
    )
}
