import { useContext } from "react"
import { UserContext } from "./User"
import { useNavigate } from "react-router-dom"

const Logout = () => {
  const [state, dispatch] = useContext(UserContext)
  const navigate = useNavigate();
  dispatch({
    type: 'DELETE'
  });
  navigate('/')
  
  return (
    <>
    </>
  )
}
export default Logout