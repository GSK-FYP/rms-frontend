import React from "react";

interface AuthLayoutProps {
	bgImage: string;
	bgHeading: string;
	bgSubHeading: string;
	formHeading: string;
	formSubHeading: string;
	children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
	bgImage,
	bgHeading,
	bgSubHeading,
	formHeading,
	formSubHeading,
	children,
}) => {
	return (
		<div className="h-screen">
			<div className="flex h-full">
				<div
					className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-cover bg-center bg-no-repeat text-center"
					style={{ backgroundImage: `url(/images/${bgImage})` }}
				>
					<h1 className="text-white mb-1.5 lg:text-title-lg xl:text-title-xl">
						{bgHeading}
					</h1>
					<span className="text-white text-sm">{bgSubHeading}</span>
				</div>
				<div className="flex justify-center items-center w-full lg:w-1/2">
					<div className="w-11/12 sm:w-3/4 md:w-7/12 lg:w-10/12 xl:w-7/12">
						<div className="mb-16">
							<h1 className="text-title-sm font-semibold text-primary">
								{formHeading}
							</h1>
							<span className="text-body">{formSubHeading}</span>
						</div>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
