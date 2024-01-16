 // ValidationSample 사용 시
import { Component } from 'react';
import ValidationSample from './ValidationSample';

class App extends Component {
  render() {
    return (
      <ValidationSample />
    );
  }
}

export default App;


/*
// 한번에 가장 밑으로 가는 버튼 생성 컴포넌트에 ref달고 사용하기
import { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {

  onClick = () => { // 오류가 발생하므로 새로운 함수를 만들고 그 내부에서 메서드를 실행
    this.ScrollBox.scrollToBottom();
  }
  // 값을 읽어와서 실행하므로 오류가 발생하지 않는다.
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
        <button onClick={this.onClick}>direct go down</button>
      </div>
    );
  }
}

export default App;
*/