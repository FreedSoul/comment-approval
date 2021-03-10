import React from 'react'
import { Comment } from 'semantic-ui-react'

const CommentDetail = (props) => {
    const calctime = Math.floor(Math.random()*Math.max(24))
    const resulTime = calctime===1?calctime+' hora':calctime+' horas'
    return (
        <Comment>
            <Comment.Avatar src={props.avatar}>
            </Comment.Avatar>
            <Comment.Content>
                <Comment.Author>
                    {props.name}
                </Comment.Author>
                    <Comment.Metadata>
                        <div>{`hace ${resulTime}`}</div>
                    </Comment.Metadata>
                <Comment.Text>{props.content}</Comment.Text>
            </Comment.Content>
        </Comment>
    )
}

export default CommentDetail