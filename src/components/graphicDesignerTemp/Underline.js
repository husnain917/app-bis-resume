import React from 'react'

export default function Underline({
    width,
    bgColor,
    opacity,
}) {
    return (
        <div style={{ width: width, backgroundColor: bgColor, height: '0.2em', opacity: opacity ? opacity : '0.5' }}></div>
    )
}
