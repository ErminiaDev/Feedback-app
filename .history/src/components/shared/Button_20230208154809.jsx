import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children }) => {
  return (
	<button
	type={type}
	disabled={is}>
		{children}
	</button>
  )
}

Button.propTypes = {}

export default Button