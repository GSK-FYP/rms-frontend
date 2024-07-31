import React from "react";
import QA from "../../atoms/landing/QA";

interface QuestionsContainerProps {
	firstQuestion: string;
	firstAnswer: string;
	secondQuestion: string;
	secondAnswer: string;
	thirdQuestion: string;
	thirdAnswer: string;
}

const QuestionsContainer: React.FC<QuestionsContainerProps> = ({
	firstQuestion,
	firstAnswer,
	secondQuestion,
	secondAnswer,
	thirdQuestion,
	thirdAnswer,
}) => {
	return (
		<ul className="space-y-8">
			<QA question={firstQuestion} answer={firstAnswer} />
			<QA question={secondQuestion} answer={secondAnswer} />
			<QA question={thirdQuestion} answer={thirdAnswer} />
		</ul>
	);
};

export default QuestionsContainer;
