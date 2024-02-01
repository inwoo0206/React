import React from "react";

const Slide = () => {
  const colors = ["red", "orange", "yellow", "green", "blue", "violet"];

  return (
    <>
      <div
        style={{
          border: "2px solid black",
          padding: "10px",
          width: "300px",
          height: "200px",
          overflowX: "auto",
        }}
      >
        <div style={{ display: "flex", width: "max-content" }}>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                width: "200px",
                height: "150px",
                background: color,
              }}
            />
          ))}
        </div>
      </div>

      <hr />

      <div
        style={{
          border: "2px solid black",
          padding: "10px",
          width: "300px",
          height: "200px",
          overflowX: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "max-content",
          }}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                width: "200px",
                height: "150px",
                background: color,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slide;
