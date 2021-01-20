import React, { useState, useEffect, useRef, useContext } from 'react'
import { Themecontext } from '../App'
// import useMousePosition from '../hooks/useMousePosition'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0) // 使用useState设置初始值，相当于state中设置默认值
    const [on, setOn] = useState(true)
    // const positions = useMousePosition()// 调用自定义hook
    const likeRef = useRef(0)  // 设置useRef初始值
    const didMountRef = useRef(false)
    const domRef = useRef<HTMLInputElement>(null)
    const theme = useContext(Themecontext)

    console.log('主题', theme)
    const style = {
        color: theme.color,
        background: theme.background
    }

    useEffect(() => { // useEffect 在首次及之后每次渲染后自动调用
        document.title = `点击了${like}次`
    }, [like])

    useEffect(() => {
        if(didMountRef.current) {
            console.log('非首次加载')
        } else {
            didMountRef.current = true
            console.log('首次加载')
        }
    })

    useEffect(() => {
        if(domRef && domRef.current) {
            domRef.current.focus()
        }
    })

    function handleAlertClick() {
        setTimeout(() => {
            alert('你点击了' + likeRef.current)
        }, 3000)
    }

    return (
        <>
            <input type="text" ref={domRef} />
            {/* <h2>x:{positions.x},y:{positions.y}</h2> */}
            <button style={style} onClick={() => {setLike(like + 1); likeRef.current++}}>
                {like}👍
            </button>
            <button onClick={handleAlertClick}>Alert!</button>
            <button onClick={() => {setOn(!on)}}>
                { on ? 'ON' : 'OFF' }
            </button>
        </>
    )
}

export default LikeButton