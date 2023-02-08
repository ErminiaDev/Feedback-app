import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, type, isDisabled, version }) => {
  return (
	<button
	type={type}
	disabled={isDisabled}
	className={`btn btn-${version}`}
	>
		{children}
	</button>
  )
}

Button.defaultProps = {
	version: "primary",
	
}

Button.propTypes = {}

export default Button