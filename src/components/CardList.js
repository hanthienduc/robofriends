import React from 'react';
import Card from './Card';
const CardList = ({ robots }) => {
	return (
		<div>
			{
				robots.map((user, i) => {
					return(
					 	<Card
					 	 key={robots[i].id}
					 	 id={robots[i].id}
					 	 name={robots[i].name}
					 	 email={robots[i].email}
					 	 />
					 );	
				})
			}
		</div>
	
	);

	/*const cardsArray = robots.map((user, i) => {
		return(
		 	<Card
		 	 key={robots[i].id}
		 	 id={robots[i].id}
		 	 name={robots[i].name}
		 	 email={robots[i].email}
		 	 />
		 );
	});
	return (
	
	<div>
		{cardsArray}
	</div>


	<div>
		<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
		<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
		<Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
	</div>
	
	);*/
}

export default CardList;

//(bonus note)  Key prop should have
// something that doesn't change.
// For example, index(or i in our case) 
// could change if array items get moved.
// So a bettery key in this case would 
// be something unique like id.
