import { useState } from "react";

const ChangeBox = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const onChangeMessage = (e) => setMessage(e.target.value);

  const onClickChange = (e) => {
    setColor(message);
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="message"
          placeholder="input color"
          value={message}
          onChange={onChangeMessage}
        />
        <button onClick={onClickChange}>change</button>
        <hr />
      </div>
      <div>
        <div
          style={{
            width: "64px",
            height: "64px",
            background: color,
          }}
        />
      </div>
    </>
  );
};

export default ChangeBox;
