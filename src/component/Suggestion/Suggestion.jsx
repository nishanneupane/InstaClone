import React from 'react'
import "./Suggextion.css"
import { Avatar } from '@mui/material'
import imagsrc from "../../images/pp3.jpeg"

const Suggestion = () => {
  return (
    <div>
      <div className='suggestion_container'>
        <div className='suggestion_header'>Suggestions For You</div>
      </div>

      <div className='suggestions_body'>
        <div className="suggestion_friends">
          <Avatar src={imagsrc} className='suggestion_image'></Avatar>
          <div className='suggestion_username'>Yukesh Gautam</div>
        </div>

        <div className="suggestion_friends">
          <Avatar src={imagsrc} className='suggestion_image'></Avatar>
          <div className='suggestion_username'>Mohammad salah</div>
        </div>

        <div className="suggestion_friends">
          <Avatar src={imagsrc} className='suggestion_image'></Avatar>
          <div className='suggestion_username'>Sisan Baniya</div>
        </div>

        <div className="suggestion_friends">
          <Avatar src={imagsrc} className='suggestion_image'></Avatar>
          <div className='suggestion_username'>It me pauli</div>
        </div>

        <div className="suggestion_friends">
          <Avatar src={imagsrc} className='suggestion_image'></Avatar>
          <div className='suggestion_username'>Shree Krishna Manandhar</div>
        </div>

        <div className="suggestion_friends">
          <Avatar src={imagsrc} className='suggestion_image'></Avatar>
          <div className='suggestion_username'>Rakshya Gautam</div>
        </div>
      </div>

      
    </div>
  )
}

export default Suggestion