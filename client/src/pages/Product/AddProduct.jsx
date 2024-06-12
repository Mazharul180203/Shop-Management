import { ArrowRight, Edit, Upload } from "lucide-react";
import { useRef, useState } from "react";

const AddProduct = () => {
  const [file, setFile] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoError, setPhotoError] = useState("");
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.product_name.value;
    const category = form.category.value;
    const subcategory = form.subcategory.value;
    const unit = form.unit.value;
    const brand = form.brand.value;

    console.log({
      product_name,
      category,
      subcategory,
      unit,
      brand,
      file,
    });
  };

  const handleChange = async (e) => {
    setPhotoError("");
    if (e.target.files && e.target.files.length > 0) {
      // getting the file
      const file = e.target.files[0];

      // creating the url object
      const objectUrl = URL.createObjectURL(file);

      // checking for image validation
      const img = new Image();
      img.src = objectUrl;
      img.onload = () => {
        if (img.width > 301 || img.height > 301 || file.size > 1048576 * 2) {
          setPhotoError("Image size should be 300x300 and less than 2MB");
          setFile(null);
          setPhoto(null);
        } else {
          setFile(file);
          setPhoto(objectUrl);
        }
      };
    }
  };

  return (
    <>
      <div className="bg-white mt-4 p-2">
        {/* heading */}
        <div className="flex flex-row items-center justify-between">
          <h2 className="font-bold text-xl">Add New Product</h2>
        </div>
        <hr />

        {/* form */}
        <form
          className="mt-4 text-right space-y-3 border p-2 rounded-md"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="w-full lg:w-4/6 space-y-3 mt-4 lg:mt-0">
              {/* product name */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="product_name"
                >
                  Product Name:
                </label>
                <input
                  className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Product Name"
                  id="product_name"
                  name="product_name"
                />
              </div>

              {/* product category */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="category"
                >
                  Product Category:
                </label>
                <select
                  className="flex h-10 w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  id="category"
                  name="category"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                </select>
              </div>

              {/* product subcategory */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="subcategory"
                >
                  Subcategory:
                </label>
                <select
                  className="flex h-10 w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  id="subcategory"
                  name="subcategory"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Subcategory
                  </option>
                  <option value="subcategory1">Subcategory 1</option>
                  <option value="subcategory2">Subcategory 2</option>
                </select>
              </div>

              {/* brand */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="brand"
                >
                  Brand:
                </label>
                <select
                  className="flex h-10 w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  id="brand"
                  name="brand"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Brand
                  </option>
                  <option value="brand1">Brand 1</option>
                  <option value="brand2">Brand 2</option>
                </select>
              </div>

              {/* unit */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="unit"
                >
                  Unit:
                </label>
                <select
                  className="flex h-10 w-4/5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  id="unit"
                  name="unit"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Unit
                  </option>
                  <option value="pcs">Pcs</option>
                  <option value="ton">TON</option>
                  <option value="unit1">Unit 1</option>
                  <option value="unit2">Unit 2</option>
                </select>
              </div>

              {/* branch name */}
              <div className="w-full flex flex-row items-center">
                <label
                  className="w-1/5 text-md mr-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="barcode"
                >
                  HSN / Barcode:
                </label>
                <input
                  className="flex h-10 w-4/5 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="HSN / Barcode"
                  id="barcode"
                  name="barcode"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                Save
              </button>
            </div>
            <div className="w-full lg:w-2/6 lg:ml-4 mx-auto flex justify-center rounded-md bg-slate-100 overflow-hidden">
              {!photo ? (
                <div
                  className="h-full w-full  flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => {
                    inputRef.current?.click();
                  }}
                >
                  <Upload className="size-20" />
                  <div>Upload Photo</div>
                  {photoError && (
                    <p className="text-red-500 text-sm">{photoError}</p>
                  )}
                </div>
              ) : (
                <div className="w-full h-full relative flex justify-center items-center">
                  <img className="object-cover w-[300px] h-[300px]" src={photo} />
                  <div
                    className="absolute bottom-2 right-2 text-white bg-black p-2 rounded-md cursor-pointer"
                    onClick={() => {
                      inputRef.current?.click();
                    }}
                  >
                    <Edit className="size-6" />
                  </div>
                </div>
              )}
              <input
                ref={inputRef}
                type="file"
                className="hidden"
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
