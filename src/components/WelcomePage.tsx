import { Box, Button, Grid2 as Grid, Modal, TextField, Typography, IconButton, InputAdornment } from "@mui/material";
import { createContext, FormEvent, useContext, useRef, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { userContext } from "./User";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { modalStyle, loginButtonStyle, signUpButtonStyle, textFieldStyle, modalDescriptionStyle, submitButtonStyle } from './styles';

export const setIsLoginContext = createContext<Function>(() => { });
export const userIdContext = createContext<number>(0);

const WelcomePage = () => {
    const [state, dispatch] = useContext(userContext);
    const [isLogin, setIsLogin] = useState(false);
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState<"register" | "login">("register");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleClose = () => setOpen(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!emailRef.current?.value || !passwordRef.current?.value) {
            alert("חובה להכניס מייל וסיסמא");
            return;
        }
        try {
            const currentUser = {
                email: emailRef.current?.value,
                password: passwordRef.current?.value
            }
            const res = await axios.post(
                'http://localhost:3000/api/user/' + status,
                currentUser
            )
            if (status === "register") {
                dispatch({ data: { id: res.data.userId, email: currentUser.email, password: currentUser.password }, type: 'ADD' });
            } else {
                dispatch({ data: res.data.user, type: 'ADD' });
            }
            setOpen(false);
            setIsLogin(true);
            navigate('/home');
        }
        catch (error: any) {
            if (error.response) {
                const messages: { [key: number]: string } = {
                    400: "Invalid request. Please check your input.",
                    401: "Unauthorized. Please check your email or password.",
                    404: "Server not found. Please try again later.",
                    500: "Server error. Please try again later."
                };
                alert(messages[error.response.status] || `Unexpected error: ${error.response.status}`);
            }
        }
    }
        return (
            <>
                <Grid container spacing={2}>
                    <Grid>
                        {!isLogin && (
                            <Grid>
                                <Button color="primary" variant="contained" sx={loginButtonStyle} onClick={() => { setStatus("login"); setOpen(!open) }}>
                                    Login
                                </Button>
                                <Button color="primary" variant="contained" sx={signUpButtonStyle} onClick={() => { setStatus("register"); setOpen(!open) }}>
                                    Sign Up
                                </Button>
                            </Grid>
                        )}
                    </Grid></Grid>
                <Modal open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={modalStyle}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            הכנס פרטים  </Typography>
                        <Typography id="modal-modal-description" sx={modalDescriptionStyle} component="div">
                            <TextField label="email" type="email" inputRef={emailRef} fullWidth />
                            <TextField
                                label="password"
                                inputRef={passwordRef}
                                type={showPassword ? "text" : "password"}
                                sx={textFieldStyle}
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={togglePasswordVisibility}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }} />
                            <Button onClick={handleSubmit} sx={submitButtonStyle}>
                                {status === 'login' ? 'Login' : 'Sign Up'}
                            </Button>
                        </Typography>
                    </Box>
                </Modal>
            </>)
}

export default WelcomePage