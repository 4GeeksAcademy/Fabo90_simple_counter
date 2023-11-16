import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
//create your first component

const Home = (props) => {
	return (
		<div className="row container bg-dark mx-auto justify-content-center">
				<div className=" col-1 text-white bg-secondary display-4 p-3 mx-2 rounded text-center">
				<FontAwesomeIcon icon={faClock} />
				</div>
				<div className="col-1 text-white bg-secondary display-4 p-3 mx-2 rounded text-center">
					<p>{props.hundredThousandSecs}</p>
				</div>
				<div className="col-1 text-white bg-secondary display-4 p-3 mx-2 rounded text-center">
					<p>{props.tenThousandSecs}</p>
				</div>
				<div className="col-1 text-white bg-secondary display-4 p-3 mx-2 rounded text-center">
					<p>{props.thousandSecs}</p>
				</div>
				<div className="col-1 text-white bg-secondary display-4 p-3 mx-2 rounded text-center">
					<p>{props.hundredSecs}</p>
				</div>
				<div className="col-1 text-white bg-secondary display-4 p-3 mx-2 rounded text-center">
					<p>{props.tenSecs}</p>
				</div>
				<div className="col-1 text-white bg-secondary display-4 p-3 mx-2 rounded text-center">
					<p>{props.seconds}</p>
				</div>
		</div>
	);
};

Home.proptypes = {
	seconds: PropTypes.number,
	tenSecs: PropTypes.number,
	hundredSecs: PropTypes.number,
	thousandSecs: PropTypes.number,
	tenThousandSecs: PropTypes.number,
	hundredThousandSecs: PropTypes.number,
};

export default Home;
