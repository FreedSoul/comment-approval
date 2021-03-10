import React from 'react'
import { Button, Card } from 'semantic-ui-react'
//import faker from 'faker'

const ApprovalCard = (props) =>{
    return (
        <Card> 
            <Card.Content>
                {props.children}
            </Card.Content>
            <Card.Content extra>
                <div className = "extra ui two buttons">
                    <Button inverted color="green">  
                        accept
                    </Button>
                    <Button inverted color="red">  
                        reject
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default ApprovalCard