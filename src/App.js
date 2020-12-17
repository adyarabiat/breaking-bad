import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/ui/Header";
import Charcters from "./components/Charcters/Charcters";
import Search from "./components/ui/Search";

import "./app.css";

const App = (props) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios(
            `https://www.breakingbadapi.com/api/characters?name=${query}`
        ).then((res) => {
            // console.log(res.data);
            setItems(res.data);
            setIsLoading(false);
        });
    }, [query]);

    return (
        <div className="container">
            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <Charcters isLoading={isLoading} items={items} />
        </div>
    );
};

export default App;
