import { useState } from "react"
import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleregistration = async (e) => {
        e.preventDefault();
        setLoading(true);

        const userData ={
            username, email, password, password2
        }
        try{
            const response = await axios.post('http://127.0.0.1:8005/api/v1/register/', userData);
            console.log('response.data==>', response.data);
            /* console.log('sucess'); */
            setErrors({});
            setSuccess(true);
        }catch(error){
            setErrors(error.response.data)
            console.error('Errors:', error.response.data);
        }finally{
            setLoading(false)
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
                    <small>{errors.username && <div className="text-danger">{errors.username}</div>}</small> 
                    <div>
                        <div className='mb-3'>
                            <input type='email' className='form-control mb-4' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    
                        <input type='password' className='form-control mb-4' placeholder='Set Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <input type='password' className='form-control mb-4' placeholder='Confirm Password' value={password2} onChange={(e)=>setPassword2(e.target.value)}/>

                        <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small> 
                    </div>

                    {success && <div className='alert alert-success'>Registration Successful!</div>}

                    {loading ? (
                        <button type='submit' className='btn btn-info d-block mx-auto' disabled> <FontAwesomeIcon icon={faSpinner} spin />Please wait...</button> 
                    ) : (
                        <button type='submit' className='btn btn-info d-block mx-auto'>Register</button> )
                    }
                </form>

            </div>
        </div>
    </div> 
    </>
    
  )
}

export default Register;