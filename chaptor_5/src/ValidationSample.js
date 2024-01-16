import { Component } from 'react';
import './ValidationSample.css'

/* 예제 컴포넌트 생성 및 input 에 ref 달기
class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        this.input.focus()

    }

    render() {
        return (
            <div>
                <input
                ref = {(ref) => this.input=ref}
                type = "password"
                value = {this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : '' }
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}
*/

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input
                ref = {(ref) => this.input=ref}
                type = "password"
                value = {this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : '' }
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;