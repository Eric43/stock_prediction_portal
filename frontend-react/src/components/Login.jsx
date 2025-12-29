import React, {useContext, useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {
    const [username, setUsername] = useState('')
    /* const [email, setEmail] = useState('') */
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [error, setError] = useState();
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const userData = {username, password}
            console.log('userData ==>', userData);

        try{
            const response = await axios.post('http://127.0.0.1:8005/api/v1/token/', userData);
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
            console.log('SUCCESS');
            setError();
            setIsLoggedIn(true);
            navigate('/dashboard')
        }
        catch {
            setError('Invalid Credentials');
            /* console.error('CREDENTIALS FAIL!') */
        }finally{
            setLoading(false);
        }
    }
    
  return (
    <>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6 bg-light-dark p-5 rounded'>
                <h3 className='text-light text-center'>Login</h3>

                <form onSubmit={handleLogin}>
                    <input type='text' className='form-control mb-4' placeholder='Enter User Name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    {/* <small>{errors.username && <div className="text-danger">{errors.username}</div>}</small>  */}
                    <div>
                        {/* <div className='mb-3'>
                            <input type='email' className='form-control mb-4' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div> */}
                    
                        <input type='password' className='form-control mb-4' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    {/* Error Display */}
                    </div>
                    {error && <div className='text-danger'>{error}</div>}
                    {/* Button animation and login */}
                    {loading ? (
                        <button type='submit' className='btn btn-info d-block mx-auto' disabled> <FontAwesomeIcon icon={faSpinner} spin />Logging in...</button> 
                    ) : (
                        <button type='submit' className='btn btn-info d-block mx-auto'>Login</button> )
                    }
                </form>

            </div>
        </div>
    </div> 
    </>
  )
}

export default Login