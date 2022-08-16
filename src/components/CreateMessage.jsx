import React, { useState } from "react";
import { createMessage } from "../api";

const CreateMessage = () => {
    const [newMessage, setNewMessage] =useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

    }
    return ( 
        <div>
            <form>
                <input id="messageBox" 
                onChange={(event) => {
                    setNewMessage(event.target.value)
                }} type="text" value={newMessage} required>
                </input>
                <button id="messageBtn" type="submit"> Submit Message</button>
            </form>
        </div>
     );
}
 
export default CreateMessage;