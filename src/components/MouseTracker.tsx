import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
    // 设置默认位置
    const [positions, setPositions] = useState({x: 0, y: 0})
    // 调用useEffect函数
    useEffect(() => {
        console.log('添加函数前', positions.x)
        const updateMouse = (e: MouseEvent) => {
            // 设置位置初始值
            setPositions({x: e.clientX, y: e.clientY})
        }
        // 添加绑定事件
        document.addEventListener('click', updateMouse)

        // useEffect函数 返回函数 可用移除操作
        return () => {
            console.log('移除点击', positions.x)
            // 移除点击事件
            document.removeEventListener('click', updateMouse)
        }
    })

    console.log('渲染dom前', positions.x)
    // 返回dom
    return (
        <p>x:{positions.x},y:{positions.y}</p>
    )
}

export default MouseTracker