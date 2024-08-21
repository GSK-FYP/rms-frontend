import React from "react";
import Container from "./Container";
import QuestionsContainer from "../../molecules/landing/QuestionsContainer";

const FaqSection = () => {
	return (
		<Container
			title="Frequently asked questions"
			text="If you can’t find what you’re looking for, email our support team and someone will get back to you."
			textColor="text-slate-700"
			bgLightGray={true}
			padding="py-20 sm:py-32"
			headerCenter="mx-auto max-w-[640px] lg:mx-0"
			gradientImg={true}
			src="https://salient.tailwindui.com/_next/static/media/background-faqs.55d2e36a.jpg"
			width={1558}
			height={946}
			gradientStyle="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
		>
			<div className="mx-auto mt-16 max-w-[640px] space-y-8 lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
				<QuestionsContainer
					firstQuestion="How secure is the financial information on this platform?"
					firstAnswer="We employ bank-grade encryption and security measures to protect all user data and transactions, complying with international standards and Ghana's data protection regulations."
					secondQuestion="Can TaxFlow integrate with existing government systems?"
					secondAnswer="Yes, TaxFlow is designed to seamlessly integrate with various government systems, ensuring a smooth transition and data continuity."
					thirdQuestion="How does TaxFlow ensure transparency in revenue management?"
					thirdAnswer="TaxFlow provides real-time reporting and analytics accessible to authorized personnel, creating an audit trail for all transactions and promoting accountability."
				/>
				<QuestionsContainer
					firstQuestion="What was that testimonial about tax fraud all about?"
					firstAnswer="TaxPal is just a software application, ultimately your books are your responsibility."
					secondQuestion="TaxPal sounds horrible but why do I still feel compelled to purchase?"
					secondAnswer="This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions."
					thirdQuestion="I found other companies called TaxPal, are you sure you can use this name?"
					thirdAnswer="Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website."
				/>
				<QuestionsContainer
					firstQuestion="Is training provided for government staff to use TaxFlow?"
					firstAnswer="Absolutely. We offer comprehensive training programs and ongoing support to ensure all users can effectively utilize the system."
					secondQuestion="How does TaxFlow handle different types of revenue streams?"
					secondAnswer="TaxFlow is versatile and can be customized to manage various revenue streams, from local market fees to national corporate taxes."
					thirdQuestion="Can citizens use TaxFlow to pay taxes and fees?"
					thirdAnswer="Yes, TaxFlow includes a user-friendly citizen portal for easy online payments and tax management."
				/>
			</div>
		</Container>
	);
};

export default FaqSection;
