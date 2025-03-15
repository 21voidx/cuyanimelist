
const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleNextPage = () => {
        setPage(page + 1)
        scrollTop()

    }

    const handlePrevPage = () => {
        setPage(page - 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center text-center gap-6 pb-10 pt-4 bg-[#ffc639] text-[#222831">
            {page <= 1 ? null :
                <button onClick={handlePrevPage} className="transform transition-transform duration-200 hover:scale-110 text-2xl font-bold">Prev</button>
            }
            <p className="text-2xl font-bold ">{page} of {lastPage}</p>
            {page >= lastPage ? null :
                <button onClick={handleNextPage} className="transform transition-transform duration-200 hover:scale-110 text-2xl font-bold">Next</button>
            }
            
            
        </div>
    );
};
  
export default Pagination;