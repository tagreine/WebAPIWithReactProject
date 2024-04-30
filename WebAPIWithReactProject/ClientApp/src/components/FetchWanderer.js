import React, { useEffect } from "react";

const FetchWanderer = ({ onUpdate }) => {
    useEffect(() => {
        fetch('http://localhost:5041/api/NoteworthyTraveller')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                onUpdate(data); // pass data back to parent
            }).catch((error) => console.log(error.message))
    }, []);

    return null;
}

export default FetchWanderer;