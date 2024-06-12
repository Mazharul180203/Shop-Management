import { useNavigate } from "react-router-dom";

export default function Login() {
  // useNavigate hook will be used for navigation to register page
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // getting the form values
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    const remember = form.remember.checked;

    console.log(username, password, remember);
  };

  return (
    <section className="bg-slate-50">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="w-full md:w-[450px] border-[2px] border-black py-8 px-4 rounded-md shadow-md bg-white">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Login to Your Account
          </h2>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5 ">
              {/* Form username field */}
              <div>
                <label
                  htmlFor="username"
                  className="text-base font-medium text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    name="username"
                    placeholder="Username"
                    id="username"
                    required
                  ></input>
                </div>
              </div>

              {/* Form password field */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  ></input>
                </div>
              </div>

              {/* Form checkbox (remember me) */}
              <div className="flex items-center flex-row-reverse ">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="remember"
                    className="text-base font-medium text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="mr-2">
                  <input type="checkbox" id="remember" name="remember" />
                </div>
              </div>

              {/* Don't have a account navigator */}
              <p className="mt-2text-sm text-gray-600 ">
                Don&#x27;t have an account?{" "}
                <span
                  // navigating to registration page
                  onClick={() => navigate("/registration")}
                  className="font-semibold text-black transition-all duration-200 hover:underline cursor-pointer"
                >
                  Create a account
                </span>
              </p>

              {/* Form Submit Button */}
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
