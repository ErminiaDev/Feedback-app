import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children }) => {
  return (
	<button
	type={type}
	disabled={isDisabled}
	className={}
	>
		{children}
	</button>
  )
}

Button.propTypes = {}

export default Button