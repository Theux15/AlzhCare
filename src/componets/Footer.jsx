import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-light-purple dark:bg-dark-mode-purple px-6 py-6 mt-auto">
      <div className="flex items-center justify-between w-full h-full">

        <div className="[color:var(--color-white)] font-bold text-3xl dark:[color:var(--color-white)]">
          <Link to="/">AlzhCare</Link>
        </div>

        <nav className="flex gap-8 [color:var(--color-white)] font-medium text-lg dark:[color:var(--color-white)]">
          <Link to="/produto">Comprar</Link>
          <Link to="/quemSomos">Quem somos</Link>
          <Link to="/guia">Guia</Link>
          <Link to="/contato">Contato e Suporte</Link>
        </nav>
      </div>
    </footer>
  );
}