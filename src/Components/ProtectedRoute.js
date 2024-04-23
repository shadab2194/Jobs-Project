import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

const ProtectedRoute = (props) => {
    const {Component}=props
    const jwttoken =Cookies.get("token")
    const navigate=useNavigate();
    useEffect(()=>{
        if(jwttoken===undefined){ 
            navigate("/login");
        }
    })
  return (
    <div>
      <Component/>
    </div>
  )
}

export default ProtectedRoute
