import { useEffect, useState } from "react";

const SaleInput = ({ row, setTableData }) => {
  const [value, setValue] = useState(row.sale_quantity);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (value > parseInt(row.stock)) {
      setError(true);
    } else {
      setError(false);
    }

    setTableData((prev) =>
      prev.map((item) => {
        if (item.id === row.id) {
          return {
            ...item,
            sale_quantity: value,
          };
        } else {
          return item;
        }
      })
    );
  }, [value]);

  return (
    <>
      <input
        className="text-xl border w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {error && <p className="text-xs text-red-500">Stock Limit Over!</p>}
    </>
  );
};

export default SaleInput;
