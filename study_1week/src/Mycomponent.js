import React from "react";

const MyComponent = ({ name, nickname }) => {
  return (
    <div>
      Hello My name is {name}! Hello My name is {nickname}!
    </div>
  );
};

MyComponent.defaultProps = {
  name: "init",
};

export default MyComponent;
