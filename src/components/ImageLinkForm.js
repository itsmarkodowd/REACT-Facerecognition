import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = (props) => {
	return (
			<div>
				<p className="white f3">
					{'Enter URL below to detect a face'}
				</p>
				<div className='center'>
					<div className='form center pa4 br3 shadow-5'>
					<input className="f4 pa2 w-70 center" type='text' onChange={props.onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={props.onButtonSubmit}>Detect</button>
				</div>
					</div>
			</div>
	);
}

export default ImageLinkForm;