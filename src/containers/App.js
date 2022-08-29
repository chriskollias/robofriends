import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

/*
  Parents pass down STATE to their children in the form of PROPS
  Children cannot change their props, they just take whatever the parent gives it and go with it

  Also: smart components = components that have state
*/

class App extends Component {
  constructor() {
    super();  // gotta begin constructors of child objects by calling the constructor of the parent
    console.log("entered constructor()");
    this.state = {
      robots: [],
      searchField: ''     // whatever text user has currently entered into SearchBox
    }
  }

  // our custom method for handling onChange events in SearchBox's text input
  // also use arrow function notation for your custom methods inside of class-based components, otherwise the `this` keyword won't work in them
  onSearchChange = (event) => {
    // any time you want to update state in a class-based component, use this.setState(), makes everything work under the hood
    this.setState({searchField: event.target.value});
  }

  render() {
    console.log("entered render()");
    const { robots, searchField } = this.state;

    // event.target.value grabs the current value directly out of the input element
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });

    if (!robots.length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }

  // lifecycle method that runs automatically after a component mounts (will run after render() finishes)
  // also don't use arrow function notation for built-in component methods like render() and this
  componentDidMount() {
    console.log("entered componentDidMount()");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }
}

export default App;