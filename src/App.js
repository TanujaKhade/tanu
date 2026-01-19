// import React, { useState } from 'react'
// import { useEffect } from 'react';
// import Usememo from './Usememo';
// import ApI_Htttp from './ApI_Htttp';

// function App() {

// const [count,setcount] = useState(0);
// const [bg,setbg] = useState('red')

// const GoBg=()=>{
//   setbg('blue')
// }

// useEffect(()=>{
//   setTimeout(()=>{
//     setbg('pink')
//   },2000)
// },[])
//   return (
//   <>
//  <h1>count = {count}</h1>

//  <button onClick={()=>setcount(count+1)}>Count up</button>
//  <button onClick={()=>setcount(count-1)}>Count down</button>
   

//    <h1 style={{backgroundColor:bg}}>Background color is {bg}</h1>
//    <button onClick={()=>GoBg()}>onclikc</button>

//    <Usememo></Usememo>
//    <ApI_Htttp></ApI_Htttp>
//   </>
//   )
// }

// export default App


import React from 'react'
import { useState } from 'react'

const App = () => {

  const [data, setdata] = useState({
    username: '',
    useremail: '',
    userpass: '',
    userskill: '',
    userprofile: null
  })

  const DataHandler = (e) => {
    const { name, value, files, type } = e.target

    if (type === "file") {
      setdata({ ...data, [name]: files[0] })
    } else {
      setdata({ ...data, [name]: value })
    }
  }

  const saveform = (e) => {
    e.preventDefault()
    alert('Form successfully submitted!')
    console.log(data)

    setdata({
      username: '',
      useremail: '',
      userpass: '',
      userskill: '',
      userprofile: null
    })
  }

  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center mb-4">User Form</h3>

        <form className="border p-4 rounded shadow" onSubmit={saveform}>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={data.username}
              onChange={DataHandler}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="useremail" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="useremail"
              value={data.useremail}
              onChange={DataHandler}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="userpass" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="userpass"
              value={data.userpass}
              onChange={DataHandler}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="userskill" className="form-label">Skill</label>
            <select
              className="form-select"
              name="userskill"
              value={data.userskill}
              onChange={DataHandler}
              required
            >
              <option value="">-- Select Skill --</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="react">React</option>
              <option value="python">Python</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="userprofile" className="form-label">Profile Picture</label>
            <input
              type="file"
              className="form-control"
              name="userprofile"
              accept="image/*"
              onChange={DataHandler}
            />
          </div>

          <div className="text-center">
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default App

