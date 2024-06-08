import React, { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_${searchType}=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
      setShowResults(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Search Breweries</h3>
          <div className="search-options">
            <label>
              <input type="radio" value="name" checked={searchType === "name"} onChange={handleTypeChange} />
              Name
            </label>
            <label>
              <input type="radio" value="city" checked={searchType === "city"} onChange={handleTypeChange} />
              City
            </label>
            <label>
              <input type="radio" value="type" checked={searchType === "type"} onChange={handleTypeChange} />
              Type
            </label>
          </div>
          <input
            type="text"
            placeholder={`Search by ${searchType}`}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {showResults && (
          <div className="search-results-popup">
            <button onClick={handleCloseResults} className="close-btn">Close</button>
            <div className="search-results">
              <h4>Search Results:</h4>
              <ul>
                {searchResults.map((result) => (
                  <li key={result.id}>
                    <strong>{result.name}</strong> - {result.city}, {result.state},<br />
                    Address: {result.street}, {result.postal_code}<br />
                    Phone: {result.phone}<br />
                    Website: <a href={result.website_url} target="_blank" rel="noopener noreferrer">{result.website_url}</a><br />
                    Current Rating: {result.rating || "N/A"}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
