import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-light-purple dark:bg-dark-mode-purple px-6 py-8 mt-auto">
      <div className="flex flex-col items-center text-center gap-6 md:flex-row md:justify-between md:text-left">
        

        <div className="[color:var(--color-white)] font-bold text-4xl md:text-3xl dark:[color:var(--color-white)]">
          <Link to="/">AlzhCare</Link>
        </div>

        <nav className="flex flex-col gap-3 text-base [color:var(--color-white)] font-medium dark:[color:var(--color-white)] md:flex-row md:gap-8 md:text-lg">
          <Link to="/contato">Contato e Suporte</Link>
          <Link to="/quemSomos">Quem somos</Link>
          <Link to="/produto">Comprar</Link>
          <Link to="/guia">Guia</Link>
        </nav>
      </div>
    </footer>
  );
}