import { Link } from "react-router-dom";
import { ListIcon } from "@phosphor-icons/react";

export function HeaderMobile({ transparent = false, onMenuToggle }) {
  return (
    <header
      className={`${
        transparent ? "bg-transparent !bg-none" : "bg-light-purple dark:bg-dark-mode-purple"
      } h-16 px-4 flex flex-col`}
    >
      <div className="flex items-center justify-between w-full h-full">
        <button
          onClick={onMenuToggle}
          className={`p-2 ${
            transparent 
              ? "text-white dark:text-white" 
              : "text-dark-purple dark:text-light-mode-purple"
          }`}
        >
          <ListIcon size={28} />
        </button>

        <div className={`font-poppins font-semibold text-2xl ${
          transparent 
            ? "text-white dark:text-white" 
            : "text-dark-purple dark:text-light-mode-purple"
        }`}>
          <Link to="/">AlzhCare</Link>
        </div>

        <div className="w-12"></div>
      </div>

      <div className={`w-full h-[1px] -mt-2 ${
        transparent 
          ? "bg-white dark:bg-white" 
          : "bg-dark-purple dark:bg-light-purple"
      }`}></div>
    </header>
  );
}
