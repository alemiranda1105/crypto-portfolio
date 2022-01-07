import { useState } from "react";
import { useFetch } from "../hooks/useFecth";
import sha256 from 'crypto-js/sha256';

export const LoginForm = () => {
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const data = {
            email: email,
            password: sha256(password).toString()
        }
        console.log(JSON.stringify(data));
    }

    const emailValidation = () => {
        const regexp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        setEmailError(!regexp.test(email));
    }

    const passwordValidation = () => {
        setPassError(password.length < 5);
    }

    return(
        <div className="basis-1/2 w-3/4 flex flex-col justify-center justify-items-center items-center">
            <form onSubmit={handleSubmit} className="w-1/2" autoComplete="new-password">
                <div className="flex flex-col">
                    <label htmlFor="email" className="font-black">Email</label>
                    <input autoComplete="new-password" type="email" id="email" value={email} onChange={(e) =>{ setEmail(e.target.value); emailValidation()}} placeholder="crypto@crypto.btc" className="p-2.5 rounded-md" required/>
                    {emailError &&
                        <p className="text-red-500 font-bold">Please check your email</p>
                    }
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password" className="font-black">Password</label>
                    <input type="password" id="password" onChange={(e) => { setPassword(e.target.value); passwordValidation() }} className="p-2.5 rounded-md" required/>
                    {passError &&
                        <p className="text-red-500 font-bold">The password is too short!</p>
                    }
                </div>
                <div className="basis-1/4 flex flex-col justify-center justify-items-center items-center">
                    <button type="submit" className="ease-in duration-200 bg-blue-500 shadow-lg shadow-blue-500/50 hover:shadow-none text-white font-black rounded-md py-3 px-8 my-5 w-max lg:font-3xl">Login</button>
                </div>
            </form>
        </div>
    );
}