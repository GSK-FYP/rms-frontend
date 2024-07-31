import React from "react";
import TestimonialsCard from "../../atoms/landing/TestimonialsCard";

interface TestimonialsContainerProps {
	firstCardText: string;
	firstCardName: string;
	firstCardPosition: string;
	firstCardSrc: string;
	secondCardText: string;
	secondCardName: string;
	secondCardPosition: string;
	secondCardSrc: string;
}

const TestimonialsContainer: React.FC<TestimonialsContainerProps> = ({
	firstCardText,
	firstCardName,
	firstCardPosition,
	firstCardSrc,
	secondCardText,
	secondCardName,
	secondCardPosition,
	secondCardSrc,
}) => {
	return (
		<div className="space-y-6 sm:space-y-8">
			<TestimonialsCard
				cardText={firstCardText}
				name={firstCardName}
				position={firstCardPosition}
				src={firstCardSrc}
			/>
			<TestimonialsCard
				cardText={secondCardText}
				name={secondCardName}
				position={secondCardPosition}
				src={secondCardSrc}
			/>
		</div>
	);
};

export default TestimonialsContainer;
