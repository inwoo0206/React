/* component 생성하고 prop 기본값 설정 및 children 값까지 설정해보기
const MyComponent = props => {
    return ( 
    <div>
        안녕하세요 전 {props.name}입니다. <br />
        children 값은 {props.children}
        입니다.
    </div>
    );
};

MyComponent.defaultProps = {
    name : '기본 이름'
};
*/

/* 비구조화 할당 문법 사용해 props 내부 값 추출하기
const MyComponent = props => {
    const {name,children} = props;
    return ( 
    <div>
        안녕하세요 전 {name}입니다. <br />
        children 값은 {children}
        입니다.
    </div>
    );
};
 
// props 를 이렇게도 사용가능
const MyComponent = ({name,children}) => {
    const {name,children} = props;
    return ( 
    <div>
        안녕하세요 전 {name}입니다. <br />
        children 값은 {children}
        입니다.
    </div>
    );
};

MyComponent.defaultProps = {
    name : '기본 이름'
};
*/

/* props 검증
import PropTypes from 'prop-types';

const MyComponent = ({name,children}) => {
    return ( 
    <div>
        안녕하세요 전 {name}입니다. <br />
        children 값은 {children}
        입니다.
    </div>
    );
};

MyComponent.defaultProps = {
    name : '기본 이름'
};

MyComponent.propTypes = {
    name: PropTypes.string
};
*/

/* isRequired 사용하여 필수 propTypes 설정
import PropTypes from 'prop-types';

const MyComponent = ({name,favoriteNumber,children}) => {
    return ( 
    <div>
        안녕하세요 전 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        my favorite number is {favoriteNumber} . 
    </div>
    );
};

MyComponent.defaultProps = {
    name : '기본 이름'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};
*/

import { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  /* class 안에서 지정하는 방법
    static defaultProps = {
        name : '기본 이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }; */
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요 전 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        my favorite number is {favoriteNumber} .
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
