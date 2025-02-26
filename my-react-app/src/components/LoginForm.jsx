// import { useState } from 'react';
// import { useUserContext } from '../context/userContext';


// function LoginForm() {
//     // State for input values
//     const [userName, setUserName] = useState('');
//     const [userEmail, setUserEmail] = useState('');
//     const [userPassword, setUserPassword] = useState('');
//     const [submitResult, setSubmitResult] = useState('');
//     // destructure the context values passed via UserProvider
//     const {currentUser, handleUpdateUser} = useUserContext();


//     // form submission handler

//     const handleSubmit = (e) => {
//         e.preventDefault();

//     // password validation logic
//         if (userPassword.length < 5) {
//             setSubmitResult('Password must be at least 5 characters long.');
//         } else if (userPassword === userEmail) {
//             setSubmitResult('Password must not match email address.');
//         } else {
//             setSubmitResult('Successful login.');
//             // context function
//             handleUpdateUser({ name: userName, email: userEmail }); 
//         }
//     };

//     // if user is logged in, show message instead of form
//     if (currentUser.email) return (
//         <>
//             <p>Welcome {currentUser.name || "Guest"}!</p>
//             <p>Your email: {currentUser.email}</p>
//             <button onClick={() => handleUpdateUser({})}>Log Out</button>
//         </>
//     );
//     // otherwise render same form as previously, no changes
//     return (
//         <div className="LoginForm componentBox">
//             <form onSubmit={handleSubmit}>
//                 <div className="formRow">
//                     <label>
//                         Name:
//                         <input
//                         type="text"
//                         value={userName}
//                         name="userName"
//                         onChange={(e) => setUserName(e.target.value)}
//                         required
//                         />
//                     </label>
//                     <label>Email Address: 
//                         <input 
//                         type="email" 
//                         value={userEmail} 
//                         name="userEmail"
//                         onChange={(e) => setUserEmail(e.target.value)} 
//                         />
//                     </label>
//                 </div>
//                 <div className="formRow">
//                     <label>Password: 
//                         <input 
//                         type="password" 
//                         value={userPassword} 
//                         name="password"
//                         onChange={(e) => setUserPassword(e.target.value)} 
//                         />
//                     </label>
//                 </div>
//                 <button>Log In</button>
//                 <p>{submitResult}</p>
//             </form>
//         </div>
//     )
// }

// export default LoginForm;

// ****MODULE 7 PT 2 - EXERCISE 5****
import { useState } from "react";
import { useUserContext } from "../context/userContext";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert } from "@mui/material";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Jen's Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

// see https://github.com/mui/material-ui/blob/v5.14.8/docs/data/material/getting-started/templates/sign-in/SignIn.js
export default function LoginForm() {
    const [submitResult, setSubmitResult] = useState({});
    const { currentUser, handleUpdateUser } = useUserContext();
    const submitMessage = submitResult.msg ? <Alert severity={submitResult.isError? "error" : "success"}>{submitResult.msg}</Alert> : null;

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userEmail = data.get("email");
        const userPassword = data.get("password");

    // add some password validation
        if (userPassword.length < 5) {
            setSubmitResult({msg: "Password must be at least 5 characters long", isError: true});
        } else if (userPassword === userEmail) {
            setSubmitResult({msg: "Password must not match email address", isError: true});
        } else {
            setSubmitResult({msg: "Successful login.", isError: false});
            handleUpdateUser({ email: userEmail });
        }
    };

    if (currentUser.email) {
        return (
            <>
                <Alert severity="success" sx={{maxWidth:300, my: 3, mx: 'auto'}}>Welcome {currentUser.email}!</Alert>
                <Button onClick={() => handleUpdateUser({})} variant="contained">Log Out</Button>
            </>
        );
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                }}
            >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Login
                </Button>
                {submitMessage}
            </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}