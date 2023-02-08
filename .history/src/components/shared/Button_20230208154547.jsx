import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const Button = (props) => {
  return (
	<div>Button</div>
  )
}

Button.propTypes = {
  second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Button)