import React, { Component } from 'react'
import "./Statusbar.css"
import statusimg from "../../images/pp1.png"
import { Avatar } from '@mui/material'
import uploadImage from '../../images/upload.png'

class Statusbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusList: []
        }

    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        let data = [
            {
                "username": "nishanneupane",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "testing",
                "imageURL": "../../images/pp1.png"
            }
            ,
            {
                "username": "qewr",
                "imageURL": "../../images/pp1.png"
            }
            ,
            {
                "username": "terw",
                "imageURL": "../../images/pp1.png"
            }
            ,
            {
                "username": "45trdf",
                "imageURL": "../../images/pp1.png"
            }
            ,
            {
                "username": "terw",
                "imageURL": "../../images/pp1.png"
            }
            ,
            {
                "username": "45trdf",
                "imageURL": "../../images/pp1.png"
            }
            ,
            {
                "username": "terw",
                "imageURL": "../../images/pp1.png"
            }
            ,
            {
                "username": "45trdf",
                "imageURL": "../../images/pp1.png"
            }
            ,
            {
                "username": "terw",
                "imageURL": "../../images/pp1.png"
            }
            ,
            {
                "username": "45trdf",
                "imageURL": "../../images/pp1.png"
            }
            ,
            {
                "username": "terw",
                "imageURL": "../../images/pp1.png"
            }
            ,
            {
                "username": "45trdf",
                "imageURL": "../../images/pp1.png"
            }
        ]
        this.setState({ statusList: data });
    }
    render() {
        return (
            <div className='statusbar_container'>
                <img className='status_bar_upload' src={uploadImage}/>
                {
                    this.state.statusList.map((item, index) => (
                        <div className='status'>
                            <Avatar className='statusbar_status' src={statusimg}></Avatar>
                            <div className='statusbar_text'>{item.username}</div>
                        </div>
                    ))
                }

            </div>

        );
    }
}
export default Statusbar;
