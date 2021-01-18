import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
// import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import userUrlLoader from './hooks/userUrlLoader'

interface IShowResult {
  message: string,
  status: string
}

const App: React.FC = () => { // 也可使用箭头函数
  // const [show, setShow] = useState(true)
  const positions = useMousePosition()
  const [data, loading] = userUrlLoader('https://dog.ceo/api/breeds/image/random')
  const dogResult = data as IShowResult
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { loading ? <p>🐶读取中...</p> : <img src={dogResult && dogResult.message} /> }
        {/* <Hello message='dao51'/> */}
        <p>x:{positions.x},y:{positions.y}</p>
        {/* <button onClick={() => {setShow(!show)}}>Toggle</button> */}
        <LikeButton/>
        {/* { show && <MouseTracker/>} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
