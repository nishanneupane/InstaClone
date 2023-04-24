import React, { Component } from 'react'
import "./Mainpage.css"
import Post from '../Post/Post'
import postImage from "../../images/post.jpg"
import profileImage from "../../images/post.jpg"
import uploadImg from "../../images/upload1.png"


class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postArray:[]
    }

  }

componentDidMount(){
  this.getPost();
}

  getPost=()=>{
    //API
    let data=[
      {
        "postId":"433",
        "userName":"Nishan",
        "postImage":"https://statinfer.com/wp-content/uploads/dummy-user.png",
        "profileImage":"{profileImage}",
        "timestamp":"5678",
        "likes":"4567"
      },
      {
        "postId":"433",
        "userName":"Nishan",
        "postImage":"https://statinfer.com/wp-content/uploads/dummy-user.png",
        "profileImage":"{profileImage}",
        "timestamp":"5678",
        "likes":"4567"
      },
      {
        "postId":"433",
        "userName":"Nishan",
        "postImage":"https://statinfer.com/wp-content/uploads/dummy-user.png",
        "profileImage":"{profileImage}",
        "timestamp":"5678",
        "likes":"4567"
      }

      
    ];
    
    this.setState({postArray:data});
  }
  render() {
    return (
      <div>
        <div style={{"textAlign":"center","margin":"10px"}} className='mainpage_uploadimage'>
          <img className='mainpage_uploadIcon' src={uploadImg} width="55px" height="55px"/>
        </div>
        {
          this.state.postArray.map((item,index)=>(
            <Post id={item.postId} username={item.userName} profileImage={item.profileImage} postImage={item.postImage} likes={item.likes} />

          ))
        }
      </div>

    );
  }
}
export default Mainpage;
