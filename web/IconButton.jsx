import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {ripple} from '../lib/Animations'
import {lighten, darken} from 'polished'

import Icon from './Icon'

/* eslint-disable indent */
const StyledIconButton = styled.button`
  border-radius: 50%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  color: ${props => props.theme[props.color]};
  cursor: pointer;
  font-family: ${props => props.theme.fontPrimary};
  font-size: 14px;
  font-weight: 500;
  height: 44px;
  width: 44px;
  line-height: 19px;
  letter-spacing: normal;
  margin: 0 10px;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-align: center;

  background: transparent;
  background-position: center;
  border: 1px solid transparent;
  box-shadow: none;
  
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, .5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
    visibility: hidden;
  }

  :focus::after {
    visibility: visible;
  }

  :focus:not(:active)::after {
    animation: ${ripple} 2s ease-out;
  }

  :hover {
    background-color: ${props => lighten(0.1, props.theme[props.color])}
  }

  :active {
      background-color: ${props => darken(0.25, lighten(props.p, props.theme[props.color]))};
  }

  :hover, :focus {
    background-color: ${props => lighten(props.p, props.theme[props.color])};
    border: 1px solid ${props => lighten(props.p, props.theme[props.color])};
  }
`
/* eslint-enable indent */

const IconButton = props => {
  const {primary, secondary, disabled, children, k, ...rest} = props
  let color = 'black'
  let p = 0.6
  if (primary) {
    color = 'primary'
    p = 0.4
  } else if (secondary) {
    color = 'secondary'
    p = 0.35
  } else if (disabled) {
    color = 'disabled'
    p = 0.1
  }
  return <StyledIconButton color={color} p={p} {...rest}><Icon {...{k}} />{children}</StyledIconButton>
}

IconButton.propTypes = {
  as: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  k: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool
}

export default IconButton
