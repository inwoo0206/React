import React from 'react';

const students = [
    {
        id: 1,
        name:'AAA',
    },
    {
        id: 2,
        name:'BBB',
    },
    {
        id: 3,
        name:'CCC',
    },
    {
        id: 4,
        name:'DDD',
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
};

export default AttendanceBook;