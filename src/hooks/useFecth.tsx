import { useEffect, useState } from "react"

export const useFetch = (method: string, url: string, body?: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [pending, setPending] = useState(false);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/${url}`, {
            method: method,
            body: body
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            throw Error('error connecting the server');
        })
        .then(d => {
            setData(d);
            setPending(false);
        })
        .catch(e => {
            setPending(false);
            setError(e);
        });
    }, [url, body]);

    return { data, pending, error }
}