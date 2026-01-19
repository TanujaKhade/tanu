import React, { useState } from 'react'

const ApI_Htttp = () => {

    const [data,setdata] = useState({username:'',useremail:'',userpass:'',userskill:'',userprofile:null})

    const DataHandler=(e)=>{
        console.log(e.target.value)

        const{name,value}=e.target;
        setdata({...data,[name]:value})
        console.log(e.target.files[0].name)
    }

    const saveform=(e)=>{
        e.preventDefault()
        alert("from is succesfull subittet")
        console.log(data)
        setdata({username:'',useremail:'',userpass:'',userskill:'',userprofile:null})
    }
  return (
    <>
    <div className="container mt-5 justify-content-">
        <div className='row'>
    <h3 className="text-center mb-4">User Form</h3>
      <form className="border p-4 rounded shadow"  onSubmit={(e)=>saveform(e)} >
      
      {/* <!-- Username --> */}
      <div className="mb-3">
        <label for="username" className="form-label">Username</label>
        <input type="text" className="form-control" value={data.username}   onChange={(e)=>DataHandler(e)} id="username" name="username" placeholder="Enter username" required/>
      </div>
      
      {/* <!-- Email --> */}
      <div className="mb-3">
        <label for="useremail" className="form-label">Email</label>
        <input type="email" className="form-control" value={data.useremail}  onChange={(e)=>DataHandler(e)}  id="useremail" name="useremail" placeholder="Enter email" required/>
      </div>
      
      {/* <!-- Password --> */}
      <div className="mb-3">
        <label for="userpass" className="form-label">Password</label>
        <input type="password" className="form-control" value={data.userpass}  onChange={(e)=>DataHandler(e)}   id="userpass" name="userpass" placeholder="Enter password" required/>
      </div>
      
      {/* <!-- Skill (Select) --> */}
      <div className="mb-3">
        <label for="userskill" className="form-label">Skill</label>
        <select className="form-select" value={data.userskill}  onChange={(e)=>DataHandler(e)}   id="userskill" name="userskill" required>
          <option value="">-- Select Skill --</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
          <option value="python">Python</option>
        </select>
      </div>
      
      {/* <!-- Profile Upload --> */}
      <div className="mb-3">
        <label for="userprofile" className="form-label"  >Profile Picture</label>
        <input className="form-control" value={data.userprofile}  onChange={(e)=>DataHandler(e)}   type="file" id="userprofile" name="userprofile" accept="image/*"/>
      </div>
      
      {/* <!-- Submit Button --> */}
      <div className="text-center">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      
    </form>

</div>
</div>
    </>
   
  )
}

export default ApI_Htttp
