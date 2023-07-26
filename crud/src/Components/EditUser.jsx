import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from "./home.module.css"

const EditUser=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let {index}=useParams()
    let navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/user/${index}`)
        .then((resp)=>{
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })

    },[])
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
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/user/${index}`,payload)
        .then(()=>{
            console.log("Data Putted")
        })
        .catch(()=>{
            console.log("Data Not Putted")
        })
        navigate("/user")
    }
    return(
        <div id={style.myForm}> 
         <form action="">
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={nameData}/>
            <label htmlFor="">Salary</label>
            <input type="text" value={salary} onChange={salaryData}/>
            <label htmlFor="">Company</label>
            <input type="text" value={company} onChange={companyData} />
            <button onClick={formHandle}>Update</button>
         </form>
        </div>
    )
}
export default EditUser