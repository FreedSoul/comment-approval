import React from 'react'
import faker from 'faker'
//import ApprovalCard from './ApprovalCard'


const CommentDetail = (props) => {
    const calctime = Math.floor(Math.random()*Math.max(24))
    const resulTime = calctime===1?calctime+' hora':calctime+' horas'
    return (
        <div className = "comment">
            <a href = "/" className = "avatar">
                <img alt="avatar" src={props.avatar}/>
            </a>
            <div className = "content">
                <a href = "/" className = "author">
                    {props.name}
                </a>
                <div className = "metadata">
                    <span className="date">{`hace ${resulTime}`}</span>
                    
                </div>
                <div className = "text">{props.content}</div>
            </div>
        </div>
    )
}

export default CommentDetail