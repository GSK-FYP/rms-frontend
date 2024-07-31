import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import LogoIcon from "../../components/atoms/LogoIcon";
import { useAuth } from "../../contexts/AuthContext";

const Login: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      await login(form.username, form.password);
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div
          className="flex min-h-screen flex-col dark:bg-gray-900 w-full"
          style={{
            backgroundImage:
              "url('https://salient.tailwindui.com/_next/static/media/background-features.5f7a9ac9.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <header className="absolute inset-x-0 top-0 z-50">
            <nav
              aria-label="Global"
              className="flex items-center justify-between p-6 lg:px-8"
            >
              <div className="flex lg:flex-1">
                <a
                  href="/"
                  className="-m-1.5 bg-white border-white round-20 p-2 w-fit-content"
                >
                  <LogoIcon />
                </a>
              </div>
            </nav>
          </header>

          <main className="relative isolate flex-grow px-6 pt-14 lg:px-8"></main>
        </div>
      </div>

      <div className="flex h-full w-screen items-center justify-center">
        <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-8 lg:px-6">
          <div className="sm:mx-auto sm:w-full sm:max-w-xs">
            <h2 className="mt-6 text-center text-xl font-bold leading-8 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xs">
            <form
              className="space-y-4"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
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
                    value={form.username}
                    onChange={handleChange}
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-0 px-2 py-1 text-black shadow-sm ring-1 ring-inset ring-gray-300 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-5"
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
                  <div className="text-xs">
                    <Link
                      to="/auth/forgot-password"
                      className="font-semibold text-blue-600 hover:text-blue-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    type="password"
                    autoComplete="current-password"
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
                  Sign In
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
              Do not have an account yet?{" "}
              <Link
                to="/auth/register"
                className="font-semibold leading-5 text-blue-600 hover:text-blue-500"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
