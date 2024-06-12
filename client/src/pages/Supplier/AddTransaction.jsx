import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

const AddTransaction = () => {
  // state for date picker
  const [date, setDate] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const branch_name = form.branch_name.value;

    console.log({ date, branch_name });
  };

  return (
    <>
      <div className="bg-white mt-4 p-2">
        {/* heading */}
        <div className="flex flex-row items-center justify-between">
          <h2 className="font-bold text-xl">Add Transaction</h2>
        </div>
        <hr />

        {/* form */}
        <form
          className="mt-4 text-right space-y-3 border p-2 rounded-md"
          onSubmit={onSubmit}
        >
          {/* datepicker */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="date"
            >
              Date:
            </label>
            <div className="customDatePickerWidth !w-4/5">
              <ReactDatePicker
                className="h-[2.33rem] w-full p-3 rounded-md border border-black/30"
                placeholderText="Select a Date"
                selected={date}
                isClearable
                name="date"
                id="date"
                onChange={(date) => setDate(date)}
              />
            </div>
          </div>

          {/* name */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="name"
            >
              Name:
            </label>
            <select
              className="flex h-10 w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              id="name"
              name="name"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select User
              </option>
              <option value="name1">Name 1</option>
              <option value="name2">Name 2</option>
            </select>
          </div>

          {/* balance */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="balance1"
            >
              Balance (TK):
            </label>
            <div className="w-4/5 flex gap-2">
              <input
                className="flex w-full h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                defaultValue={0}
                id="balance1"
                disabled={true}
              />
              <input
                className="flex w-full h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                defaultValue={"Receivable"}
                id="balance2"
                disabled={true}
              />
            </div>
          </div>

          {/* transaction type */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="transaction_type"
            >
              Transaction Type:
            </label>
            <select
              className="flex h-10 w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              id="transaction_type"
              name="transaction_type"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select Transaction Type
              </option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </div>

          {/* transaction method */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="transaction_method"
            >
              Transaction Method:
            </label>
            <select
              className="flex h-10 w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              id="transaction_method"
              name="transaction_method"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select Transaction Method
              </option>
              <option value="type1">Method 1</option>
              <option value="type2">Method 2</option>
            </select>
          </div>

          {/* bank name */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="bank_name"
            >
              Bank Name:
            </label>
            <select
              className="flex h-10 w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              id="bank_name"
              name="bank_name"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select Bank Name
              </option>
              <option value="type1">Bank 1</option>
              <option value="type2">Bank 2</option>
            </select>
          </div>

          {/* account no */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="account_no"
            >
              Account No:
            </label>
            <select
              className="flex h-10 w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              id="account_no"
              name="account_no"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select Account No
              </option>
              <option value="type1">Account 1</option>
              <option value="type2">Account 2</option>
            </select>
          </div>

          {/* branch name */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="branch_name"
            >
              Branch Name:
            </label>
            <input
              className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Branch Name"
              id="branch_name"
              name="branch_name"
              disabled={true}
            />
          </div>

          {/* account holder name */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="account_holder_name"
            >
              Account Holder Name:
            </label>
            <input
              className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Account Holder Name"
              id="account_holder_name"
              name="account_holder_name"
              disabled={true}
            />
          </div>

          {/* bank balance */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="bank_balance"
            >
              Bank Balance:
            </label>
            <input
              className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Bank Balance"
              id="bank_balance"
              name="bank_balance"
              disabled={true}
            />
          </div>

          {/* payment */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="payment"
            >
              Payment (TK):
            </label>
            <input
              className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Payment (TK)"
              defaultValue={0}
              id="payment"
              name="payment"
              disabled={true}
            />
          </div>

          {/* total_balance */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="total_balance1"
            >
              Total Balance (TK):
            </label>
            <div className="w-4/5 flex gap-2">
              <input
                className="flex w-full h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                defaultValue={0}
                id="total_balance1"
                disabled={true}
              />
              <input
                className="flex w-full h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                defaultValue={"Payable"}
                id="total_balance2"
                disabled={true}
              />
            </div>
          </div>

          {/* paid by */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="paid_by"
            >
              Paid By:
            </label>
            <select
              className="flex h-10 w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              id="paid_by"
              name="paid_by"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select Paid By
              </option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
            </select>
          </div>

          {/* Submit button */}
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

export default AddTransaction;
