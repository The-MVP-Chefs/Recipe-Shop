import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime'
import {App} from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

ReactDOM.render(
	<App />,
	document.getElementById('root')
)