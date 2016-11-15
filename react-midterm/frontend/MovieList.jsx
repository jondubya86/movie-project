var React = require ('react');
import $ from 'jquery'
import TitleandInfo from './TitleandInfo.jsx'

var MovieList = React.createClass({
	getInitialState: function() {
		return {}
	},
	movieClick(e){
		console.log(e)
		$.ajax({
			url: 'https://api.themoviedb.org/3/search/movie?api_key=b902443a744c7a955c8fb7a7728ac85c&query=,'+e,
			type: 'GET',
			success: 
				(data)=>{
				this.setState({title:data.results[0].title,
					overview: data.results[0].overview,
					poster: 'https://image.tmdb.org/t/p/w500/'+data.results[0].backdrop_path})
			}
		})
	},
	render: function() {
		if (this.props.list){
		return (
			<div>
			<ul>
			{this.props.list.map((a,idx)=><li onClick={this.movieClick.bind(this, a)} key={idx}>{a}</li>)}
			<TitleandInfo titles={this.state.title} overview={this.state.overview} poster={this.state.poster}/>
			</ul>
			</div>)

	}}

})

export default MovieList