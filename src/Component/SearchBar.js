import '../Style/SearchBar.css';

function SearchBar() {
    return (

        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Search any subject"></input>
                <button type="submit" className="searchButton">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>

    );
}

export default SearchBar;