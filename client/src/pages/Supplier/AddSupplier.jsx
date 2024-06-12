import { ArrowRight } from "lucide-react";

const AddSupplier = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    // getting the form values
    const form = e.target;
    const supplier_name = form.supplier_name.value;
    const contact_person = form.contact_person.value;
    const mobile_number = form.mobile_number.value;
    const address = form.address.value;
    const balance = form.balance.value;
    const payment = form.payment.value;

    console.log({
      supplier_name,
      contact_person,
      mobile_number,
      address,
      balance,
      payment,
    });
  };
  return (
    <>
      <div className="bg-white mt-4 p-2">
        {/* heading */}
        <div className="flex flex-row items-center justify-between">
          <h2 className="font-bold text-xl">Add New Supplier</h2>
        </div>
        <hr />

        {/* form */}
        <form
          className="mt-4 text-right space-y-3 border p-2 rounded-md"
          onSubmit={onSubmit}
        >
          {/* supplier name */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="supplier_name"
            >
              Supplier Name:
            </label>
            <input
              className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Supplier Name"
              id="supplier_name"
              name="supplier_name"
            ></input>
          </div>

          {/* contact person */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="contact_person"
            >
              Contact Person:
            </label>
            <input
              className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Contact Person"
              id="contact_person"
              name="contact_person"
            ></input>
          </div>

          {/* mobile number */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="mobile_number"
            >
              Mobile Number:
            </label>
            <input
              className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="tel"
              placeholder="Mobile Number"
              id="mobile_number"
              name="mobile_number"
            ></input>
          </div>

          {/* Address */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="address"
            >
              Address:
            </label>
            <textarea
              className="flex w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Address"
              id="address"
              name="address"
              rows="4"
            ></textarea>
          </div>

          {/* Initial Balance (TK) */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="Initial Balance (TK)"
            >
              Initial Balance (TK):
            </label>
            <div className="flex w-4/5 gap-3">
              {/* input box */}
              <input
                className="rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                name="balance"
                defaultValue={0}
              />

              {/* Form user role dropdown */}
              <select
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                id="payment"
                name="payment"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Payment
                </option>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default AddSupplier;
