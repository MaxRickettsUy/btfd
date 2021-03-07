import React from 'react'
import { Message } from 'semantic-ui-react'

const StonksMessage = ({header, content}) => {
  return (
   <Message 
    positive={header === 'SUCCESS' ? true : false}
    negative={header === 'FAILURE' ? true : false} 
    size='massive'
  >
     <Message.Header>{header}</Message.Header>
     <p>
      {content}
     </p>
   </Message>
  )
}

export default StonksMessage;