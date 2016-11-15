var React = require ('react');
import MovieList from './MovieList.jsx';

var Form = React.createClass({
	getInitialState: function() {
		return {input:'',
				movielist:['In Bruges','Fight Club','Pulp Fiction'],
			}
	},
	handleChange(inputEvent, event) {
		console.log(this.state)
		this.setState({input: event.target.value});
	},
	addMovie(e){
		 e.preventDefault();
    	this.setState({movielist:this.state.input})
	},
	render: function() {
		console.log(this.state.input)
		return (
			<div>
			<MovieList list={this.state.movielist}/>
			<form>
			<input type='text' placeholder='Insert Title Here'
				onChange={this.handleChange.bind(this,'input')}
				value={this.state.input}></input>
			<button onClick={this.addMovie}>Click here</button>
			</form>
			</div>)
		}


})

export default Form