import React from 'react';
import classNames from 'classnames';
import { type } from 'os';

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className ?: string,
    disabled ?: boolean,
    size ?: ButtonSize,
    btnType ?: ButtonType,
    children: React.ReactChild,
    href ?: string,
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement> // React.ButtonHTMLAttributes获取按钮基本属性
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type Buttonprops = Partial<NativeButtonProps & AnchorButtonProps>  // 交叉类型  Partial设置属性为可选
const Button: React.FC<Buttonprops> = (props) => {
    const {
        disabled,
        className,
        size,
        btnType,
        children,
        href,
        ...restProps
    } = props

    // btn btn-lg btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`] : btnType,
        [`btn-${size}`] : size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })

    if (btnType === ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                { children }
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                { children }
            </button>
        )
    }
}

// 设置组件默认属性
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button