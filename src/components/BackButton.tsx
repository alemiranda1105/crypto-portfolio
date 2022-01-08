import { Link } from "react-router-dom";
import { ReactComponent as BackIcon } from "../assets/img/go-back-icon.svg"

export interface BackButtonProps {
    url: string
}

export const BackButton = ({url}: BackButtonProps) => {
    return(
        <div className="absolute left-0 top-0 p-2 m-3 drop-shadow-lg hover:scale-105 duration-150">
            <Link to={url} className="flex justify-start items-center text-white">
                <BackIcon className="w-7"/>
                <h6 className="font-bold font-sans">Back</h6>
            </Link>
        </div>
    );
}