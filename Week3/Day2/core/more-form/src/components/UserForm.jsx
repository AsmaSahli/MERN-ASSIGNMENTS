import React, { useState } from 'react';

const UserForm = () => {    const [firstName,setFirstName] = useState("")
const [lastName,setLastName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [confirm,setConfirm] = useState("")


return (
<div>
    <form > 
        <div >
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" name="Firstname" className="form-control" value={firstName}  onChange={(e)=> setFirstName(e.target.value) }/>
                {firstName.length < 2 && firstName.length > 0 ? (
                  <p>First Name must be at least 2 characters</p>
          ) : " "
          }

        </div>
        <div>                
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text"className="form-control"name='Lastname' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            {lastName.length < 2 && lastName.length > 0 ? (
            <p>Last Name must be at least 2 characters</p>
          ) : ""}
        </div>
        <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text"className="form-control" name='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            {email.length < 5 ? ( <p>Email must be at least 5 characters</p> ):" "}
        </div>
        <div>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {password.length < 8 ? (
            <p>Password must be at least 8 characters</p>
          ) : ""}
        </div>
        <div>
            <label htmlFor="confirm" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" value={confirm} onChange={(e)=>setConfirm(e.target.value)}/>
            {confirm !== password ? <p>Passwords must match</p> : null}
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
