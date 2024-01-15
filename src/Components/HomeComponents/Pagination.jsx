

const Pagination = ({ currentPage, setCurrentPage, workPerPage, totalWork  }) => {
    
    let pages = [];
    for(let i =1 ; i <= Math.ceil(totalWork / workPerPage); i++){
        pages.push(i)
    }
    return (
        <>
            {
                pages.map(number =>(
                    <button key={number} onClick={()=>{setCurrentPage(number)}} className={`h-[1rem] w-[1rem] sm:h-[3rem] sm:w-[3rem] cursor-pointer rounded-full my-3 
                    ${
                        currentPage === number ? 'bg-blue-300' : 'bg-evilBlue'
                      }
                      ${
                        currentPage === number ? 'text-russia-black' : 'text-moon-white'
                      }`}>
                        <h3 className="text-xs sm:text-sm md:text-md">{number}</h3>
                    </button>
                ))
            }
        </>
    );
};

export default Pagination;