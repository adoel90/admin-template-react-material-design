import React from 'react'
import Nav from './Nav'


export default ({ children }) => {

    console.log('render Main')

    return (
        <div>
            <Nav />
            {children}
        </div>
    )
}

