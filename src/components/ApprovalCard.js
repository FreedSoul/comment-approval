import React from 'react'
import CommentDetail from './CommentDetail'
import faker from 'faker'

const ApprovalCard = (props) =>{
    return (
        <div className="ui card"> 
            <div className = "content">
                {props.children}
            </div>
                <div className = "extra ui two buttons">
                    <div className = "ui inverted green button">  
                        accept
                    </div>
                    <div className = "ui inverted red button">
                        reject
                    </div>
                </div>
        </div>
    )
}

export default ApprovalCard