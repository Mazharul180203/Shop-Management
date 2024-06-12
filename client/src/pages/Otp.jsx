export default function Otp() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // getting the form values
    const form = e.target;
    const otp = form.otp.value;

    console.log(otp);
  };

  return (
    <section className="bg-slate-50">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="w-full md:w-[450px] border-[2px] border-black py-8 px-4 rounded-md shadow-md bg-white">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Type Your OTP
          </h2>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5 ">
              {/* Form otp field */}
              <div>
                <label
                  htmlFor="otp"
                  className="text-base font-medium text-gray-900"
                >
                  OTP
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    name="otp"
                    placeholder=""
                    id="otp"
                    required
                  ></input>
                </div>
              </div>

              {/* Form Submit Button */}
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
