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
        <p>
        <Button className="test" onClick={(e) => {e.preventDefault(); alert(1)}}>默认按钮</Button>
        <Button disabled>禁用按钮</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>小号按钮</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank">百度</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>禁用链接</Button>
        </p>
      </header>
    </div>
  );
}

export default App;
