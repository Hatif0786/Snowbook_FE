import React, {useContext, useState} from 'react';
import "../components/css/Register.css";
import userContext from '../context/User/userContext';
import { useNavigate } from 'react-router-dom';
import loader from "../loader1.gif"
import Spinner from './Spinner';

const Register = () => {
    const context = useContext(userContext)
    const {addUser} = context
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [user, setUser] = useState({name: "", email: "", mobile:"", password: "", confirmpassword: ""})
    const [showAlert, setShowAlert] = useState(false)
    const handleClick = (e) => {
      e.preventDefault();
      setLoading(true);
      addUser(user)
          .then((resp) => {
              if (resp._id  ) { // Check status code
                  setShowAlert(true);
                  setTimeout(() => setShowAlert(false), 2000);
                  setUser({ name: "", email: "", mobile: "", password: "", confirmpassword: "" });
                  navigate("/login");
              } else {
                  setShowAlert(false);
                  setUser(user);
                  navigate("/signup");
              }
          })
          .catch((error) => {
              console.error('Error:', error);
              setShowAlert(false);
              setUser({ name: "", email: "", mobile: "", password: "", confirmpassword: "" });
              navigate("/signup");
          })
          .finally(() => {
              setLoading(false);
          });
  };
  

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevuser => ({
        ...prevuser,
        [name]: value
        }));
    };

  return (
    <>
    <div className='container'>
      <h1 className='my-4 text-center'><b >Register</b></h1>
      <main className='d-flex justify-content-center'>
        <section className="add-card page">
          {loading ? <Spinner loader={loader}/>
          : (<form className="form">
          <label htmlFor="name" className="label">
            <span className="title">Full Name</span>
            <input
              className="input-field"
              type="text"
              id="name"
              name="name"
              autoComplete='name'
              value={user.name}
              placeholder="Enter the Full Name"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email" className="label">
            <span className="title">Email</span>
            <input
              className="input-field"
              type="email"
              id="email"
              autoComplete='email'
              name="email"
              value={user.email}
              placeholder="Enter your EmailId"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="mobile" className="label">
            <span className="title">Phone</span>
            <input
              className="input-field"
              type="tel"
              id="mobile"
              name="mobile"
              autoComplete='mobile'
              value={user.mobile}
              placeholder="Enter your Phone Number"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password" className="label">
            <span className="title">Password</span>
            <input
              className="input-field"
              type="password"
              id="password"
              name="password"
              value={user.password}
              placeholder="Enter your Password"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="confirmpassword" className="label">
            <span className="title">Confirm Password</span>
            <input
              className="input-field"
              type="confirmpassword"
              id="confirmpassword"
              name="confirmpassword"
              value={user.confirmpassword}
              placeholder="Enter your Password Again"
              onChange={handleChange}
            />
          </label>
          
            <input className="checkout-btn" type="button" onClick={handleClick} value="Register" />
          </form>
          )}
        </section>
      </main>

      <br />

      <section className="alert-section my-4">
        {showAlert && (
          <div className="alert" style={{ backgroundColor: "#d17842", fontWeight: "bold", color: "black", borderRadius: "30px", width: "620px", border: "2px solid transparent", textAlign: "center" }} role="alert">
            user Added!!
          </div>
        )}
      </section>

    </div>
    </>
  );
};

export default Register;
