import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import './style.css'
function Dashboard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      'https://65e2ad7fa8583365b318673b.mockapi.io/crud/crud', {
      name: name,
      email: email,
    }
    );
    alert("Data submitted successfully!");
    history('/List')
  };
  return (
    <>
      <style>{'body { background:linear-gradient(90deg,blue,green); }'}</style>
      <form>

        <div className='container-dash'>
        <div className='formdata'>
          <div className='my-5 p-5  mx-5'>
            <h1 style={{ color: 'gray' }}>Insert</h1>
            <input type='text' className='form-control my-3' name='name' placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />

            <input type='email' className='form-control my-4' name='email' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)}></input>
            <button className='btn btn-danger' onClick={handlesubmit} type="submit">Submit</button>
            <Link to={"/"} className='btn btn-outline-primary mx-2'>Back</Link>
          </div>
        </div>
        </div>
      </form>
    </>
  )
}

export default Dashboard
