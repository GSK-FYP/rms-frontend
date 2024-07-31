import React from "react";

interface SectionHeaderProps {
	title: string;
	text: string;
	titleTextWhite?: boolean;
	bigText?: boolean;
	textColor: string;
	largeSpace?: boolean;
	headerCenter: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
	title,
	text,
	titleTextWhite = false,
	bigText = false,
	textColor,
	largeSpace = false,
	headerCenter,
}) => {
	return (
		<div
			className={`${
				largeSpace ? "space-y-6" : "space-y-4"
			} ${headerCenter} relative`}
		>
			<h2
				className={`text-[32px] font-medium leading-10 tracking-[0.01em] sm:text-[40px] sm:leading-snug ${
					bigText && "md:text-5xl"
				} md:leading-[55px] ${titleTextWhite && "text-white"}`}
			>
				{title}
			</h2>
			<p className={`text-lg leading-8 ${textColor}`}>{text}</p>
		</div>
	);
};

export default SectionHeader;
