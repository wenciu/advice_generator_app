import React, { useEffect, useState } from "react";

// hooks:
import useFetch from "./hooks/useFetch"

// components:
import Advice from "./components/Advice"
import Button from "./components/Button"
import Loader from "./components/Loader"

export default function App() {
    
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const fetchData  = useFetch('https://api.adviceslip.com/advice')
    const updateAdvice = (text) => {
        setData(text)
        setTimeout(() => setLoading(false), 1000)
    }

    const handleClick = () => {
        setLoading(true)
        fetchData().then(res => updateAdvice(res.slip.advice));
    }

    useEffect(() => {
        fetchData().then(res => updateAdvice(res.slip.advice));
    }, [])

    return (
        <>
            { loading ? <Loader /> : <Advice content={data} /> }
            <Button action={handleClick} disabled={loading} />
        </>
    )

}