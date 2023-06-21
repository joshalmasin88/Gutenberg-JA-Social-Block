import React from "react";

export default function FacebookComponet(props) {
	return (
		<div>
			<a href={props.fbLink}>
				<svg
					width="48px"
					height="48px"
					version="1.1"
					x="0px"
					y="0px"
					viewBox="0 0 48 48"
					style="enable-background:new 0 0 48 48;"
				>
					<g>
						<path
							class="facebook--brand"
							d="M30.1,40V27.6h4.2l0.6-4.8h-4.8v-3.1c0-1.4,0.4-2.4,2.4-2.4l2.6,0V13c-0.4-0.1-2-0.2-3.7-0.2
    c-3.7,0-6.2,2.3-6.2,6.4v3.6h-4.2v4.8h4.2V40H30.1z M9.8,40c-1,0-1.8-0.8-1.8-1.8V9.8C8,8.8,8.8,8,9.8,8h28.5c1,0,1.8,0.8,1.8,1.8
    v28.5c0,1-0.8,1.8-1.8,1.8H9.8z"
						/>
					</g>
				</svg>
			</a>
		</div>
	);
}
