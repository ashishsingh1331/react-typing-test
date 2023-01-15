import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Word from './components/Word/Word';
import Timer from './components/Timer/Timer';

const getCloud = () => 'the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog the quick brown fox jumps over the little lazy dog '.split(' ')


.sort(() => Math.random() > 0.5 ? 1 : -1);




function App() {
  // Todo : add timer
  //

  const [userInput, setUserInput] = useState();
  const cloud = useRef(getCloud());
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWords,setCorrectWords] = useState([]);
  const wordCount = cloud.current.length;
  const rerender = useRef(0);
  const [startTimer,setStartTimer] = useState(false);

  useEffect(() => {
    rerender.current = rerender.current +1;
  });

  const handleUserInput = (value) => {

    if(!startTimer) {
      setStartTimer(true);
    }

    if (value.endsWith(' ')) {


      setActiveWordIndex((index) => index + 1);

      setCorrectWords((data) => {
        const word = value.trim();
          const newResult = [
            ...data
          ];
          newResult[activeWordIndex] = word === cloud.current[activeWordIndex];
          return newResult;
      })


      setUserInput('');
    } else {
      setUserInput(value);
    }

  }

  return (
    <div>
      <h1>Typing app</h1>
      <Timer startTimer={startTimer}
      correctWords={correctWords.filter(Boolean).length} />
      <h3>Word Count: {wordCount}</h3>
      <p>{cloud.current.map((word, index) => {
          return <Word
                text={word}
                active={index === activeWordIndex}
                correct={correctWords[index]}
                />
      }
      )}</p>
      <input onChange={(e) => handleUserInput(e.target.value)} type="text" value={userInput} />
    </div>
  );
}

export default App;
