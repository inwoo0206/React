// import { Component } from 'react';

/* 컴포넌트 생성
class EventPractice extends Component{

    render () {
        return (
            <div>
                <h1>event practice</h1>
            </div>
        );
    }
};
*/

/* onChange 이벤트 핸들링 설정
class EventPractice extends Component{

    render () {
        return (
            <div>
                <h1>event pracitce</h1>
                <input
                type = "text"
                name = "message"
                placeholder = "input please."
                onChange={ (e) => {
                    console.log(e)
                        }
                    }
                />
            </div>
        );
    }
};
*/

/* state 에 input 값 담기
class EventPractice extends Component{

    state = {
        message: ''
    }

    render () {
        return (
            <div>
                <h1>event pracitce</h1>
                <input
                type = "text"
                name = "message"
                placeholder = "input please."
                value = { this.state.message }
                onChange={ (e) => {
                    this.setState({ // 입력한 값을 setState 로 상태를 변경
                        message: e.target.value
                    })
                        }
                    }
                />
            </div>
        );
    }
};
*/

/* 확인 버튼 만들고 alert 함수 사용해서 값을 창에 띄우기
class EventPractice extends Component{

    state = {
        message: ''
    }

    render () {
        return (
            <div>
                <h1>event pracitce</h1>
                <input
                type = "text"
                name = "message"
                placeholder = "input please."
                value = { this.state.message }
                onChange={ (e) => {
                    this.setState({ // 입력한 값을 setState 로 상태를 변경
                        message: e.target.value
                    })
                        }
                    }
                />
                <button onClick={
                    () => {
                        alert(this.state.message); // 여기서 alert 는 창을 띄워주는 함수이다.
                        this.setState({
                            message: ''
                        });
                    }}>확인</button>
            </div>
        );
    }
};
*/

/* 임의 메서드 만들기 기본 방식
class EventPractice extends Component{

    state = {
        message: ''
    }

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleClick() {
        alert(this.state.message);
        this.setState ({
            message: ''
        });
    }

    render () {
        return (
            <div>
                <h1>event pracitce</h1>
                <input
                type = "text"
                name = "message"
                placeholder = "input please."
                value = { this.state.message }
                onChange= {this.handleChange}
                />
                <button onClick={this.handleClick}
                    >확인</button>
            </div>
        );
    }
};
*/

/* 화살표 함수 형태로 메서드 정의하기 (Property Initializer Syntax)
class EventPractice extends Component{

    state = {
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState ({
            message: ''
        });
    }

    render () {
        return (
            <div>
                <h1>event pracitce</h1>
                <input
                type = "text"
                name = "message"
                placeholder = "input please."
                value = { this.state.message }
                onChange= {this.handleChange}
                />
                <button onClick={this.handleClick}
                    >확인</button>
            </div>
        );
    }
};
*/

/* input 여러개 다루기
class EventPractice extends Component{

    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ' : '+ this.state.message);
        this.setState ({
            username: '',
            message: ''
        });
    }

    render () {
        return (
            <div>
                <h1>event pracitce</h1>
                <input
                type = "text"
                name = "username"
                placeholder = "사용자명"
                value = { this.state.username }
                onChange= {this.handleChange}
                />
                <input
                type = "text"
                name = "message"
                placeholder = "input something"
                value = {this.state.message}
                onChange={this.handleChange}
                />
                <button onClick={this.handleClick}
                    >확인</button>
            </div>
        );
    }
}
*/

/* onKeyPress 이벤트 핸들링
class EventPractice extends Component{

    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ' : '+ this.state.message);
        this.setState ({
            username: '',
            message: ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render () {
        return (
            <div>
                <h1>event pracitce</h1>
                <input
                type = "text"
                name = "username"
                placeholder = "사용자명"
                value = { this.state.username }
                onChange= {this.handleChange}
                />
                <input
                type = "text"
                name = "message"
                placeholder = "input something"
                value = {this.state.message}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}
                    >확인</button>
            </div>
        );
    }
}
*/

/* 함수 컴포넌트로 구현해보기
import {useState} from 'react';

const EventPractice = () => {
    const [username,setUsername] = useState('');
    const [message,setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ' : ' + message);
        setUsername('');
        setMessage('');
    };
    const onKeyPress = e => {
        if (e.key === 'Enter'){
            onClick();
        }
    };

    return (
        <div>
             <h1>event pracitce</h1>
                <input
                type = "text"
                name = "username"
                placeholder = "사용자명"
                value = { username }
                onChange= {onChangeUsername}
                />
                <input
                type = "text"
                name = "message"
                placeholder = "input something"
                value = {message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
                />
                <button onClick={this.handleClick}
                    >확인</button>
        </div>
    );
};
*/

// form객체 선언해서 같이 값 넘겨주기
import { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + " : " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>event pracitce</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="input something"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
