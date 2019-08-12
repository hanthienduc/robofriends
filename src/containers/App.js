import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll.js'
//import { robots } from './robots'
import './App.css'

// STATE simply mean the description of your app
// describe our application, able to change, ex:
// props come out of state
// PROPS

class App extends Component  {
	constructor(){
		super()
		// update fild whatever we type
		this.state = {
			robots: [],
			searchfield: ''
		}
		console.log('constructor');
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response =>{
			 return response.json();
			})
			.then(users =>{
			 this.setState({robots : users})
			});
		//this.setstate({ robots: robots})
		//console.log('componentDidMount');
	}
	// anything coming from react, if you use your own method =>
	// use the arrow

	onSearchChange = (event) => {
		// another case in react
		this.setState({searchField: event.target.value});
		
	}

	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})

		return !robots.length ?
			<h1>Loading</h1> : 
		(
				<div className="tc">
					<h1 className="f2">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>	
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>

		)
		/*if(!robots.length){
			return <h1>Loading..</h1>
		}else{
			return(
				<div className="tc">
					<h1 className="f2">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>	
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
				);
		}
		*/
	}
	

}

export default App;