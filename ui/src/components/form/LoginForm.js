import React, {useState} from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import {Formik} from 'formik'
import {Field as FormikField} from 'formik'
import {Form as FormikForm} from 'formik'
import StonksMessage from '../StonksMessage'

const UserNameInput = ({ field, form: { touched, errors }, ...props}) => {
  return (
    <Form.Input 
      {...field} 
      {...props}      
      fluid 
      icon='user' 
      iconPosition='left'
      style={{marginBottom: 10, width: '100%'}} 
    />
  )
}

const PasswordInput = ({ field, form: { touched, errors }, ...props}) => {
  return (
    <Form.Input
      {...field} 
      {...props}      
      fluid
      icon='lock'
      iconPosition='left'
      type='password'
      style={{marginBottom: 10, width: '100%'}} 
    />
  )
}

const LoginForm = ({messageHidden, header, content, login, register, renderMessageTimer}) => {
  const [registering, setRegistering] = useState(false);
  const [primaryButtonText, setPrimaryButtonText] = useState('Login');
  const [secondaryButtonText, setSecondaryButtonText] = useState('Register');

  const handleButtonText = (event, pText, sText) => {
    event.preventDefault();
    setPrimaryButtonText(sText);
    setSecondaryButtonText(pText);
    sText === 'Register' ? setRegistering(true) : setRegistering(false);
  }

  const handleSubmit = (values) => {
    registering ? register(values) : login(values)
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src={process.env.PUBLIC_URL + '/btfd1.png'} /> Welcome Back
      </Header>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        onSubmit={async (values) => {
          handleSubmit(values)
        }}
      >
        <FormikForm>
          <Segment>
            <FormikField 
              id='username'
              name='username'
              placeholder="Username"
              component={UserNameInput}
            />
            <FormikField
              id='password'
              name='password'
              placeholder="Password"
              component={PasswordInput}
            />
            <Button 
              style={{marginBottom: 10}}
              type='submit'
              color='teal'
              fluid 
            >
              {primaryButtonText}
            </Button>
            <Button onClick={(event) => {handleButtonText(event, primaryButtonText, secondaryButtonText)}}>
              {secondaryButtonText}
            </Button>
          </Segment>
        </FormikForm>
      </Formik>
      {
        messageHidden ?
          null
          :
          <StonksMessage header={header} content={content} />
      }
    </Grid.Column>
  </Grid>
  )
}

export default LoginForm