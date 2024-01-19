/** 삼항연산자 기초 사용
function App() {
  const name = 'react';
  return (
  <div>
    {name === 'react' ? (<h1>true</h1>) : (<h2>false</h2>)}
    </div>
  );  
} 
*/

/* AND 연산자 기초 사용
function App() {
  const name = 'react';
  return (
  <div>
    {name === 'react' && <h1>true</h1>}
    </div>
  );  
} 
*/

/* 인라인 스타일링
 // background-color는 backgroundColor 같이 - 가 사라지고 카멜표기법으로 작성된다.
function App() {
  const name = 'react';
  return (
  <div
  style={{
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  }}>
    {name}
    </div>
  );  
} 
*/

/* className 사용하기
import './App.css';

function App() {
  const name = 'react';
  return (
  <div className = "react">
    {name}
    </div>
  );  
} 
*/

// 꼭 닫아야하는 태크
import "./App.css";

function App() {
  const name = "react";
  return (
    <>
      <div className="react"> {name} </div>
      <input></input>
    </>
  );
}

export default App;
