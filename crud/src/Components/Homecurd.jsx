import { Link } from "react-router-dom"
import Style  from "./home.module.css"

const Homecurd=()=>{
    return(
      <div>
        <section id={Style.nav} >
            <Link to="/">Create-User</Link>
            <Link to="/user">User</Link>

        </section>
      </div>
        
    
        
       
    )
}
export default Homecurd