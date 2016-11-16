var React = require ('react');
var ReactDOM = require ('react-dom');
import {Link, Router, Route} from 'react-router';
import Form from './inputform.jsx';
import MovieList from './MovieList.jsx';

var App = React.createClass({
  render: function() {
    return (
        <div>
        <Form/>
        <MovieList/>
        </div>
    )
}
})

ReactDOM.render(
	<App />, 
	document.getElementById('root'));