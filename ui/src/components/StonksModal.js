import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import StonksFrom from './form/StonksForm'

function StonksModal({addHolding}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      size='small'
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button floated='right'>Add Holding</Button>}
    >
      <Modal.Header>Add New Holding</Modal.Header>
      <Modal.Content image style={{width: '100%'}}>
        <Image size='small' src={process.env.PUBLIC_URL + '/btfd1.png'} wrapped />
        <Modal.Description style={{width: '100%'}}>
          <Header>Complete form to add new holding</Header>
          <StonksFrom addHolding={addHolding} setOpen={setOpen}/>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default StonksModal