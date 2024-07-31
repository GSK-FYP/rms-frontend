import React from "react";
import HeroSection from "../../molecules/landing/HeroSection";
import FeaturesSection from "./FeaturesSection";
import TasksSection from "./TasksSection";
import CtaBanner from "./CtaBanner";
import TestimonialsSection from "./TestimonialsSection";
import FaqSection from "./FaqSection";

const MainContainer = () => {
	return (
		<main>
			<HeroSection />
			<FeaturesSection />
			<TasksSection />
			<CtaBanner />
			<TestimonialsSection />
			<FaqSection />
		</main>
	);
};

export default MainContainer;
