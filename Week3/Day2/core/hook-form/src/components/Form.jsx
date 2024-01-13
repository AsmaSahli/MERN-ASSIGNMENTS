import React , {useState}from 'react'

const Form = (props) => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirm,setConfirm] = useState("")
    

    
     
  return (
    <div>
        <form >
            <div >
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" value={firstName}  onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div>                
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text"className="form-control" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text"className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
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

export default Form