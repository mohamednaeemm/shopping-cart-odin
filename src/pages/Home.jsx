import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-20 '>
      <h1 className='text-4xl font-bold '>Welcome to Mohamed Naeem's Store</h1>
      <h2 className='text-3xl '>Anything here is expensive and low quality</h2>
      <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'>
        <Link to='/store'>Go Shopping ;)</Link>
      </button>
    </div>
  )
}

export default Home
