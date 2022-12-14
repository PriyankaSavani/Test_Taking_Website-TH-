import React from 'react'
import SimpleBar from 'simplebar-react'

const Scrollbar = ({ className, style, children, ...otherProps }: any) => {
    return (
        <SimpleBar className={className} style={style} {...otherProps}>
            {children}
        </SimpleBar>
    )
}

export default Scrollbar