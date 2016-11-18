var React = require ('react');
import MovieList from './MovieList.jsx';

var Form = React.createClass({
	getInitialState: function() {
		return {input:'',
				movielist:[]
				}
	},
	handleChange(event) {
		console.log(this.state)
		this.setState({input: event.target.value});
	},
	addMovie(event){
    	event.preventDefault();
    	this.setState({movielist:this.state.movielist.concat(this.state.input)})
    	console.log(this.state.movielist)
	},
	render: function() {
		console.log(this.state.input)
		return (
			<div>
			<MovieList list={this.state.movielist}/>
			<form onSubmit={this.addMovie}>
			<input type='text' placeholder='Insert Title Here'
				onChange={this.handleChange}
				value={this.state.input}></input>
			<input type="submit" value="Click Here"></input>
			</form>
			</div>)
		}


})

export default Form