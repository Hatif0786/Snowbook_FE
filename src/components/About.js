import React, {useContext, useEffect} from 'react'
import noteContext from '../context/Note/noteContext'

const About = () => {
  const a = useContext(noteContext)
  useEffect(() => {
    a.update()
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>
      <h1>About Component - {a.state.name}</h1>
    </div>
  )
}

export default About
