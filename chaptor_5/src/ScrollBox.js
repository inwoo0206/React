import { Component } from 'react';

/* 컴포넌트 초기 설정
class ScrollBox extends Component {
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white,black)'
        }

        return (
            <div
                style={style}
                ref={(ref) => {this.box = ref}}>
                <div style = {innerStyle}/>
            </div>    
        );
    }
}
*/

class ScrollBox extends Component {

    scrollToBottom = () => {
        const {scrollHeight, clientHeight} = this.box;

        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white,black)'
        }

        return (
            <div
                style={style}
                ref={(ref) => {this.box = ref}}>
                <div style = {innerStyle}/>
            </div>    
        );
    }
}

export default ScrollBox;