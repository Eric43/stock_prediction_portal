import { useState } from "react"
import React from 'react'
import axios from 'axios'


const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleregistration = async (e) => {
        e.preventDefault();
            const userData ={
            username, email, password
        }
        try{
            const response = await axios.post('http://127.0.0.1:8005/api/v1/register/', userData);
            console.log('response.data==>', response.data);
            console.log('sucess');
        }catch(error){
            console.error('Errors:', error.response.data);
        }
    }

  return (
    <>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6 bg-light-dark p-5 rounded'>
                <h3 className='text-light text-center'>Create an account.</h3>
                <form onSubmit={handleregistration}>
                    <input type='text' className='form-control mb-4' placeholder='Enter User Name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <input type='email' className='form-control mb-4' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type='password' className='form-control mb-4' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
                </form>
            </div>

        </div>
    </div>
    
    
    </>
    
  )
}

export default Register;