import React from "react";
import SectionHeader from "../../molecules/landing/SectionHeader";

interface ContainerProps {
	title: string;
	text: string;
	titleTextWhite?: boolean;
	textColor: string;
	largeSpace?: boolean;
	bigText?: boolean;
	headerCenter: string;
	id?: string;
	bgBlue?: boolean;
	bgDarkBlue?: boolean;
	bgLightGray?: boolean;
	padding: string;
	gradientImg?: boolean;
	src?: string;
	width?: number;
	height?: number;
	gradientStyle?: string;
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
	title,
	text,
	titleTextWhite,
	textColor,
	largeSpace,
	bigText,
	headerCenter,
	id,
	bgBlue = false,
	bgDarkBlue = false,
	bgLightGray = false,
	padding,
	gradientImg = false,
	src,
	width,
	height,
	gradientStyle,
	children,
}) => {
	return (
		<section
			id={id}
			className={`${bgBlue && "bg-blue-600"} ${bgLightGray && "bg-slate-50"} ${
				bgDarkBlue && "bg-slate-900"
			} ${padding} relative overflow-hidden`}
		>
			{gradientImg && (
				<img
					src={src}
					alt="gradient image"
					width={width}
					height={height}
					className={gradientStyle}
					// priority={true}
				/>
			)}
			<div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
				<SectionHeader
					title={title}
					text={text}
					titleTextWhite={titleTextWhite}
					textColor={textColor}
					largeSpace={largeSpace}
					headerCenter={headerCenter}
					bigText={bigText}
				/>
				{children}
			</div>
		</section>
	);
};

export default Container;
