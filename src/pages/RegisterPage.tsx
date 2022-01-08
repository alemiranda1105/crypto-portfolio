import { SignUpForm } from "../components/SignUpForm";

export const RegisterPage = () => {
    return(
        <div className="h-screen flex flex-col justify-center justify-items-center items-center bg-gradient-to-b from-slate-800 to-blue-900">
            <div className="h-1/2 w-4/5 flex flex-col justify-center justify-items-center items-center bg-slate-200/80 rounded-md shadow-lg">
                <div className="basis-1/4">
                    <h1 className="text-center lg:text-5xl sm:text-xl md:text-2xl font-bold">Join us!</h1>
                </div>
                <SignUpForm />
            </div>
        </div>
    );
}