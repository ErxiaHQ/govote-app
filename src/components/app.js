import { h, Component } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import createHashHistory from 'history/createHashHistory';

import Header from './header';
import Footer from './footer';
import Home from '../routes/home';
import Search from '../routes/search';
import Share from '../routes/share';
import About from '../routes/about';
import Why from '../routes/why';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router history={createHashHistory()} onChange={this.handleRoute}>
					<AsyncRoute path="/" component={Home} />
					<AsyncRoute path="/about" component={About} />
          <AsyncRoute path="/search" component={Search} />
          <AsyncRoute path="/share" component={Share} />
					<AsyncRoute path="/why" component={Why} />
				</Router>
        <Footer />
			</div>
		);
	}
}
