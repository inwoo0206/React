// 8.1.1 useState 여러번 사용하기
/*
import { useState } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = e => {
        setName(e.target.value) 
    }
    const onChangeNickname = e => {
        setNickname(e.target.value) 
    }

    return (
        <div>
            <div>
                <input value = {name} onChange={onChangeName} />
                <input value = {nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>
    )
};

export default Info;
*/
/*
// 8.2 useEffect 사용하기
import { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        console.log('effect');
        return () => {
            console.log('unmount');
        };
    },[]);

    const onChangeName = e => {
        setName(e.target.value) 
    }
    const onChangeNickname = e => {
        setNickname(e.target.value) 
    }

    return (
        <div>
            <div>
                <input value = {name} onChange={onChangeName} />
                <input value = {nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>
    )
};

export default Info;
*/
/*
// 8.3.2 인풋 상태 관리하기
import { useReducer } from "react";

function reducer(state, action) {
    return {
        ...state,
        [action.name] : action.value
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;
    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
*/
// 8.7 커스텀 Hooks 만들기 에서 만든 useInputs 사용해보기
import useInputs from "./useInputs";

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;