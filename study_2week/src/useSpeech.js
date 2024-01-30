import { useEffect, useState } from "react";

const useSpeech = (text) => {
  const [speakStart, setSpeakStart] = useState(false);

  useEffect(() => {
    if (speakStart) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
      setSpeakStart(false);
    }
  }, [speakStart]);

  return setSpeakStart;
};
export default useSpeech;
