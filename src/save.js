
import { useBlockProps } from '@wordpress/block-editor';
import InstagramComponet from './InstagramComponet';
import FacebookComponet from './FacebookComponet';

export default function save( { attributes }) {

	const { facebookURL, instagramURL } = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			{facebookURL ? <FacebookComponet fbLink={facebookURL} /> : ''}
			{instagramURL ? <InstagramComponet igLink={instagramURL} /> : ''}
		</div>
	);
}
