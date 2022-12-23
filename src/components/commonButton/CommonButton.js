import React from 'react'

export default function CommonButton(props) {
    const {
        title,
        loading = false,
        disabled = false,
        className,
        onClick,
        color = 'white',
        backgroundColor = '#00C8AA',
        paddingTop = '10px',
        paddingBottom = '10px',
        paddingLeft = '17px',
        paddingRight = '17px',
        border = 'none'

    } = props
    return (
        <button className={`button-text ${className}`}
            style={{
                backgroundColor: backgroundColor,
                color: color,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
                border: border
            }}
            onClick={onClick}
            disabled={disabled}
        >{loading ? loading : title}</button>
    )
}
