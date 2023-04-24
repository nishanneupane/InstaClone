import React, { Component } from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import love from "../../images/love.svg"
import comment from "../../images/comment.svg"
import share from "../../images/share.svg"

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: []
        }
    }

    componentDidMount() {
        this.getComments();
    }

    getComments = () => {
        let data = [
            {
                "username": "Nishan",
                "commentId": "1234",
                "timestamp": "1234",
                "description": "its very beautiful"
            },
            {
                "username": "Bibek",
                "commentId": "1234",
                "timestamp": "1234",
                "description": "hera hera"
            },
            {
                "username": "shreya",
                "commentId": "1234",
                "timestamp": "1234",
                "description": "looks great"
            }
            ,{
                "username": "Bhadel",
                "commentId": "1234",
                "timestamp": "1234",
                "description": "yo ful lai ni dashain lagexa"
            }

        ];
        this.setState({ commentList: data });
    }
    render() {
        return (
            <div className='post_container'>
                {/* header */}
                <div className='post_header'>
                    <Avatar src={this.props.profileImage} className='post_image'>
                    </Avatar>
                    <div className='post_username'>{this.props.username}</div>

                </div>

                {/* Image */}
                <div>
                    <img src={this.props.postImage} alt="" width="615px" />
                </div>

                {/* Analytics */}
                <div>
                    <div className="post_analytics_container" style={{ "marginLeft": "10px" }}>
                        <img src={love} className='post_react_image' />
                        <img src={comment} className='post_react_image' />
                        <img src={share} className='post_react_image' />
                    </div>
                    <div style={{ "fontWeight": "bold", "marginLeft": "10px" }}>{this.props.likes} likes</div>
                </div>

                {/* Comment Section */}
                <div>
                    {
                        this.state.commentList.map((item, index)=>(
                            <div className='post_comment'>{item.username} : {item.description}</div>
                        ))
                    }

                    <input type="text" className='post_commentbox' placeholder='Add a comment ..' />

                </div>
            </div>

        );
    }
}
export default Post;