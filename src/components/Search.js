import React from 'react'

const Search = ({setSearchName}) => {
  return (
    <div className="filter-search-box">
    <div className="filters-box">
      <div className="all-filters filters">
        All Movie <i className="fa fa-angle-down" />
      </div>
      <div className="date-filters filters">
        Liked Movie <i className="fa fa-angle-down" />
      </div>
      <div className="category-filters filters">
        Hated Movie <i className="fa fa-angle-down" />
      </div>
      <div className="category-filters filters">Coming soon</div>
    </div>

    {/*partie search by title*/}

    
    <div className="search-filters">
      <input type="text" placeholder="Search by name..." onChange={(e)=>setSearchName(e.target.value)}/>
      <i className="fa fa-search" />
    </div>
    <div className="search-bar">
      <div className="bar" />
    </div>
  </div>
  )
}

export default Search
