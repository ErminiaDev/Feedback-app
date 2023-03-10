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
	bgColor: 'rgba(0,0,0,',
	textColor,
}

Header.propTypes = {
	text: PropTypes.string,
	bgColor,
	textColor,
}

export default Header



