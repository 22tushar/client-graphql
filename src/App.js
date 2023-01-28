import React, { useState } from 'react'
import './App.css'
export default function App() {

  const [Movie,setMovie]=useState('');
 
  const handleChange = (e) => {
       setMovie(e.target.value)
       console.log(Movie)
  }

  const handleSubmit = event => {
    event.preventDefault();
    setMovie('');
  }
  return (

    <div>
      <div className='App' >Add Movie</div>

      <div className='container'>
      <form onSubmit={handleSubmit}>
      <label>
        <input type="text" placeholder='Enter Movie Name' value={Movie} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
      </div>
    
    </div>

  )
}
