var React = require ('react');


var TitleandInfo = React.createClass({
	render: function() {
		console.log(this.props)
		return (
			<div>
			<h1>{this.props.titles}</h1>
			<h3>{this.props.overview}</h3>
			<img src={this.props.poster}></img>
			</div>)

	}

})

export default TitleandInfo