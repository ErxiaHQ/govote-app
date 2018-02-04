import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import classNames from 'classnames';
import style from './style';

export default class Footer extends Component {
  render () {
    return (
      <footer>
        <div className={style.footer}>
          <p>Open Sourced under the <a href="https://opensource.org/licenses/mit-license.php" target="_blank">MIT License</a></p>
          <Link className={style.links} href="/about">about govote</Link>
          <Link className={style.links} href="/share">share</Link>
        </div>
      </footer>
    )
  }
}