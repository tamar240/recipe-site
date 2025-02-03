import { useContext } from "react"
import { userContext } from "./User"
import { useNavigate } from "react-router-dom"

const Logout = () => {
  const [state, dispatch] = useContext(userContext)
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