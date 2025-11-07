import React from 'react';

const List = () => {
    const fruits = ["banan", "jabłko", "kiwi"];
    return (
        <div>
            <ul>
                {
                    fruits.map(fruit => <li>{ fruit }</li>)
                }
            </ul>
        </div>
    );
};

export default List;
