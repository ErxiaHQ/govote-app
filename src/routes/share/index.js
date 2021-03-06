import { h, Component } from 'preact'
import Helmet from 'preact-helmet'
import style from './style'

export default class Share extends Component {
	componentWillMount () {
		if (typeof window !== 'undefined') {
			mixpanel.track('User visited Share page')
		}
	}
	render () {
		return (
			<section className={style.share_container}>
				<Helmet title='Share' />
				<h1>Spread<br /> the word 👩🏿‍💻 👨🏿‍💻</h1>

				<p>It’s up to you to vote and decide! You owe it to yourself and your future.</p>

				<p>The biggest impact you can have is by also getting your friends to get their PVC too!</p>
				<div className={style.share_buttons}>
					<a className={style.share_buttons__twitter} href='http://twitter.com/share?text=I just checked the closest PVC collection area closest to me via&url=http://govote.org.ng&hashtags=#pvc' target='_blank' rel='noopener noreferrer'>Share on Twitter</a>
					<a className={style.share_buttons__facebook} href='https://www.facebook.com/sharer/sharer.php?u=http://govote.org.ng&t=GoVote' target='_blank' rel='noopener noreferrer'>Share on Facebook</a>
				</div>
			</section>
		)
	}
}
