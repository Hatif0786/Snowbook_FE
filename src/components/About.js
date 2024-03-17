import React, { useContext, useEffect } from 'react';
import Note from "../components/Note";
import Spinner from './Spinner';
import loader from '../loader.gif'
import noteContext from '../context/Note/noteContext';
import { useState } from 'react';
import userContext from '../context/User/userContext';

const About = () => {
  // Use useContext to access the context
  const { setNotes } = useContext(noteContext);
  const { getToken, logged} = useContext(userContext); // Include setLogged to update the logged state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await fetch('https://snowbook-be.onrender.com/api/note/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setNotes(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Update loading state once data fetching is complete
      }
    };

    // Call the async function only once when the component mounts
    fetchData();

    // Cleanup function to clear notes when the user logs out
    return () => {
      if (logged===false) { // Check if user is logged out
        setNotes([]); // Clear notes data
      }
    };
  }, [getToken, logged, setNotes]); // Include setLogged in the dependency array

  return (
    <div className='row my-3'>
      {loading ? <Spinner loader={loader}/> : <Note />}
    </div>
  );
};

export default About;
