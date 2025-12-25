import React from 'react'
import Button from './Button'


const Header = () => {
  return (
    <>
        <nav className='navbar container pt-4 pb-4 align-items-start'>
            <a className='navbar-brand text-cyan' href="">Stock Prediction Portal</a>

            <div>
                <Button />
                &nbsp;
                <a className='btn btn-info' href=''>Register</a>
            </div>
        </nav>
    
    </>
  )
}

export default Header