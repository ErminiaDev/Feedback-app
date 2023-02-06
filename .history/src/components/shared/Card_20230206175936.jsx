import Prop

const Card = ({ children, reverse }) => {
	return (
		<div>
			<div className="card"
				style={{
					backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff', color: reverse ? '#fff' : '#000',
				}}
			>
				{children}
			</div>
		</div>
	)
}

export default Card
