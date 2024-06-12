import { useState } from "react";

const LanguageSwitch = () => {
  const [language, setLanguage] = useState("english");

  return (
    <>
      <label
        htmlFor="Toggle1"
        className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
      >
        <span>Bangla</span>
        <span className="relative">
          <input
            id="Toggle1"
            type="checkbox"
            className="hidden peer"
            checked={language === "english"}
            onChange={() =>
              setLanguage(language === "english" ? "bangla" : "english")
            }
          />
          <div className="w-10 h-6 rounded-full shadow-inner bg-gray-600 peer-checked:bg-blue-600"></div>
          <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
        </span>
        <span>English</span>
      </label>
    </>
  );
};

export default LanguageSwitch;
