import {useState} from 'react';

// 입장 퇴장 버튼 만들고 문자의 색상 변경하는 버튼도 만들기
const Say = () => {
    const [message,setMessage] = useState('');
    const onClickEnter = () => setMessage('Hello!');
    const onClickLeave = () => setMessage('Good Bye!');

    const [color,setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1 style ={{color}}>{message}</h1>
            <button style = {{color: 'red'}} onClick={() => setColor('red')}>Red</button>
            <button style = {{color: 'green'}} onClick={() => setColor('green')}>Green</button>
            <button style = {{color: 'blue'}} onClick={() => setColor('blue')}>Blue</button>
        </div>
    );
};

export default Say;