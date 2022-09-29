import React, { useState } from 'react'
import "./git-user-details.css";
import { HiLocationMarker } from "react-icons/hi";
import { FiLink2 } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";

const GitUserDetails = (props) => {
  //console.log(props.gituser);
  return (
    <div className="git_user_details_container">
      <div className='git_user_image'>
        <img src={props.gituser.avatar_url} alt="" />
      </div>
      <div className='git_user_otherdata'>
        <div className="git_user_fullname">
          {props.gituser.name}
        </div>
        <div className="git_user_bio" style={{display:props.gituser.bio?"block":"none"}}>
        {props.gituser.bio}
        </div>
        <div className="git_user_location" style={{display:props.gituser.location?"block":"none"}}>
          <HiLocationMarker />&nbsp;&nbsp;{props.gituser.location}
        </div>
        <div className="git_user_twitter" style={{display:props.gituser.twitter_username?"block":"none"}}>
          <AiFillTwitterCircle/><a target="_blank" rel="noreferrer" href={`https://twitter.com/${props.gituser.twitter_username}`}>{`https://twitter.com/${props.gituser.twitter_username}`}</a>
        </div>
        <div className='git_user_link'>
          <FiLink2/><a target="_blank" rel="noreferrer" href={props.gituser.html_url} >{props.gituser.html_url}</a>
        </div>
      </div>
    </div>
  )
}

export default GitUserDetails