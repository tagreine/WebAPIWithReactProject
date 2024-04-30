import React, { useState } from 'react';

const AddWanderer = ({ onAdd }) => {
    const [travellerName, setName] = useState('');
    const [travellerClass, setClassTrav] = useState('');
    const [homeRealm, setRealm] = useState('');
    const [iq, setIq] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!travellerName || !travellerClass || !homeRealm || !iq) {
            alert('Please fill in all fields');
            return;
        }

        const newWanderer = { travellerName, travellerClass, homeRealm, iq };

        fetch('http://localhost:5041/api/NoteworthyTraveller', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newWanderer)
        }).then(response => {
            if (response.ok) {
                alert('Added Successfully!');
                return response.json();
            } else {
                throw new Error('ERROR: '+ response.status);
            }
        }).then(data => {
            onAdd(data);
        }).catch((error) => {
            console.error('Error:', error);
        });

        setName('');
        setClassTrav('');
        setRealm('');
        setIq('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Name" value={travellerName} onChange={e => setName(e.target.value)} />
            <input type ="text" placeholder="Class" value={travellerClass} onChange={e => setClassTrav(e.target.value)} />
            <input type ="text" placeholder="Home Realm" value={homeRealm} onChange={e => setRealm(e.target.value)} />
            <input type ="number" placeholder="IQ Score" value={iq} onChange={e => setIq(e.target.value)} />
            <button type="submit">Add Traveler</button>
        </form>
    )
}

export default AddWanderer;