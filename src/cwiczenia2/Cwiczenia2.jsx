import React from 'react';
import {users} from '../data.js';
const Cwiczenia2 = () => {
    const totalSalary = users.filter(user => user.age < 25)
                        .map(user => user.salary)
                        .reduce((acc, salary) => acc + salary, 0);
    return (
        <div>
            <ul>
                {
                    users.filter(user => user.name.startsWith("A"))
                         .map((user) =>
                            <li key={user.id}
                                style={{color: user.salary>5500?"green":"red"}}>
                                {user.name} {user.age} {user.city} {user.salary}
                            </li>)
                }
            </ul>
            <h3>Koszty zarobków: {totalSalary}</h3>
        </div>
    );
};
export default Cwiczenia2;
