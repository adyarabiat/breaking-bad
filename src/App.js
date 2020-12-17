import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/ui/Header";

import "./app.css";

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetch = axios(
            `https://www.breakingbadapi.com/api/characters`
        ).then((res) => {
            console.log(res.data);
        });
    }, []);

    return (
        <div className="container">
            <Header />
        </div>
    );
};

export default App;
