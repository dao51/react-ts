import React, { useState, useEffect } from 'react'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0) // 使用useState设置初始值，相当于state中设置默认值
    const [on, setOn] = useState(true)
    useEffect(() => { // useEffect 在首次及之后每次渲染后自动调用
        document.title = `点击了${like}次`
    })

    return (
        <>
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