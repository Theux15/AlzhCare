import { Header } from "./Header.jsx"

export function Produto(){
    return(
        <div className="bg-[var(--color-chatcolor)] dark:bg-[var(--color-dark-purple-home)]">
            <Header />
            <div className="items-center justify-items-center flex flex-col gap-4 mt-5 mb-10 [color:var(--color-dark-purple)]">
                <h1 className="text-7xl font-bold purple  ">Produto</h1>

                <p className="text-2xl text-center max-w-3xl font-medium ">
                    AlzhCare é um projeto criado para ajudar no cuidado de pessoas com Alzheimer, oferecendo apoio prático e informações úteis para familiares e cuidadores, e esse é nosso produto.
                </p>
            </div>

            <hr />

            <div className="flex flex-row items-center justify-center gap-20 mb-10">
                <div className="w-full flex justify-end">
                    <img className="rounded-lg w-[550px] h-[400px]" src="https://i.pinimg.com/736x/a6/ea/30/a6ea304f8b3b4fe1f89e58508bbe07b1.jpg" alt="" />
                </div>
                <div className="w-[80%]  [color:var(--color-dark-purple)] ">
                    <p className="text-3xl font-semibold">AlzhCare</p>
                    <p className="text-2xl font-semibold">Valor: R$ 00,00</p>
                </div>
                
            </div>

            <hr />

            <div>
                <div>
                    <div className="bg-[var(--color-dark-purple)]">
                        <div>
                        <img className="w-[150px] h-[100px]" src="https://i.pinimg.com/736x/f5/a5/a8/f5a5a8f283a8a2120da1e9e686e7b0ac.jpg" alt="" />
                    </div>
                    <div>
                        <h3>Esp32</h3>
                        <p>Valor</p>
                    </div>
                </div>
                    
                </div>
                <div></div>
            </div>

        </div>
    )
}