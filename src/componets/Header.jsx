import { useState } from "react"

export function Header({ transparent = false}){
    const [isDark,setDark] = useState(false)

    const AAAAA = () =>{
        setDark(!isDark)
    }

    return(
        <div className={isDark? "dark" : ""}>
            
            <div className={`
    ${transparent ? "bg-transparent !bg-none" : "bg-light-purple dark:bg-dark-mode-purple"} 
    h-24 px-6 flex items-center justify-between
  `}>
                <div className="text-dark-purple font-bold text-5xl dark:text-light-mode-purple">
                    <h1>AlzhCare</h1>
                </div>

                <div className="flex gap-8 text-dark-purple text-2xl dark:text-light-mode-purple">
                    <a href="./Produto.jsx">O produto</a>
                    <a href="">Guia</a>
                    <a href="">Quem somos</a>
                    <a href="">Jogo</a>
                

                    <button onClick={AAAAA}>
                        {isDark?(
                           <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-6 w-6 text-black dark:text-white"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                         >
                           <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z" />
                         </svg>
                        ):(<svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-yellow-500"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              d="M12 2.625l-2.912 6.786-7.391.802 5.56 4.908-1.574 7.229 6.317-3.79 6.317 3.79-1.574-7.229 5.56-4.908-7.391-.802L12 2.625z"
                            />
                          </svg>
                        )}
                    </button>
                  
                    
                </div>
            </div>
              <div className="mt-4 mx-auto" style={{ width: '97%', height: '2px', backgroundColor: 'white' }}></div>
        </div>  
         
        
            
        
    )
    
}