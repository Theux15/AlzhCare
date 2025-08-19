import { Header } from "./Header.jsx"

export function QuemSomos(){
    const integrantes = [
        { nome: "Matheus", img: "https://via.placeholder.com/150" },
        { nome: "Giovanna", img: "https://via.placeholder.com/150" },
        { nome: "Maria Luiza", img: "https://via.placeholder.com/150" },
        { nome: "Pedro Henrique", img: "https://via.placeholder.com/150" },
    ]

    return(
        <div className="bg-[var(--color-chatcolor)] dark:bg-[var(--color-dark-purple-home)] min-h-screen">
            <Header />
            
            <div className="items-center justify-items-center flex flex-col gap-4 mt-5 mb-10 [color:var(--color-dark-purple)]">
                <h1 className="text-7xl font-bold purple">Quem somos</h1>

                <p className="text-2xl text-center max-w-3xl font-medium">
                    Somos um grupo de quatro estudantes que uniu forças para desenvolver este projeto como parte do nosso Trabalho de Conclusão de Curso. 
                    Ao longo do processo, cada um contribuiu com dedicação e conhecimento em diferentes áreas, trabalhando em equipe para alcançar um resultado significativo. 
                    Este projeto representa nosso esforço, aprendizado e colaboração.
                </p>
            </div>



            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 py-12 place-items-center">
                {integrantes.map((pessoa, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <img 
                            src={pessoa.img} 
                            alt={pessoa.nome} 
                            className="w-32 h-32 rounded-lg object-cover shadow-md"
                        />
                        <p className="mt-3 text-xl font-semibold [color:var(--color-dark-purple)]">
                            {pessoa.nome}
                        </p>
                    </div>
                ))}
            </div>


            <div className="bg-light-purple py-12 text-white text-center">
                <h2 className="text-4xl font-bold mb-4 [color:var(--color-dark-purple)]">Entre em contato:</h2>
                <p className="text-lg mb-6 font-semibold [color:var(--color-dark-purple)]">
                    Ficou com alguma dúvida? Tem alguma sugestão? 
                    Entre em contato conosco através dos nossos meios de comunicação:
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-8 text-lg font-medium font-semibold [color:var(--color-purple-home)]">
                    <div className="flex items-center gap-2">
                        <p>119487684</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p>@noses</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <p>alzhcare@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}