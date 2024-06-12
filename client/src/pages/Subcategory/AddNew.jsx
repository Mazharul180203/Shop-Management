import { ArrowRight } from "lucide-react";

const AddNew = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // getting the form values
    const form = e.target;
    const subcategory_name = form.subcategory_name.value;

    console.log(subcategory_name);
  };

  return (
    <>
      <div className="bg-white mt-4 p-2">
        <h2 className="font-bold text-xl">Add Subcategory</h2>
        <hr />

        <form className="mt-6 text-center space-y-3" onSubmit={handleSubmit}>
          {/* Subcategory name */}
          <div className="w-full flex flex-row items-center">
            <label
              className="text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="subcategory_name"
            >
              Subcategory Name:
            </label>
            <input
              className="flex flex-1 h-10 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Subcategory Name"
              id="subcategory_name"
              name="subcategory_name"
            ></input>
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

export default AddNew;
