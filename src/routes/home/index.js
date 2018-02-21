import { h, Component } from 'preact'
import style from './style'
import classnames from 'classnames'
import Helmet from 'preact-helmet'
import { Link } from 'preact-router/match'
import CountDown from '../../components/countdown/Countdown'

function finish () {
  console.log('Countdown finished')
}

const messages = {
  years: 'Year',
  days: {
    plural: 'Days',
    singular: 'Day'
  },
  hours: 'Hours',
  mins: 'Min',
  segs: 'Seconds'
}

// let home_container = classnames()

let findBtn = classnames(style.find_btn, 'button')

export default class Home extends Component {
  componentWillMount () {
		if (typeof window !== 'undefined') {
			mixpanel.track('User visited Home page')
		}
  }
  render () {
    return (
      <section className={style.home}>
				<Helmet title='Home' />
        <div class={style.banner}>
          <div>
            <h1>Finding <br /> PVC collection centers <br /> shouldn't be hard.</h1>
            <Link className={findBtn} href='/search'>Find a PVC Collection Ward</Link>
            <CountDown
              date='2019-02-16T00:00:00+00:00'
              className='MyCoundown'
              {...messages}
              onEnd={finish}
            />
            <p className={style.countdown_text}>countdown to the 2019 elections</p>
          </div>
        </div>
        <div className={style.home_content}>
          <div className={style.home_content_inner}>
            <h2>BRUH, DO YOU EVEN VOTE? 🇳🇬</h2>
            <img src='../../assets/choose.svg' alt='Do you even vote?' />
            <p>The 2019 General Elections are almost here and it’s important we all go out, young and old to ensure that the right people are voted in to power. </p>
          </div>
          <div className={style.home_content_inner}>
            <h2>OKAY, BUT HOW DO I VOTE? 🤔</h2>
            <img src='../../assets/windows.svg' alt='How to vote' />
            <p>You need to register to vote. For that, you’ll need a <strong>Permanent Voters Card (PVC)</strong> to be able to vote in the upcoming elections. A PVC can be collected from wards around your area of residence. <strong>govote</strong> allows you to search for PVC collection centers in your area.</p>
            <Link className={findBtn} href='/search'>Find a PVC Collection Ward</Link>
          </div>
          <div className={style.home_content_inner}>
            <h2>WHAT NEXT? 👀</h2>
            <img src='../../assets/queue.svg' alt='what next?' />
            <p>We vote. This is not the time to leave the future up to chance. Read more about why you need to vote <Link href='/why'>here</Link>.</p>
          </div>
        </div>
      </section>
    )
  }
}
