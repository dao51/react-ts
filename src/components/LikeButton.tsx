import React, { useState, useEffect } from 'react'
import useMousePosition from '../hooks/useMousePosition'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0) // 使用useState设置初始值，相当于state中设置默认值
    const [on, setOn] = useState(true)
    const positions = useMousePosition()// 调用自定义hook
    useEffect(() => { // useEffect 在首次及之后每次渲染后自动调用
        document.title = `点击了${like}次`
    })

    return (
        <>
            <h2>x:{positions.x},y:{positions.y}</h2>
            <button onClick={() => {setLike(like + 1)}}>
                {like}👍
            </button>
            <button onClick={() => {setOn(!on)}}>
                { on ? 'ON' : 'OFF' }
            </button>
        </>
    )
}

export default LikeButton