import React, { useEffect } from 'react';

export default function App() {

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        fetch("http://worldtimeapi.org/api/timezone/Europe/Helsinki")
            .then(response => response.json())
            .then(json => console.log(json))
    }

    return (
        <h1>ClockBoard</h1>
    )
}

