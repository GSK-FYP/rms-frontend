import React from "react";

const LogoIcon: React.FC = () => {
	return (
		<div className="font-bold text-2xl flex gap-2">
			<svg
				width="30px"
				height="30px"
				viewBox="0 0 1024 1024"
				xmlns="http://www.w3.org/2000/svg"
				fill="#000000"
			>
				<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
				<g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g>
				<g id="SVGRepo_iconCarrier">
					<circle
						cx="512"
						cy="512"
						r="512"
						style={{ fill: "#2563EB" }}
					></circle>
					<path
						d="M554.09 264.5c-27.52-11.33-58.28-11.33-84.19 0-61.52 25.9-168.37 76.09-168.37 110.09v309.22l170 84.19-9.71-210.47L363.05 530v-72.84L512 466.87l148.95-9.71V530l-98.76 27.52L552.47 768l170-84.19V374.59c-.01-34-106.86-84.19-168.38-110.09z"
						style={{ fill: "#fff" }}
					></path>
				</g>
			</svg>
			<p className="text-[#0F172A]">
				Tax
				<span className="text-primary">Flow</span>
			</p>
		</div>
	);
};

export default LogoIcon;
