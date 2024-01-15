

const Pagination = ({ currentPage, setCurrentPage, workPerPage, totalWork  }) => {
    
    let pages = [];
    for(let i =1 ; i <= Math.ceil(totalWork / workPerPage); i++){
        pages.push(i)
    }
    return (
        <>
            {
                pages.map(number =>(
                    <button key={number} onClick={()=>{setCurrentPage(number)}} className={`h-[3rem] w-[3rem] cursor-pointer rounded-full my-3 
                    ${
                        currentPage === number ? 'bg-blue-300' : 'bg-evilBlue'
                      }
                      ${
                        currentPage === number ? 'text-russia-black' : 'text-moon-white'
                      }`}>
                        {number}
                    </button>
                ))
            }
        </>
    );
};

export default Pagination;