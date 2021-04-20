import React from 'react';
import './App.css';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>测试内容</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button disabled>禁用按钮</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">百度</Button>
      </header>
    </div>
  );
}

export default App;
