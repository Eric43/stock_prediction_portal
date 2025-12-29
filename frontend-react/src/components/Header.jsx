import {useContext} from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext} from '../AuthProvider'


const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
    console.log('logged out');
    navigate('/login');
  }

  return (
    <>
        <nav className='navbar container pt-4 pb-4 align-items-start'>
            <Link className='navbar-brand text-cyan' to="/">Stock Prediction Portal</Link>

            <div>
              {isLoggedIn ? (
                <>
                  <Button text='Dashboard' class='btn-outline-info' url="/dashboard" />
                  &nbsp;
                  <button className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
                </>
                ):
              (
                <>
                  <Button text='Login' class='btn-outline-info' url="/login" />
                  &nbsp;
                  <Button text= 'Register' class='btn-info' url="/register" />
                </>
              )}
            </div>
        </nav>
    
    </>
  )
}

export default Header