import { useState } from 'react';
import { useContext } from 'react';
import { useUserContext } from '../src/context/UserContext';

function LoginForm() {
    // State for inpit values
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');
    const {currentUser, handleUpdateUser} = useUserContext();

    // form submission handler

    const handleSubmit = (e) => {
        e.preventDefault();

    // password validation logic
        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 characters long.');
        } else if (userPassword === userEmail) {
            setSubmitResult('Password must not match email address.');
        } else {
            setSubmitResult('Successful login.');
            handleUpdateUser({ email: userEmail });
        }
    };

    if (currentUser.email) return (
        <><p>Welcome {currentUser.name}!</p>
        <p>Your User Name: {currentUser.email}</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
        </>
    ); 

    return (
        <div className="LoginForm componentBox">
            <form onSubmit={handleSubmit}>
                
                
        
                
                
                
                <div className="formRow">
                    <label>Email Address: 
                        <input type="email" value={userEmail} name="userEmail"
                        onChange={(e) => setUserEmail(e.target.value)} />
                    </label>
                </div>
                <div className="formRow">
                    <label>Password: 
                        <input tupe="password" value={userPassword} name="password"
                        onChange={(e) => setUserPassword(e.target.value)} />
                    </label>
                </div>
                <button>Log In</button>
                <p>{submitResult}</p>
            </form>
        </div>
    )
}

export default LoginForm;