
export const LoginForm = () => {
    return(
        <div className="basis-1/2 w-3/4 flex flex-col justify-center justify-items-center items-center">
            <form className="w-1/2">
                <div className="flex flex-col">
                    <label htmlFor="email" className="font-black">Email</label>
                    <input type="email"id="email" placeholder="crypto@crypto.btc" className="p-2.5 rounded-md"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="p-2.5 rounded-md"/>
                </div>
                <div className="basis-1/4 flex flex-col justify-center justify-items-center items-center">
                    <button className="ease-in duration-200 bg-blue-500 shadow-lg shadow-blue-500/50 hover:shadow-none text-white font-black rounded-md py-3 px-8 my-5 w-max lg:font-3xl">Login</button>
                </div>
            </form>
        </div>
    );
}