import './ArticleSearch.css'

const SearchBar = ({ onSearch, onSortChange, onDateRangeChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
            <select onChange={e => onSortChange(e.target.value)} className="sort-dropdown">
                <option value="newest">Sort by Newest</option>
                <option value="oldest">Sort by Oldest</option>
            </select>
            <select onChange={e => onDateRangeChange(e.target.value)} className="date-range-dropdown">
                <option value="">Select Date Range</option>
                <option value="last_week">Last Week</option>
                <option value="last_month">Last Month</option>
                <option value="last_year">Last Year</option>
            </select>
        </div>
    );
};

export default SearchBar;
