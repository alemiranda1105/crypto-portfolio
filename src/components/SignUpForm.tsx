import { useState } from "react";
import sha256 from 'crypto-js/sha256';
import { useCookies } from "react-cookie";
import { CookieOptions } from "../types/CookieOptions";

export const SignUpForm = () => {
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [session, setSession] = useCookies(['session']);
    const [token, setToken] = useCookies(['token']);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setLoading(true);
        const data = {
            email: email,
            password: sha256(password).toString()
        }
        fetch(`${process.env.REACT_APP_API_URL}/users/`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => {
            if(res.ok) {
                return res.json();
            } else {
                throw Error("An error has suceed");
            }
        }).then(data => {
            setLoading(false);
            let user = data.data[0];
            let token = data.token.access_token;
            setSession('session', user.id, CookieOptions);
            setToken('token', token, CookieOptions);
        }).catch(() => {
            setLoading(false);
            setEmailError(true);
            setPassError(true);
        });
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
                        <p className="text-red-500 font-bold">Please, check your email</p>
                    }
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password" className="font-black">Password</label>
                    <input type="password" id="password" onChange={(e) => { setPassword(e.target.value); passwordValidation() }} className="p-2.5 rounded-md" required/>
                    {passError &&
                        <p className="text-red-500 font-bold">Please, check your password</p>
                    }
                </div>
                <div className="basis-1/4 flex flex-col justify-center justify-items-center items-center">
                    {!loading &&
                    <button type="submit" className="ease-in duration-200 bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:shadow-none text-white font-black rounded-md py-3 px-8 my-5 w-max lg:font-3xl">Join!</button>
                    }
                    {loading &&
                    <button type="submit" className="ease-in duration-200 bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:shadow-none text-white font-black rounded-md py-3 px-8 my-5 w-max lg:font-3xl animate-bounce">Loading...</button>
                    }
                </div>
            </form>
        </div>
    );
}