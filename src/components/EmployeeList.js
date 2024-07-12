import React from 'react';

const EmployeeList = ({ employees }) => {
    return (
        <div className="employee-list">
            <h3>Registered Employees</h3>
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>
                        {employee.name} - {employee.email} - {employee.position} - {employee.department}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
