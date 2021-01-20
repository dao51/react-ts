import React from 'react';
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

interface IThemeProps {
  [key: string]: {color: string; background: string;}
}

const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
}

export const Themecontext = React.createContext(themes.dark)

const App: React.FC = () => { // 也可使用箭头函数
  // const [show, setShow] = useState(true)
  const positions = useMousePosition()
  const [data, loading] = userUrlLoader('https://dog.ceo/api/breeds/image/random')
  const dogResult = data as IShowResult
  return (
    <div className="App">
      
      <Themecontext.Provider value={themes.dark}/> {/* 更改主题 */}
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
