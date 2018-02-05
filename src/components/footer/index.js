import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import classNames from 'classnames';
import style from './style';

export default class Footer extends Component {
  render () {
    return (
      <footer>
        <div className={style.footer}>
          <a class="github-button" href="https://github.com/ErxiaHQ/govote-app" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
          <p className={style.text}>Open Sourced under the <a href="https://opensource.org/licenses/mit-license.php" rel="noopener noreferrer" target="_blank">MIT License</a></p>
          <Link className={style.links} href="/about">about govote</Link>
          <Link className={style.links} href="/share">share</Link>
        </div>
      </footer>
    )
  }
}