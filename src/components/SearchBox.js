import React from 'react';
// we are using destruturing here ({}) -- allows us to grab the pops object and grab is properties. searchfiled is actually not used and will be removed in upcoming video

const SearchBox = (searchChange) => {
	return(
		<div className="pa5 ba b--green bg-lightest-blue">
			<input type ="search"
			 placeholder ="search box"
			 onChange={searchChange}
			  />
		 </div>
	);
}

export default SearchBox;