import React from 'react'
import faker from 'faker'
import { Comment,Form,Header } from 'semantic-ui-react'
import ApprovalCard from './components/ApprovalCard'
import CommentDetail from './components/CommentDetail'

const App = () => {
    
    return (
        <>
        <Comment.Group>
                <ApprovalCard>
                    <CommentDetail
                        avatar = {faker.random.image()+''}
                        name = {`${faker.name.firstName()}`}
                        content = {`${faker.lorem.sentence()}`}
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail
                        avatar = {faker.random.image()+''}
                        name = {`${faker.name.firstName()}`}
                        content = {`${faker.lorem.sentence()}`}
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail
                        avatar = {faker.random.image()+''}
                        name = {`${faker.name.firstName()}`}
                        content = {`${faker.lorem.sentence()}`}
                    />
                </ApprovalCard>
                
        </Comment.Group>
        
        </>
    )
}
export default App