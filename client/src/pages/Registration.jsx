import { useNavigate } from "react-router-dom";

export default function Registration() {
  // useNavigate hook will be used for navigation to login page
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // getting the form values
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const nid = form.nid.value;
    const user_role = form.user_role.value;
    const showroom = form.showroom.value;
    const user_photo = form.user_photo.files[0];

    console.log(name, phone, address, nid, user_role, showroom, user_photo);
  };

  return (
    <section className="bg-slate-50">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="w-full md:w-[450px] border-[2px] border-black py-8 px-4 rounded-md shadow-md bg-white">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Register a New Account
          </h2>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              {/* Form user photo upload */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="user_photo"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Upload User Photo{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="file"
                    id="user_photo"
                    name="user_photo"
                    accept="image/*"
                  />
                </div>
              </div>

              {/* Form name field */}
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="name"
                    name="name"
                    placeholder="name"
                    id="name"
                    required
                  ></input>
                </div>
              </div>

              {/* Form phone field */}
              <div>
                <label
                  htmlFor="phone"
                  className="text-base font-medium text-gray-900"
                >
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    id="phone"
                    required
                  ></input>
                </div>
              </div>

              {/* Form address field */}
              <div>
                <label
                  htmlFor="address"
                  className="text-base font-medium text-gray-900"
                >
                  Address
                </label>
                <div className="mt-2">
                  <textarea
                    className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    name="address"
                    placeholder="Address"
                    id="address"
                    rows="4"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Form nid field */}
              <div>
                <label
                  htmlFor="nid"
                  className="text-base font-medium text-gray-900"
                >
                  Nid
                </label>
                <div className="mt-2">
                  <input
                    className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    name="nid"
                    placeholder="Nid"
                    id="nid"
                    required
                  ></input>
                </div>
              </div>

              {/* Form user role dropdown */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="user_role"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    User Role{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <select
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    id="user_role"
                    name="user_role"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Role
                    </option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
              </div>

              {/* Form showroom dropdown */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="showroom"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Showroom{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <select
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    id="showroom"
                    name="showroom"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Showroom
                    </option>
                    <option value="showroom1">Showroom 1</option>
                    <option value="showroom2">Showroom 2</option>
                    <option value="showroom3">Showroom 3</option>
                    <option value="showroom4">Showroom 4</option>
                    <option value="showroom5">Showroom 5</option>
                  </select>
                </div>
              </div>

              {/* Already have an account navigator */}
              <p className="mt-2text-sm text-gray-600 ">
                Already, have an account?{" "}
                <span
                  // navigating to login page
                  onClick={() => navigate("/login")}
                  className="font-semibold text-black transition-all duration-200 hover:underline cursor-pointer"
                >
                  Login
                </span>
              </p>

              {/* Form Submit Button */}
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
