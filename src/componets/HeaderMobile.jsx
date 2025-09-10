import { Link } from "react-router-dom";
import { ListIcon } from "@phosphor-icons/react";

export function HeaderMobile({ transparent = false, onMenuToggle }) {
  return (
    <header
      className={`${
        transparent ? "bg-transparent !bg-none" : "bg-light-purple dark:bg-dark-mode-purple"
      } h-16 px-4 flex items-center justify-between`}
    >
      
      <button
        onClick={onMenuToggle}
        className="text-dark-purple dark:text-light-mode-purple p-2"
      >
        <ListIcon size={28} />
      </button>

      
      <div className="text-dark-purple font-poppins font-semibold text-2xl dark:text-light-mode-purple">
        <Link to="/">AlzhCare</Link>
      </div>

      
      <div className="w-12"></div>
    </header>
  );
}
