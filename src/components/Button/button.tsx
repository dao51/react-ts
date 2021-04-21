import React from 'react';
import classNames from 'classnames';

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Dranger = 'dranger',
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

const Button: React.FC<BaseButtonProps> = (props) => {
    const {
        disabled,
        size,
        btnType,
        children,
        href
    } = props

    // btn btn-lg btn-primary
    const classes = classNames('btn', {
        [`btn-${btnType}`] : btnType,
        [`btn-${size}`] : size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })

    if (btnType === ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
            >
                { children }
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
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