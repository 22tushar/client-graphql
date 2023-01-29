import React, { useState } from 'react'
import './App.css'
import { useQuery, gql } from '@apollo/client';
export default function App() {

  const GET_ALL_MOVIES = gql`  
query {
  getMovies{
      name
      rating
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
        <table>
          
        {data.getMovies.map((value,index) => {
          return (
            <>
               <tr key={index}>
              <td>{value.name}</td>
              <td>{value.rating}</td>
            </tr>
            </>
          )
        })}
        </table>
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
