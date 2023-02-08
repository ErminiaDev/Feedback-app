import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children }) => {
  return (
	<button
	type={type}
	disabled={isDisabled}
	className={`btn btn-${vers}`}
	>
		{children}
	</button>
  )
}

Button.propTypes = {}

export default Button