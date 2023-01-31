import React, { useState } from 'react'
import './App.css'
import { useQuery, gql } from '@apollo/client';
export default function App() {

  const GET_ALL_MOVIES = gql`  
query {
  getMovies{
      name
      rating
      producers{
         name
         by
      }
  }
}
`
  // const [Movie,setMovie]=useState('');

  // const handleChange = (e) => {
  //      setMovie(e.target.value)
  //      console.log(Movie)
  // }

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setMovie('');
  // }

  const { loading, error, data } = useQuery(GET_ALL_MOVIES);

  if (loading) return <div>loading...</div>

  if (error) console.log(error.message)
  return (

    <div className='App' >
      <div className='container'>
        <ul>
          {data.getMovies.map((innerArray, outerIndex) => (
            <li key={outerIndex}>
              <li>{innerArray.name}</li>
              <li>{innerArray.rating}</li>
              <ul>
                {innerArray.producers.map((item, innerIndex) => (
                  <li key={innerIndex}>{item.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

{/* <div className='container'>
      <form onSubmit={handleSubmit}>
      <label>
        <input type="text" placeholder='Enter Movie Name' value={Movie} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
      </div>
     */}
