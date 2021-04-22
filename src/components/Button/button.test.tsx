import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from './button'

const defaultProps = {
    onClick: jest.fn() // 被监控的模拟函数
}
  
const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'klass'
}
  
const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn(),
}
describe('测试按钮组件', () => { // 测试用例分组
    it('应该渲染正确的默认按钮', () => {  // it相当于test，创建测试用例
        const wrapper = render(<Button {...defaultProps}>按钮</Button>) // 创建组件并获取
        const element = wrapper.getByText('按钮') as HTMLButtonElement  // 获取组件文本所在HTML queryAllByText获取文本节点
        expect(element).toBeInTheDocument()  
        expect(element.tagName).toEqual('BUTTON')  // 期望默认组件的标签名为“BUTTON”
        expect(element).toHaveClass('btn btn-default') // 期望默认组件含有className
        expect(element.disabled).toBeFalsy() // 期望默认组件禁用未开启
        fireEvent.click(element) // 触发不同的用户事件
        expect(defaultProps.onClick).toHaveBeenCalled()  // 模拟事件被调用到
    })
    it('应该正确渲染不同属性的按钮', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn-primary btn-lg klass')
    })
    it('当按钮为链接时应正确渲染其属性', () => {
        const wrapper = render(<Button btnType={ButtonType.Link} href="http://dummyurl">Link</Button>)
        const element = wrapper.getByText('Link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    })
    it('应该正确渲染禁用按钮', () => {
        const wrapper = render(<Button {...disabledProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})