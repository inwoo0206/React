import {Component} from 'react';

class Counter extends Component {
    /*
    constructor(props) {
        super(props);
        //state 초기값 설정하기
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }
    */
   state = { // constructor 매서드 선언하지 않고 바로 state 설정하기 이 방법을 더 많이 사용
    number: 0,
    fixedNumber: 0
   };

   /* 버튼을 누르면 2씩 증가하도록 하기
    render() {
        const {number,fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button 
                // onClick 을 통해 버튼이 클릭되었을때 호출할 함수를 지정
                onClick={() => {
                    this.setState(prevState => { 
                        return {
                            number: prevState.number + 1
                        }
                    })
                    this.setState(prevState => ({ // 함수에서 객체를 바로 반환
                       number: prevState.number + 1  
                    }));
                    console.log(number)
                }} 
                >
                 plus 
                </button>
                </div>
        );
    }
    */
    render() { // 버튼 누르면 호출퇴는 함수가 2개인 경우이다.
        const {number,fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button 
                // onClick 을 통해 버튼이 클릭되었을때 호출할 함수를 지정
                onClick={() => {
                    this.setState( // 버튼을 눌러서 값이 1씩 증가하는 함수
                        {
                            number: number + 1
                        }, 
                        () => { // 버튼을 눌러서 호출되었다고 출력하는 함수
                            console.log('방금 setState가 호출되었습니다. ');
                            console.log(this.state);
                        }
                    );
                }}
                >
                 plus 
                </button>
                </div>
        );
    }
}

export default Counter;

