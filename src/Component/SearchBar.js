import '../Style/SearchBar.css';

function SearchBar() {
    return (

        <div class="wrap">
            <div class="search">
                <input type="text" class="searchTerm" placeholder="Search any subject"></input>
                <button type="submit" class="searchButton">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>

    );
}

export default SearchBar;