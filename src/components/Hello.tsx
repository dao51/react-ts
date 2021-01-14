import React from 'react'

interface IHelloProps { // 接口
    message?: string;   // 可选属性
}

const Hello: React.FunctionComponent<IHelloProps> = (props) => { // <>表示泛型
    // React.FunctionComponent可简写为React.FC
    return <h2>{ props.message }</h2>
}

Hello.defaultProps = {
    message: 'Hello World',
}

export default Hello 