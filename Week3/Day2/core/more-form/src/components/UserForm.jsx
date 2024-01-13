import React, { useState } from 'react';

const UserForm = () => {    const [firstName,setFirstName] = useState("")
const [lastName,setLastName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [confirm,setConfirm] = useState("")
const [error ,setError] = useState("")
const handleForm = (e) => {
    if (e.target.name==='Firstname' && e.target.value.length < 2) {
      setError("First name must be at least 2 characters");
    }
    else if (e.target.name==='Lastname' && e.target.value.length < 2) {
      setError("Last name must be at least 2 characters");
    }
    else if (e.target.name==='Email' && e.target.value.length < 2) {
      setError("Email must be at least 2 characters");
    }
    else if (e.target.name === 'password' && e.target.value.length < 8 && e.target.value !== confirm) {
        setError("Passwords must be at least 8 characters and passwords must match");
      }
      

    else {
      setError("");
    }
    
  };


return (
<div>
    <form > 
        <div >
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" name="Firstname" className="form-control" value={firstName}  onChange={(e)=> {setFirstName(e.target.value) ;handleForm(e)}}/>
                {
                    firstName && error? <p>{error}</p>:''
                }

        </div>
        <div>                
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text"className="form-control"name='Lastname' value={lastName} onChange={(e)=>{setLastName(e.target.value); handleForm(e)}}/>
            {
                    lastName && error? <p>{error}</p>:''
            }
        </div>
        <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text"className="form-control" name='Email' value={email} onChange={(e)=>{setEmail(e.target.value);handleForm(e)}} />
            {
                email && error? <p>{error}</p>:''
            }
        </div>
        <div>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={password} onChange={(e)=>{setPassword(e.target.value); handleForm(e)}}/>
            {
                password && error? <p>{error}</p>:''
            }
        </div>
        <div>
            <label htmlFor="confirm" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" value={confirm} onChange={(e)=>setConfirm(e.target.value)}/>
        </div>
        <h6>Your Form data</h6>
    </form> 
    <div className="card">
        <p>First name : {firstName}</p>
        <p> last name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>ConfirmPassword {confirm}</p>
    </div>
</div>
)
}
export default UserForm;
