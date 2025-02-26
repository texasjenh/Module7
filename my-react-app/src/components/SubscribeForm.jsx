import { useState } from "react";
import { useFormInput } from "../hooks/UseFormInput";

export default function SubscribeForm() {
    const [status, setStatus] = useState('');
    // similar state variables mapped to form inputs
    // const [firstName, setFirstName] = useState('Mary');
    // const [email, setEmail] = useState('mary@poppins.com');
    const [nameInputProps, resetName] = useFormInput('My First Name');
    const [emailInputProps, resetEmail] = useFormInput('myemail@myemail.com')
    // similar handler functions
    // const handleNameChange = (e) => setFirstName(e.target.value);
    // const handleEmailChange = (e) => setEmail(e.target.value);
    
    function handleSubscribe() {
        // setFirstName(''); setEmail('');
        resetName(); resetEmail();
        setStatus('Thanks for subscribing!')
    }
    
    return (
        <div className="SubscribeForm componentBox">
            <label>First name: <input {...nameInputProps} />
                {/* <input value={firstName} onChange={handleNameChange} /> */}
            </label>
            <label>Email: <input {...emailInputProps} />
                {/* <input value={email} onChange={handleEmailChange} /> */}
            </label>
            <button onClick={handleSubscribe}>Subscribe</button>
            <div>{status}</div>
        </div>
    );
}
   