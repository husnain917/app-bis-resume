import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

export default function Loader({size,color}) {
    return (
        <div>
            <InfinitySpin
                width={size}
                color={color}
            />
        </div>
    )
}
