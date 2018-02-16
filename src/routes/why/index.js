import { h, Component } from 'preact'
import style from './style'
import classnames from 'classnames'
import { Link } from 'preact-router/match'

let findBtn = classnames(style.find_btn, 'button')

export default class Why extends Component {
  componentWillMount () {
    mixpanel.track('User visited Why page')
  }
  render () {
    return (
      <div className={style.why_container}>
        <h1>THIS IS NOT THE<br />
          TIME TO BE<br />
          PASSIVE. 👏🏿👏🏿</h1>

        <p>As new and younger voters, we’ll live with the decisions being made right now for the next few years. We need to be the ones making those decisions.</p>

        <p>Some of the decisions made in the past few years have affected some of us and our livelihoods.</p>

        <p>Vote the right people in so you know who to hold responsible when things are not working.</p>

        <p>What kind of future do you want to live in?</p>

        <p>What health care systems do you want in place?</p>

        <p>How do ensure security for everyone?</p>

        <p>How can we get our economy to better support SMEs and you?</p>

        <p>What do we need to change the education sector for good?</p>

        <p>It’s up to you to vote and decide! You owe it to yourself and your future. </p>

        <p>In the 2015 elections, only 33.7% (67,422,005) of the general population registered to vote (only 43.65% of the 67,422,005 eventually turned out to vote.) <em><a href='http://www.inecnigeria.org/wp-content/uploads/2015/04/summary-of-results.pdf' rel='noopener noreferrer' target='_blank'>Source</a></em>.<br /> Let's increase that percentage for the upcoming election.</p>

        <Link className={findBtn} href='/search'>Find a PVC Collection Ward</Link>
      </div>
    )
  }
}
