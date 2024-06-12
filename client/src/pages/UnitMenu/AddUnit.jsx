import { ArrowRight } from "lucide-react";

const AddUnit = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    // getting the form values
    const form = e.target;
    const unit_name = form.unit_name.value;
    const unit_label = form.unit_label.value;
    const description = form.description.value;
    const relation = form.relation.value;

    console.log({ unit_name, unit_label, description, relation });
  };
  return (
    <>
      <div className="bg-white mt-4 p-2">
        {/* heading */}
        <div className="flex flex-row items-center justify-between">
          <h2 className="font-bold text-xl">Add New Unit</h2>
        </div>
        <hr />

        {/* form */}
        <form
          className="mt-4 text-right space-y-3 border p-2 rounded-md"
          onSubmit={onSubmit}
        >
          {/* Unit name */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="unit_name"
            >
              Unit Name:
            </label>
            <input
              className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Unit Name"
              id="unit_name"
              name="unit_name"
            ></input>
          </div>

          {/* unit label */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="unit_label"
            >
              Unit Label:
            </label>
            <input
              className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Example: Ton/KG"
              id="unit_label"
              name="unit_label"
            ></input>
          </div>

          {/* Relation */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="relation"
            >
              Relation:
            </label>
            <input
              className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Example: 1/1000"
              id="relation"
              name="relation"
            ></input>
          </div>

          {/* Description */}
          <div className="w-full flex flex-row items-center">
            <label
              className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="description"
            >
              Description:
            </label>
            <textarea
              className="flex w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Example: 1 Ton = 1000 KG"
              id="description"
              name="description"
              rows="4"
            ></textarea>
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

export default AddUnit;
