import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

test('第一个测试用例', () => {
    const wrapper = render(<Button>按钮</Button>)   // 创建组件并获取
    const element = wrapper.queryAllByText('按钮')  // 获取组件文本节点
    expect(element).toBeTruthy()                    // 期望文本节点存在为真
})
