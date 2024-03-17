import React from 'react';
import UserContext from './userContext';
import { useState } from 'react';

const UserState = (props) => {
      const [users, setUsers] = useState([])
      const [logged, setLogged] = useState(false)


      const addUser = async ({ name, email, mobile, password, confirmpassword }) => {
        try {
            const resp = await fetch("https://snowbook-be.onrender.com/api/user/add", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, mobile, password }) // Pass the data to be sent as JSON
            });
            if (resp.ok) { // Check if response is successful (status code in the range 200-299)
                return await resp.json();
            } else {
                console.error('Error adding User:', resp.status, resp.statusText);
            }
        } catch (error) {
            console.error('Error adding User:', error);
        }
    }

    const getToken = () => {
        return localStorage.getItem("token")
    }

    const isLoggedIn =() => {
        if(localStorage.getItem("isLogged")){
            return true;
        }else{
            return false;
        }
    }

    const loginUser = async ({email, password}) => {
        try {
            const resp = await fetch("https://snowbook-be.onrender.com/api/user/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email,password }) // Pass the data to be sent as JSON
            });
            if (resp.ok) { // Check if response is successful (status code in the range 200-299)
                return await resp.json();
            }else if (resp.status === 500) { // Handle 500 Internal Server Error
                return await resp.json();
            } else {
                console.error('Error Login User:', resp.status, resp.statusText);
            }
        } catch (error) {
            console.error('Error Login User:', error);
        }
    }


    return (
        <UserContext.Provider value={{users, setUsers, addUser, loginUser, getToken, isLoggedIn, logged, setLogged}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState