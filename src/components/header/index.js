import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import classNames from 'classnames';
import style from './style';

let navClass = classNames( style.navbar_end, 'navbar-end' )
let navItem = classNames( style.navbar_item, 'navbar-item')

export default class Header extends Component {
  render() {
    return (
      <header >
        <nav className="navbar is-fixed-top">
          <div className={navClass}>
            <Link href="/" className={navItem}>govote</Link>
            <Link href="/why" className={navItem}>why</Link>
            <Link href="/search" className={navItem}>search</Link>
            <Link href="/share" className={navItem}>share</Link>
          </div>
        </nav>
      </header>
    );
  }
}
