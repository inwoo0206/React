/*
import { createContext } from 'react'

const ColorContext = createContext({color: 'black'});

export default ColorContext;
*/

// 15.3 동적 Context 사용하기
import { createContext, useState } from 'react'

const ColorContext = createContext({
    state: { color: 'black', subcolor: 'red'},
    actions: {
        setColor: () => {},
        setSubcolor: () => {}
    }
});

const ColorProvider = ({children}) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: {color, subcolor},
        actions: {setColor, setSubcolor}
    };

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};

// const ColorConsumer = ColorContext.Consumer 와 같은 의미
const {Consumer: ColorConsumer} = ColorContext;

// ColorProvider 와 ColorConsumer 내보내기
export {ColorProvider, ColorConsumer};

export default ColorContext;