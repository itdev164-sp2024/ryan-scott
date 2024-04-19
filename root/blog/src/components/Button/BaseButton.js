import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'rebass'
import styles from 'styled-components'
import { Pointer } from 'styled-icons/boxicons-regular'

const Reset= styled (Button)`

background: none;
box-shadow: none;
font-weight: normal;
border-radius: 0;
cursor: Pointer;


`

export const BaseButton = ({children, ...rest}) =>
<Reset>{...rest}{children}</Reset>


BaseButton.propTypes = {
    children: PropTypes.node.isRequired
}