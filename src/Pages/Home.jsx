import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
    const[roomCode,setRoomCode]=useState("");

        const navigate=useNavigate();

    const handleFormSubmit =(event) =>{
        event.preventDefault();
        navigate(`/room/${roomCode}`);
    }

  return (
   <>
   <div >
    <form  onSubmit={handleFormSubmit} >
        <div className='Parent'>
            <h1>Start Video Conferencing Now...</h1>
            <br />
 <br />           <label className="label"> Enter Room Code:</label>
            <input type="text" 
                name="roomCode"
                required
                className='Input'
                placeholder="Enter your roomcode" 
                value={roomCode}
                onChange={(e)=>setRoomCode(e.target.value)}/>
        <button type='submit'>Enter Room</button>
        </div>
    </form>
   </div>
   </>
  )
}

export default Home