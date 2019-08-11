import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 250, width: 250 }} >
	 			<div className="Tilt-inner pa3">
	 				 <FontAwesomeIcon icon={faBrain} style={{paddingTop: "10px", fontSize: "200px", color: "white", opacity: "0.45"}}/>
	 			</div>
			</Tilt>
		</div>
	);
}

export default Logo;