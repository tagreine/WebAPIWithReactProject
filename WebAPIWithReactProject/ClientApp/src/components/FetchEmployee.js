import React, {useEffect, useState} from "react";

const FetchEmployee = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5041/api/employees')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setEmployees(data);
        }).catch((error) => console.log(error.message))
    }, []);
    return (
        <div>
            <h2>List of Employees</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => {
                        const {employeeId, name, city, department} = employee;
                        return (
                            <tr key={employeeId}>
                                <td>{name}</td>
                                <td>{city}</td>
                                <td>{department}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FetchEmployee;