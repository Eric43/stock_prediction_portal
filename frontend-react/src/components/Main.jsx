import React from 'react'
import Button from './Button'
const Main = () => {
  return (

    <>
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>This stock prediction portal is a application developed as part 
                of a Udemy course taught by Rathan Kumar.This application utilizes machine learing with Keras-TF 
                and LSTM models.  It uses basic models to predict future stock prices with 100 and 200 d moving averages.
            </p>
            <Button text='Login' class='btn-outline-info' />
        </div>

    </div>
    
    </>
    
  )
}

export default Main