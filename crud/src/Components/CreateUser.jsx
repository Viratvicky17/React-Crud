import axios from "axios"
import { useState } from "react"
import style from "./home.module.css"
import { useNavigate } from "react-router-dom"

const CreateUser=()=>{

let [name,setName]=useState("")
let [salary,setSalary]=useState("")
let [company,setCompany]=useState("")

let navegate=useNavigate()

let nameData=(e)=>{
    setName(e.target.value)
}
let salaryData=(e)=>{
    setSalary(e.target.value)
}
let companyData=(e)=>{
    setCompany(e.target.value)
}
let formHandle=(e)=>{
e.preventDefault()
let payload ={name,salary,company}
axios.post(" http://localhost:3000/user",payload)
.then(()=>{
    console.log("Data Added")
})
.catch(()=>{
    console.log("Data is Not Added")
})
navegate("/user")
}

    return(
        <div id={style.myForm}>
           <form action="">
           <label htmlFor="">Name</label>
           <input type="text" value={name} onChange={nameData}/><br />
           <label htmlFor="">Salary</label>
           <input type="text" value={salary} onChange={salaryData}/><br />
           <label htmlFor="">Company</label>
           <input type="text" value={company} onChange={companyData}/>

           <button onClick={formHandle}>Submit</button>

           </form>
        </div>
    )
}
export default CreateUser