import React, { useState } from 'react'
import FetchWanderer from './FetchWanderer'
import AddWanderer from './AddWanderer'

const WandererList = () => {
    const [wanderers, setWanderers] = useState([]);

    const addWanderer = (wanderer) => {
        setWanderers(wanderers => [...wanderers, wanderer]);
    }

    const updateWanderers = (newWanderers) => {
        setWanderers(newWanderers);
    }

    return (
        <div>
            <h2>List of Wanderers</h2>
            <FetchWanderer onUpdate={updateWanderers} />
            <AddWanderer onAdd={addWanderer} />
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Home Realm</th>
                        <th>IQ</th>
                    </tr>
                    </thead>
                    <tbody>
                    {wanderers.map((wanderer) => {
                        const {id, travellerName, travellerClass, homeRealm, iq} = wanderer;
                        return (
                            <tr key={id}>
                                <td>{travellerName}</td>
                                <td>{travellerClass}</td>
                                <td>{homeRealm}</td>
                                <td>{iq}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
        </div>
)
}

export default WandererList;