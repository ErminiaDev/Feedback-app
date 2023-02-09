import { useState } from "react";
import PropTypes from "prop-types";

const RatingSelect = (props) => {
  const [selected, setSelected] = useState(10);
	<ul>
		<li>
			<input 
			type="radio" 
			id="num1"
			name="rating"
			value="1"
			onChange={handleChange}
			checked={selected === 1}
			/>
		</li>
	</ul>
  return <div>RatingSelect</div>;
};

RatingSelect.propTypes = {};

export default RatingSelect;
