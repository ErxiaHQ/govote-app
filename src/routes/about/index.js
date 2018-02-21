import { h, Component } from 'preact'
import Helmet from 'preact-helmet'
import style from './style'

export default class About extends Component {
	componentWillMount () {
		if (typeof window !== 'undefined') {
			mixpanel.track('User visited About page')
		}
	}
	render () {
		return (
			<section className={style.about_container}>
				<Helmet title='About' />
				<h1>About<br /> govote 🙏🏿</h1>

				<p>govote was built to make sure that the first hurdle concerning the elections can be cleared; registering to vote.</p>

				<p>The existing data for the PVC collection wards were scraped from the internet and converted into an API. We recognize that some of these data might not be correct or outdated so we need help with corrections, additions and verifications.</p>

				<p>The codebase for this interface and the API have been made open source so that we can all contribute. The links to their respective repositories can be found below.</p>

				<p>govote was created by <a href='https://twitter.com/olayinkaos' rel='noopener noreferrer' target='_blank'>Olayinka Omole</a>, <a href='https://twitter.com/KendysonD' rel='noopener noreferrer' target='_blank'>Douglas Kendyson</a> and <a href='https://twitter.com/yomieluwande' rel='noopener noreferrer' target='_blank'>Yomi Eluwande</a></p>
				<p><strong>Links and Credits</strong>
					<br />
					<a href='https://github.com/ErxiaHQ/govote-app' rel='noopener noreferrer' target='_blank'>govote on GitHub (govote-app)</a> <br />
					<a href='https://github.com/ErxiaHQ/govote-api' rel='noopener noreferrer' target='_blank'>govote on GitHub (govote-api)</a> <br />
					Nigerian Building Illustration by <a href='https://twitter.com/onyekvchi' rel='noopener noreferrer' target='_blank'>Kachi</a>
					<br />
					Homepage Illustrations by <a href='http://undraw.co' rel='noopener noreferrer' target='_blank'>undraw.co</a> <br />
					Search powered by <a href='https://www.algolia.com/'>Algolia</a>
				</p>

				<p><strong>Contributors</strong>
					<br />
					<a href='https://github.com/pyjac' rel='noopener noreferrer' target='_blank'>Oyebanji Jacob Mayowa</a> <br />
					<a href='https://github.com/Mrkezii' rel='noopener noreferrer' target='_blank'>David Kezi</a>
				</p>
			</section>
		)
	}
}
