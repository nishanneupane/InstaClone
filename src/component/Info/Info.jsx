import React from 'react'
import "./Info.css"
import { Avatar } from '@mui/material'
import imagesrc from "../../images/pp1.png"

const Info = () => {
    return (
        <div>

            <div className='info_container'>
                <Avatar src={imagesrc} className='info_image'></Avatar>
                <div className="info_content">
                    <div className='info_username'>Username</div>
                    <div className='info_description'>description</div>
                </div>
            </div>
        </div>
    )
}

export default Info