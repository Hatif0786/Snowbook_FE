import React, {useState, useContext} from 'react'
import userContext from '../context/User/userContext'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
import loader from "../loader1.gif"
import "../components/css/Login.css"

const Login = () => {
    const context = useContext(userContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const {loginUser, setLogged} = context
    const [login, setLogin] = useState({email: "", password: ""})
    const [errmsg, setErrmsg] = useState("")
    const [err, setErr] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setErr(false)
        setLoading(true);
        if(login.email===""|| login.password==="" || (login.email==="" && login.password ==="")){
            setErr(true);
            setLoading(false);
            setLogin(login);
            setErrmsg("Please fill all fields.")
            navigate("/login");
        }else{
            loginUser(login).then((resp) => {
                if(resp && resp.message === "Sorry! Your credentials doesn't matched!!"){
                    setErr(true);
                    setLoading(false);
                    setLogin(login);
                    setErrmsg(resp.message)
                    navigate("/login");
                }else if (resp && resp.token) {
                    const { token } = resp;
                    localStorage.setItem('token', token);
                    localStorage.setItem("islogged", true); 
                    setLogged(true);
                    setLoading(false);
                    navigate("/about");
                    setLogin({ email: "", password: "" });
                }
            });
        }
        
    };
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLogin(prevuser => ({
        ...prevuser,
        [name]: value
        }));
    };

  
  return (
    <>

        <div className='container '>
        <h1 className='my-4 text-center'><b >Log In</b></h1>

        {err && (<div className="notifications-container my-4">
            <div className="error-alert">
            <div className="flex">
            <div className="flex-shrink-0">
                
                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="error-svg">
                <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill-rule="evenodd"></path>
                </svg>
            </div>
            <div className="error-prompt-container">
                <p className="error-prompt-heading">{errmsg}</p>
                <div className="error-prompt-wrap">
                {/* <ul className="error-prompt-list" role="list">
                    <li>Password must be at least !8 characters</li>
                    <li>Password must include Elon's baby name</li>
                </ul> */}
            </div>
            </div>
            </div>
            </div>
        </div>
        )}

      <main className='d-flex justify-content-center'>
        <section className="add-card page">
        {loading ? ( // Show Spinner if loading is true
              <Spinner loader={loader}/>
          ) : (
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
                          required
                      />
                  </label>
                  <label htmlFor="password" className="label"> {/* Corrected htmlFor value */}
                      <span className="title">Password</span> {/* Changed title */}
                      <input
                          className="input-field"
                          type="password"
                          id="password"
                          autoComplete='password'
                          name="password"
                          value={login.password}
                          placeholder="Password"
                          onChange={handleChange}
                          required
                      />
                  </label>
                  <input className="checkout-btn" type="button" onClick={handleClick} value="Login" />
              </form>
          )}

        </section>
      </main>

      <br />

    </div>
    </>
  )
}

export default Login