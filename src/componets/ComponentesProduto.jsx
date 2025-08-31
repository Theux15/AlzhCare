export function ComponentesProduto({ imgSrc, title, value }) {
  return (
    
            <div className=" [color:var(--color-white)] flex flex-row rounded-2xl gap-10 mt-5 mb-5">
                    <div className=" bg-[var(--color-dark-purple)] w-[165px] h-[125px] rounded-xl flex justify-center items-center lg:w-[260px] lg:h-[170px] dark:bg-[color:var(--color-light-purple)]">
                        <img className="max-w-[200px]  max-h-[100px] rounded-xl" src={imgSrc} alt="" />
                    </div>
                    <div className=" flex flex-col justify-center items-center  [color:var(--color-dark-purple)]">
                        <h3 className="text-lg font-medium lg:text-3xl dark:[color:var(--color-white)] ">{title}</h3>
                        <p className="text-lg font-medium text-center lg:text-3xl dark:[color:var(--color-white)]">Valor: <br /> {value}</p>
                    </div>
                </div>
  );
}
