import { useState } from "react";

export default function PasswordSetup() {
  // to store the errors
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // clearing the errors when submitting
    setError("");

    // getting the form values
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    // regex pattern for password matching
    // used-regex-pattern: ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
    /**
      Minimum length of 8 characters: .{8,}
      At least one uppercase letter: (?=.*[A-Z])
      At least one lowercase letter: (?=.*[a-z])
      At least one digit: (?=.*\d)
      At least one special character: (?=.*[@$!%*?&])
    */
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(password)) {
      // checking if the password and confirm password matches
      if (password === confirm_password) {
        // if all are ok then we can proceed
        console.log(username, password);
      } else {
        setError("Confirm Password Does not match!");
      }
    } else {
      setError(
        "Your password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one digit, and one special character (e.g., @, $, !, %, *, ?, &)."
      );
    }
  };

  return (
    <section className="bg-slate-50">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="w-full md:w-[450px] border-[2px] border-black py-8 px-4 rounded-md shadow-md bg-white">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Setup Your Username <br /> and Password
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

              {/* Form confirm password field */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="confirm_password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Confirm Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    required
                  ></input>
                </div>

                {/* for viewing the errors if there is any */}
                {error && <p className="text-sm mt-1 text-red-500">{error}</p>}
              </div>

              {/* Form Submit Button */}
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
