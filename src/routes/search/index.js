import { h, Component } from 'preact';
import style from './style';
import axios from 'axios';

export default class Search extends Component {
  constructor () {
    super()
    this.state = {
      result: false,
      value: '',
      locations: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  componentWillMount () {
    // console.log(process.env.NODE_ENV);
  }
  handleSubmit(event) {
    axios.get('https://api.govote.org.ng/search?query=' + this.state.value + '&key=k9ihbvse57fvsujbsvsi5362WE$NFD2')
      .then(res => {
        // console.log(res.data);
        this.setState({ locations: res.data.data });
        this.setState({ result: true });
      })
      .catch(err => {
        console.error(err);
      });
    event.preventDefault();
  }
  loadMore () {
    console.log(this.state.currentPage);
  }
  render() {
    return (
      <div className={style.search}>
        <div className={style.search_bar}>
          <p>Enter your location below and we’ll show PVC wards close to you.</p>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <div className="control has-icons-right">
                <input type="text" onChange={this.handleChange} value={this.state.value} className="input is-primary" placeholder="Search Locations: Lekki, Badagry, Epe e.t.c" />
                <button type="submit" className={style.search_icon}>
                  <svg width="15px" viewBox="0 0 136 137" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>search19</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Font-Awesome-Icon-Pack" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-3292.000000, -1610.000000)">
                      <g id="search19" fill="#000000" transform="translate(3291.843750, 1610.500000)">
                        <path d="M132.77,118.025 L104.825,90.08 C111.56,80.358 114.929,69.521 114.929,57.572 C114.929,49.805 113.421,42.377 110.406,35.289 C107.392,28.2 103.318,22.09 98.185,16.957 C93.052,11.824 86.943,7.75 79.855,4.736 C72.765,1.721 65.337,0.214 57.57,0.214 C49.803,0.214 42.375,1.721 35.287,4.736 C28.198,7.75 22.088,11.824 16.955,16.957 C11.822,22.09 7.748,28.201 4.734,35.289 C1.719,42.378 0.212,49.805 0.212,57.572 C0.212,65.339 1.719,72.765 4.734,79.855 C7.748,86.943 11.822,93.052 16.955,98.185 C22.088,103.319 28.199,107.392 35.287,110.407 C42.376,113.422 49.803,114.929 57.57,114.929 C69.521,114.929 80.357,111.56 90.079,104.825 L118.024,132.688 C119.979,134.752 122.421,135.784 125.356,135.784 C128.18,135.784 130.626,134.752 132.688,132.688 C134.752,130.625 135.784,128.18 135.784,125.356 C135.785,122.479 134.781,120.034 132.77,118.025 L132.77,118.025 Z M83.357,83.357 C76.214,90.5 67.619,94.071 57.57,94.071 C47.522,94.071 38.927,90.499 31.784,83.357 C24.641,76.214 21.07,67.62 21.07,57.571 C21.07,47.523 24.642,38.927 31.784,31.785 C38.926,24.642 47.522,21.071 57.57,21.071 C67.618,21.071 76.213,24.643 83.357,31.785 C90.5,38.927 94.072,47.523 94.072,57.571 C94.072,67.62 90.499,76.214 83.357,83.357 L83.357,83.357 Z" id="Shape"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className={style.search_results}>
          {this.state.result
            && <div>
                <p>{this.state.locations.length} search results.</p>
                <div className="columns is-multiline">
                  {this.state.locations.map((item, i) => (
                    <div className="column is-half">
                      <div className={style.search_collection}>
                        <p>{item.name}</p>
                        <p><strong>Address</strong>: {item.address}</p>
                        <p><strong>Area</strong>: {item.area}</p>
                        <p><strong>State</strong>: {item.state_name} State</p>
                      </div>
                    </div>
                  ))}
                </div>

              {/*<button onClick={this.loadMore} className={style.loadmore_btn}>Load More</button>*/}
            </div>
          }

          {!this.state.result && <div className="columns is-multiline">
            <div className="column is-half">
              <div className={style.search_collection}>
                <p>ANIFOWOSHE PRY. SCH</p>
                <p><strong>Address</strong>: ANIFOWOSHE PRY. SCH.</p>
                <p><strong>Area</strong>: ANIFOWOSHE/IKEJA</p>
                <p><strong>State</strong>: Lagos State</p>
              </div>
            </div>
            <div className="column is-half">
              <div className={style.search_collection}>
                <p>OLOMU PRY. SCH.</p>
                <p><strong>Address</strong>: OLOMU PRY. SCH.</p>
                <p><strong>Area</strong>: AJAH/ SANGOTEDO VILLAGE</p>
                <p><strong>State</strong>: Lagos State</p>
              </div>
            </div>
            <div className="column is-half">
              <div className={style.search_collection}>
                <p>GOVT TECH COLL.IKOTUN</p>
                <p><strong>Address</strong>: GOVT TECH COLL.IKOTUN</p>
                <p><strong>Area</strong>: IKOTUN/IJEGUN</p>
                <p><strong>State</strong>: Lagos State</p>
              </div>
            </div>
            <div className="column is-half">
              <div className={style.search_collection}>
                <p>KURAMO COLLEGE, VICTORIA ISLAND</p>
                <p><strong>Address</strong>: KURAMO COLLEGE, VICTORIA ISLAND</p>
                <p><strong>Area</strong>: VICTORIA IS LAND 11</p>
                <p><strong>State</strong>: Lagos State</p>
              </div>
            </div>
            <div className="column is-half">
              <div className={style.search_collection}>
                <p>ST DIMINIC PRY. SCH. YABA</p>
                <p><strong>Address</strong>: ST DIMINIC PRY. SCH. YABA</p>
                <p><strong>Area</strong>: IWAYA</p>
                <p><strong>State</strong>: Lagos State</p>
              </div>
            </div>
            <div className="column is-half">
              <div className={style.search_collection}>
                <p>BADAGRY PRY. SCH.</p>
                <p><strong>Address</strong>: BADAGRY PRY. SCH.</p>
                <p><strong>Area</strong>: BADAGRY</p>
                <p><strong>State</strong>: Lagos State</p>
              </div>
            </div>
          </div>}
        </div>
      </div>
    )
  }
}
