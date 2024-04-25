import React from 'react'
import mainHeaderImage from './images/react.png'
import {Search} from 'styled-icons/feather'


const images = {
    mainHeaderImage
}
const icons = {
    Search: <Search/>
}


const theme = {
    header: {
        backgroundColor: `var(--color-primary)`,
        color: `var(--color-contrast)`
    }
}

export const Gray = {...theme, variants, image, icons}