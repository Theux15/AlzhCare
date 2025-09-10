import { ResponsiveHeader } from "./ResponsiveHeader.jsx"

export function QuemSomos() {
  const integrantes = [
    { nome: "Matheus", img: "/fotomatheus.jpg" },
    { nome: "Giovanna", img: "/fotogi.JPG" },
    { nome: "Maria Luiza", img: "/fotomalu.jpeg" },
    { nome: "Pedro Duarte", img: "/fotoduarte.jpeg" },
  ]

  return (
    <div className="bg-[var(--color-chatcolor)] dark:bg-[var(--color-dark-purple-home)] min-h-screen">
      <ResponsiveHeader />

      <div className="items-center justify-items-center flex flex-col gap-4 mt-6 mb-8 px-4 [color:var(--color-dark-purple)] dark:[color:var(--color-white)]">
        <h1 className="text-2xl font-bold md:text-7xl dark:[color:var(--color-dark-text)]">Quem somos</h1>

        <p className="text-sm leading-relaxed text-justify max-w-sm md:max-w-3xl md:text-2xl">
          Somos um grupo de quatro estudantes que uniu forças para desenvolver este
          projeto como parte do nosso Trabalho de Conclusão de Curso. Ao longo do
          processo, cada um contribuiu com dedicação e conhecimento em diferentes áreas,
          trabalhando em equipe para alcançar um resultado significativo. Este projeto
          representa nosso esforço, aprendizado e colaboração.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 px-6 py-8 place-items-center md:grid-cols-4 md:gap-10">
        {integrantes.map((pessoa, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={pessoa.img}
              alt={pessoa.nome}
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover shadow-md"
            />
            <p className="mt-2 text-sm md:text-xl font-semibold [color:var(--color-dark-purple)] dark:[color:var(--color-white)]">
              {pessoa.nome}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-light-purple dark:bg-[var(--color-dark-mode-purple)] py-8 px-4 text-center dark:[color:var(--color-dark-purple)]">
        <h2 className="text-lg font-bold mb-3 md:text-4xl [color:var(--color-dark-purple)] dark:[color:var(--color-dark-text)]">
          Entre em contato:
        </h2>
        <p className="text-sm mb-4 font-medium md:text-lg [color:var(--color-dark-purple)] dark:[color:var(--color-dark-text)]">
          Ficou com alguma dúvida? Tem alguma sugestão? <br />
          Entre em contato conosco através dos nossos meios de comunicação:
        </p>

        <div className="my-4 mx-auto w-[95%] h-[1px] bg-chatcolor"></div>

        <div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-40 text-sm md:text-lg font-medium [color:var(--color-purple-home)]  dark:[color:var(--color-dark-text)]">
          <div className="flex items-center gap-2 justify-center">
            <img src="/telefone.png" alt="Telefone" className="w-5 h-5 block dark:hidden" />
            <img src="/telefoneescuro.png" alt="Telefone" className="w-5 h-5 hidden dark:block" />
            <p>119487684</p>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <img src="/rede.png" alt="Rede" className="w-5 h-5 block dark:hidden" />
            <img src="/redeescuro.png" alt="Rede" className="w-5 h-5 hidden dark:block" />
            <p>@noses</p>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <img src="/email.png" alt="Email" className="w-5 h-5 block dark:hidden" />
            <img src="/emailescuro.png" alt="Email" className="w-5 h-5 hidden dark:block" />
            <p>alzhcare@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}