import { FormEvent, useContext, useRef, useState } from "react"
import { Alert, Box, Button, Modal, TextField, Typography } from "@mui/material"
import axios from "axios";
import { UserContext } from "./User";
import { useNavigate } from "react-router-dom";
import { updateStyle } from "./styles"
const UpdateUser = () => {
  const [open, setOpen] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  }

  const [state, dispatch] = useContext(UserContext);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  console.log(state?.email);
  console.log(state?.password);

  const handelUpdate = async (e: FormEvent) => {
    e.preventDefault();
    const currentUser = {
      firstName: firstNameRef.current?.value || "",
      lastName: lastNameRef.current?.value || "",
      email: emailRef.current?.value || "",
      password: state?.password || "",
      address: addressRef.current?.value || "",
      phone: phoneRef.current?.value || "",
    };

    try {
      const res = await axios.put( 'http://localhost:3000/api/user' ,currentUser,
        {
          headers: { 'user-id': state.id }
        }
      );
      dispatch({
        type: 'UPDATE',
        data: currentUser
      });
      navigate('/home');
    } 
    catch (error: any) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div>
        {error !== "" && <Alert severity="error" sx={{ position: 'absolute', top: 50, left:50 , zIndex: 9999 }}>{error}</Alert>}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={updateStyle}>
            <form onSubmit={handelUpdate}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                מלא את הפרטים
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <TextField label="שם פרטי" inputRef={firstNameRef} sx={{ mt: 2 }} defaultValue={state?.firstName} />
                <TextField label="שם משפחה" inputRef={lastNameRef} sx={{ mt: 2 }} defaultValue={state?.lastName} />
                <TextField label="כתובת" inputRef={addressRef} sx={{ mt: 2 }} defaultValue={state?.address} />
                <TextField label="טלפון" inputRef={phoneRef} sx={{ mt: 2 }} defaultValue={state?.phone} />
                <TextField label="מייל" inputRef={emailRef} sx={{ mt: 2 }} defaultValue={state?.email} />
                <Button type="submit" >עדכן</Button>
              </Typography>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default UpdateUser;