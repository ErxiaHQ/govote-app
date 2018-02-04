import { h, Component } from 'preact';
import style from './style';
import classnames from 'classnames';

export default class Search extends Component {
  constructor () {
    super()
    this.state = {
      result: false
    }
  }
  render() {
    let search_css = classnames(style.search, {
      search_m_b: !this.state.result
    });
    return (
      <div className={search_css}>
        <div className={style.search_bar}>
          <p>Enter your location below and we’ll show PVC wards close to you.</p>
          <form>
            <input type="text" className="input" placeholder="Lekki, Badagry, Epe" />
          </form>
        </div>
      </div>
    )
  }
}
