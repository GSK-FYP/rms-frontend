import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

interface StateProps {
	name: string;
	username: string;
	email: string;
	password: string;
}

const Register: React.FC = () => {
	const [newAccount, setNewAccount] = useState<StateProps>({
		name: "",
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (event: any) => {
		setNewAccount({ ...newAccount, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const response = await axios.post(
				"http://0.0.0.0:5455/api/management/super-admins/",
				newAccount
			);
			console.log(response);
		} catch {
			console.error(Error);
		}
	};

	return (
		<div className="flex h-full w-screen items-center justify-center">
			<div className="flex min-h-full flex-1 flex-col justify-center px-4 py-8 lg:px-6">
				<div className="sm:mx-auto sm:w-full sm:max-w-xs">
					<h2 className="mt-6 text-center text-xl font-bold leading-8 tracking-tight text-gray-900">
						Create a new account
					</h2>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xs">
					<form
						className="space-y-4"
						action="/auth/login"
						method="POST"
						onSubmit={handleSubmit}
					>
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium leading-5 text-gray-900"
							>
								Name
							</label>
							<div className="mt-1">
								<input
									id="name"
									name="name"
									value={newAccount.name}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 px-2 py-1 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-5"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="username"
								className="block text-sm font-medium leading-5 text-gray-900"
							>
								Username
							</label>
							<div className="mt-1">
								<input
									id="username"
									name="username"
									value={newAccount.username}
									onChange={handleChange}
									required
									className="block w-full rounded-md border-0 px-2 py-1 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-5"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-5 text-gray-900"
							>
								Email address
							</label>
							<div className="mt-1">
								<input
									id="email"
									name="email"
									value={newAccount.email}
									onChange={handleChange}
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 px-2 py-1 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-5"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-5 text-gray-900"
								>
									Password
								</label>
							</div>
							<div className="mt-1">
								<input
									id="password"
									name="password"
									value={newAccount.password}
									onChange={handleChange}
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 px-2 py-1 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-5"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold leading-5 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Sign Up
							</button>
							{/* </Link> */}
						</div>
					</form>

					<div className="mt-4 flex flex-row">
						<button
							type="button"
							className="mx-1 flex w-full items-center justify-center rounded-md border border-gray-300 px-2 py-1 text-sm font-semibold leading-5 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
						>
							<FaGithub className="mr-1" />
							Github
						</button>
						<button
							type="button"
							className="mx-1 flex w-full items-center justify-center rounded-md border border-gray-300 px-2 py-1 text-sm font-semibold leading-5 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
						>
							<FaGoogle className="mr-1" />
							Google
						</button>
					</div>

					<p className="mt-6 text-center text-xs text-gray-500">
						Already a member?{" "}
						<Link
							to="/auth/login"
							className="font-semibold leading-5 text-blue-600 hover:text-blue-500"
						>
							Sign In
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
