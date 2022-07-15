import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <form>
            <input type='text' placeholder='Enter Username' name='username'/>
            <input type='password' placeholder='Enter Password' name='password'/>
            <input type='submit'/>  
        </form>
    </div>
  )
}

export default LoginPage