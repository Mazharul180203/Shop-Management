import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ListDropdown = ({ listdata }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="space-y-3 cursor-pointer hover:bg-slate-100 rounded-md">
        <div
          className="p-3 text-xs font-semibold uppercase text-slate-900 flex justify-between items-center"
          onClick={() => {
            if (listdata?.lists?.length > 0) {
              toggleDropdown();
            } else {
              navigate(listdata?.sectionTo);
            }
          }}
        >
          <span className="flex items-center gap-3">
            <span className="" aria-hidden="true">
              {listdata?.sectionIcon}
            </span>
            <span>{listdata?.sectionName}</span>
          </span>
          {listdata?.lists?.length > 0 && (
            <div>
              {open ? (
                <ArrowUp className="size-4" />
              ) : (
                <ArrowDown className="size-4" />
              )}
            </div>
          )}
        </div>
        {open && (
          <div className="rounded-md px-3">
            <hr />
            {listdata?.lists?.length > 0 &&
              listdata?.lists?.map((listitem, idx) => (
                <Link
                  key={idx}
                  to={listitem.to}
                  className="flex transform items-center rounded-lg px-3 py-2 text-slate-600 transition-colors duration-300 hover:bg-slate-200 hover:text-slate-700"
                >
                  <span className="" aria-hidden="true">
                    {listitem?.icon}
                  </span>
                  <span className="mx-2 text-sm font-medium">
                    {listitem?.name}
                  </span>
                </Link>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ListDropdown;
