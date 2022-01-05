import "../styles/HomePage.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return(
        <div className="h-screen flex flex-col justify-center justify-items-center items-center bg-gradient-to-b from-slate-800 to-blue-900">
            <div className="h-1/2 w-4/5 flex flex-col justify-center justify-items-center items-center bg-slate-200/80 rounded-md shadow-lg">
                <div className="basis-1/4">
                    <h1 className="text-center lg:text-5xl sm:text-xl md:text-2xl font-bold">Welcome to your Crypto portfolio!</h1>
                </div>
                <div className="basis-1/2 flex flex-col justify-center justify-items-center items-center">
                    <Link to="/login" className="ease-in duration-200 bg-blue-500 shadow-lg shadow-blue-500/50 hover:shadow-none text-white font-black rounded-md py-3 px-8 my-5 w-max lg:font-3xl">Login</Link>
                    <Link to="/sigunp" className="ease-in duration-200 bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:shadow-none text-white font-black rounded-md py-3 px-8 w-max">Sign up</Link>
                </div>
            </div>
        </div>
    );
}