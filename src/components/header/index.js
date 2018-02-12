import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './style'

export default class Header extends Component {
  render () {
    return (
      <header >
        <nav className={style.nav}>
          <div className={style.navbar__middle}>
            <Link href='/' className={style.nav__item}>govote</Link>
            <Link href='/why' className={style.nav__item}>why</Link>
            <Link href='/search' className={style.nav__item}>search</Link>
            <Link href='/share' className={style.nav__item}>share</Link>
          </div>
        </nav>
      </header>
    )
  }
}
