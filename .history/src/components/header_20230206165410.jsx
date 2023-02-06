import PropTypes from 'prop-types'

const Header = ({ text }) => {
	return (
		<header>
			<div className="container">
				<h2>{text}</h2>
			</div>
		</header>
	)
}

Header.defaultProps = {
	text: 'Feedback UI'
	b
}

Header.propTypes = {
	text: PropTypes.string,
	b
}

export default Header



