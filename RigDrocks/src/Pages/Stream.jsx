import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Stream = () => {
    const navigate = useNavigate()
    const [roomCode, setRoomCode] = useState('')
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        navigate(`/room/${roomCode}`)
    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-screen bg-black gap-2'>
            <div className='w-[80%] h-[80%] bg-cyan-100 flex items-center justify-center gap-4 flex-col'>
                <form onSubmit={handleFormSubmit} className='flex flex-col items-center gap-2'>
                    <label htmlFor="Code">Enter Room Code :</label>
                    <input 
                        type="text" 
                        value={roomCode} 
                        onChange={e => setRoomCode(e.target.value)} 
                        required 
                        placeholder='please enter code here'
                        className='p-2 rounded-md'
                    />
                    <button type='submit' className='bg-white text-black font-black rounded-md p-2'>
                        Enter Room
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Stream
