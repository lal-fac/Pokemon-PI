import './pagination.css';

export default function Pagination({ activePage, count, tagsPerPage, totalPages, setActivePage }){
    
    const beginning = activePage === 1 ? 1 : tagsPerPage * (activePage - 1) + 1;
    const end = activePage === totalPages ? count : beginning + tagsPerPage - 1;

    return (
        <div id="pagination">
            <div id="pageButtons">
                <button className="navButton" disabled={activePage === 1} onClick={() => setActivePage(1)}>
                    {'<<First'}
                </button>
                <button className="navButton" disabled={activePage === 1} onClick={() => setActivePage(activePage -1)}>
                    {'<Previous'}
                </button>
                <button className="navButton" disabled={activePage === totalPages} onClick={() => setActivePage(activePage + 1)}>
                    {'Next>'}
                </button>
                <button className="navButton" disabled={activePage === totalPages} onClick={() => setActivePage(totalPages)}>
                    {'Last>>'}
                </button>
            </div>
            <p id="pageIndex">
                Page {activePage} of {totalPages}
            </p>
            <p id="pageIndex">
                Pokemon: {beginning === end ? end : `${beginning} - ${end}`} of {count}
            </p>
        </div>
    )
}