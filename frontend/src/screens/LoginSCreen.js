import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = ({location, history}) =>
    const [email, setEmail ] = useState('')
    const [ password,setPassword] = useState('')

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'
useEffect(() => {
if(userInfo) {
history.push(redirect)
}
}, [history, userInfo, redirect])

const submktHandler = (e)=> {
e.preventDefault()
dispatch(login(email, password))

}
    return (
    <FormContainer>
    <h1>Sign In</hl>
    {error & <Message variant='danger'>{error}</Message>} 
    {loading && <Loader />}
    <Form onSubmit={submitHandler}>
    <Form.Group controlld='email'>
    <Form.Label>Email Address</Form.Label>
    <Form.Control type='email' 
    placeholder='Enter email'
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    )
   ></Form.Control>
   <Form.Group> 
    </Form> 
    
    </FormContainer> 
 
export default LoginScreen