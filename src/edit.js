import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { facebookURL, instagramURL } = attributes;

	const updateFacebookURL = (event) =>
	{
		setAttributes({facebookURL: event.target.value})
	}

	const updateInstagram = (event) => {
		setAttributes({instagramURL: event.target.value})
	}

	const blockProps = useBlockProps();


	return (
		<div>
			<div style={{ marginBottom: 10 }}>
			<label>Facebook URL:</label>
			<input onChange={updateFacebookURL} value={facebookURL} type='text' />
			</div>
			<div>
			<label>Instagram URL:</label>
			<input onChange={updateInstagram} value={instagramURL} type='text' />
			</div>
		</div>
	);
}
