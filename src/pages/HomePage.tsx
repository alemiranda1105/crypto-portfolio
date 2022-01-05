import { Link } from "react-router-dom";

export const HomePage = () => {
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="p-6 w-80 m-20 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center">
                <h1 className="text-2xl font-bold">Welcome to crypto portfolio!</h1>
                <Link to="/login" className="items-center py-2 px-3 m-2 text-sm font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login
                </Link>
                <Link to="/signup" className="items-center py-2 px-3 m-2 text-sm font-bold text-center text-black rounded-lg border-2 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Sign up
                </Link>
            </div>
        </div>
    );
}