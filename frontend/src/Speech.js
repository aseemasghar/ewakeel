import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Speech = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='container'>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button className='my-1' onClick={SpeechRecognition.startListening}>Start</button>
      <button className='my-1' onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className='my-1' onClick={resetTranscript}>Reset</button>
      <h1 className='my-1 p-3 border border-dark"'>{transcript}</h1>
   
    </div>
  );
};
export default Speech;