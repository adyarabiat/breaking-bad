import React from "react";

import CharctorsItem from "./CharctorsItem";
import Spinner from "../ui/Spinner";

// import Spinner from "../../assets/spinner.gif";

const Charcters = (props) => {
    return props.isLoading ? (
        <Spinner />
    ) : (
        <section className="cards">
            {props.items.map((item) => {
                return (
                    <CharctorsItem item={item} key={item.char_id}>
                        {item.name}
                    </CharctorsItem>
                );
            })}
        </section>
    );
};

export default Charcters;
