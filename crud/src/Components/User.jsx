import axios from "axios"
import { useEffect, useState } from "react"
import style from "./home.module.css"
import { Link } from "react-router-dom"
const User=()=>{

    let [content,setContent]=useState([])
     
    useEffect(()=>{
        axios.get('http://localhost:3000/user')
        .then((resp)=>{
            setContent(resp.data)
            // console.log(resp.data);
        })
    },[])

    let deleteData=(id)=>{
        axios.delete(`http://localhost:3000/user/${id}`)
        window.location.assign("/user")
    }

    return(
        <div id={style.user}>
         {content.map((x)=>{
            return(
                <div id={style.tab}>
                    <table>
                        <tr>
                            <th colSpan={2}><h4>User:{x.id}</h4></th>
                        </tr>
                        <tr>
                            <td><h4>Name</h4></td>
                            <td><h4>:{x.name}</h4></td>
                        </tr>
                        <tr>
                            <td><h4>Salary</h4></td>
                            <td><h4>:{x.salary}</h4></td>
                        </tr>
                        <tr>
                            <td><h4>Company</h4></td>
                            <td><h4>:{x.company}</h4></td>
                        </tr>
                        <tr>
                            <td><Link to={`/edit/${x.id}`}>Edit</Link></td>
                            <td><button onClick={()=>{deleteData(x.id)}}>Delete</button></td>
                        </tr>
                    </table>
                </div>
            )
         })}
        </div>
    )
}
export default User