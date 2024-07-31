import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const CtaBanner = () => {
	return (
		<Container
			title="Get started today"
			text="It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive."
			titleTextWhite={true}
			textColor="text-white"
			bgBlue={true}
			padding="py-32"
			headerCenter="text-center mx-auto max-w-lg"
			gradientImg={true}
			src=""
			width={2347}
			height={1244}
			gradientStyle="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
		>
			<div className="mt-10 flex justify-center">
				<Link
					to=""
					className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold hover:bg-blue-50"
				>
					Get 6 months free
				</Link>
			</div>
		</Container>
	);
};

export default CtaBanner;
