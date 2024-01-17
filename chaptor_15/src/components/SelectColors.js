/*
import { ColorConsumer } from "../contexts/color";

const colors = ['red' , 'orange' , 'yellow' , 'green' , 'blue' , 'indigo' , 'violet'];

const SelectColors = () => {
    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <ColorConsumer>
            {({ actions }) => (
                <div style={{display: 'flex'}}>
                {colors.map(color => (
                    <div
                    key = {color}
                    style={{
                        background: color,
                        width: '24px',
                        height: '24px',
                        cursor: 'pointer'
                    }}
                    onClick={() => actions.setColor(color)}
                    onContextMenu={ e => {
                        e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는것을 무시함
                    }}
                />
                ))}
                </div>
            )}
            </ColorConsumer>
            <hr />
        </div>
    );
};

export default SelectColors;
*/

// 15.4.2 static contextType 사용하기
import { Component } from "react";
import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };
  handleSetSubColor = (subcolor) => {
    this.context.actions.setSubColor(subcolor);
  };
  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: "flex" }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubColor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
