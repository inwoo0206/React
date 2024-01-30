import { useState } from "react";
import useSpeech from "./useSpeech";

const SpeechTexts = () => {
  const [text, setText] = useState("");

  const onChangeText = (e) => setText(e.target.value);

  const speechText = useSpeech(text);

  return (
    <div>
      <h1>TTS Service</h1>
      <hr />
      <input
        type="text"
        name="text"
        placeholder="input text"
        value={text}
        onChange={onChangeText}
      />
      <button onClick={speechText}>speak</button>
    </div>
  );
};

export default SpeechTexts;
