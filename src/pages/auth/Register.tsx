import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";

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
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewAccount({ ...newAccount, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
  
    console.log("Starting registration process");
    console.log("Registration data:", newAccount);
  
    try {
      console.log("Sending request to:", "http://0.0.0.0:9002/super-admins/");
      const response = await fetch("http://0.0.0.0:9002/super-admins/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAccount),
      });
  
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
  
      if (!response.ok) {
        const errorText = await response.text();
        console.log("Error response body:", errorText);
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch (e) {
          console.log("Failed to parse error response as JSON");
        }
        throw new Error(errorData?.detail || `HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Registration successful:", data);
  
      // If registration is successful, log the user in
      console.log("Attempting to log in");
      await login(newAccount.username, newAccount.password);
      console.log("Login successful");
      // Navigation will be handled by the AuthContext
    } catch (err) {
      console.error("Registration error:", err);
      if (err instanceof Error) {
        setError(`Registration failed: ${err.message}`);
      } else {
        setError("Registration failed due to an unknown error.");
      }
    }
  };


  return (
    <div className="flex h-full w-screen items-center justify-center">
      <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-8 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-xs">
          <h2 className="mt-6 text-center text-xl font-bold leading-8 tracking-tight text-gray-900">
            Create a new admin account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xs">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-900">
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
              <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-900">
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
              <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-900">
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
              <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-900">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  value={newAccount.password}
                  onChange={handleChange}
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1 text-black bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold leading-5 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Sign Up
              </button>
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
