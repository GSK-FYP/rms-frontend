import React from "react";

interface QAProps {
	question: string;
	answer: string;
}

const QA: React.FC<QAProps> = ({ question, answer }) => {
	return (
		<li className="space-y-4">
			<h3 className="text-lg font-medium tracking-wide sm:tracking-wider">
				{question}
			</h3>
			<p className="text-sm text-slate-700 leading-6 tracking-wide ">
				{answer}
			</p>
		</li>
	);
};

export default QA;
