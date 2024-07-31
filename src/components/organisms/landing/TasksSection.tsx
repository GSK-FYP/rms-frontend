import React, { useState } from "react";
import Container from "./Container";
import ReportingIcon from "../../../icons/ReportingIcon";
import InventoryIcon from "../../../icons/InventoryIcon";
import ContactsIcon from "../../../icons/ContactsIcon";

const TasksSection = () => {
	const [index, setIndex] = useState(0);

	const Tasks = [
		{
			id: 1,
			icon: <ReportingIcon />,
			title: "Streamline Collection",
			text1: "Efficiently gather taxes and fees from multiple sources",
			text2:
				"Gathering taxes and fees from multiple sources is a great way to increase revenue.",
			src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&w=1920&q=75",
		},
		{
			id: 2,
			icon: <InventoryIcon />,
			title: "Enhance Transparency",
			text1: "Reduce revenue leakage with a unified, traceable system",
			text2: "Revenue leakage is ",
			src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&w=1920&q=75",
		},
		{
			id: 3,
			icon: <ContactsIcon />,
			title: "Contacts",
			text1:
				"Organize all of your contacts, service providers, and invoices in one place.",
			text2:
				"This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.",
			src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&w=1920&q=75",
		},
	];

	const slideImg = (id: number) => {
		setIndex(id - 1);
	};

	return (
		<Container
			title="Simplify revenue management tasks."
			text="Because simplicity is the ultimate sophistication."
			textColor="text-slate-700"
			padding="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
			headerCenter="md:text-center mx-auto max-w-[640px]"
		>
			<div className="mt-20">
				<div className="space-y-10 lg:flex lg:space-x-8 lg:space-y-0">
					{Tasks.map(({ id, icon, title, text1, text2, src }) => (
						<div key={id}>
							<button
								onClick={() => slideImg(id - 1)}
								className={`mx-auto max-w-[640px] cursor-default text-left lg:cursor-pointer lg:hover:opacity-100 ${
									id - 1 === index + 1 ? "lg:opacity-100" : "lg:opacity-70"
								}`}
							>
								<span
									className={`flex w-9 rounded-lg bg-blue-600 ${
										id - 1 === index + 1 ? "lg:bg-blue-600" : "lg:bg-slate-500"
									}`}
								>
									{icon}
								</span>
								<h3
									className={`mt-6 text-sm font-medium text-blue-600 ${
										id - 1 === index + 1
											? "lg:text-blue-600"
											: "lg:text-slate-600"
									}`}
								>
									{title}
								</h3>
								<p className="mt-3 text-xl font-medium leading-8 tracking-wide">
									{text1}
								</p>
								<p className="mt-4 text-sm leading-6 tracking-wide text-slate-600">
									{text2}
								</p>
							</button>

							{/* mobile screen */}
							<div className="relative mt-10 pb-10 lg:hidden">
								<div className="absolute -left-4 -right-4 bottom-0 h-[93%] bg-slate-200 sm:-left-6 sm:-right-6"></div>
								<div className="relative w-[844px]">
									<img
										src={src}
										alt="tasks image"
										width={844}
										height={427}
										className="rounded-xl border border-slate-500/10"
									/>
								</div>
							</div>
						</div>
					))}
					{/* from lg screen */}
				</div>
				<div className="mt-20 hidden justify-center overflow-hidden rounded-[32px] border border-slate-500/20 bg-slate-200 px-14 py-16 lg:flex">
					<div
						className="flex transition-all duration-500"
						style={{ transform: `translateX(${-844 * index}px)` }}
					>
						{Tasks.map(({ id, src }) => (
							<div key={id} className="px-5">
								<img
									src={src}
									alt="tasks image"
									width={844}
									height={427}
									className={`${
										index + 1 != id - 1 && "opacity-50"
									} min-w-[844px] rounded-xl border border-slate-500/10`}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</Container>
	);
};

export default TasksSection;
