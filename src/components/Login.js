import React, {useState, useContext} from 'react'
import userContext from '../context/User/userContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const context = useContext(userContext)
    const navigate = useNavigate()
    const {loginUser, logged, setLogged} = context
    const handleClick = (e) => {
        e.preventDefault();
        loginUser(login).then((resp)=> {
            const {token} = resp;
            localStorage.setItem('token', token);
            setLogged(true)
            navigate("/about")
            setLogin({email: "", password: ""})
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLogin(prevuser => ({
        ...prevuser,
        [name]: value
        }));
    };

  const [login, setLogin] = useState({email: "", password: ""})
  return (
    <>
    <div className='container'>
      <h1 className='my-4 text-center'><b >Log In</b></h1>
      <main className='d-flex justify-content-center'>
        <section className="add-card page">
          <form className="form">
          <label htmlFor="email" className="label">
            <span className="title">Email</span>
            <input
              className="input-field"
              type="email"
              id="email"
              name="email"
              autoComplete='email'
              value={login.email}
              placeholder="xyz@bc.com"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email" className="label">
            <span className="title">Email</span>
            <input
              className="input-field"
              type="password"
              id="password"
              autoComplete='password'
              name="password"
              value={login.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </label>
          
          
            <input className="checkout-btn" type="button" onClick={handleClick} value="Login" />
          </form>
        </section>
      </main>

      <br />

    </div>
    </>
  )
}

export default Login