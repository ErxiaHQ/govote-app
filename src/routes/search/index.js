import { h, Component } from 'preact';
import style from './style';
// import DisqusThread from '../../components/disqus/DisqusThread';
import axios from 'axios';
import classnames from 'classnames';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

export default class Search extends Component {
  constructor () {
    super()
    this.state = {
      result: false,
      value: '',
      loading: false,
      locations: [],
      visible: false,
      visiblesuggest: false,
      visibledelete: false,
      showdisqus: false,
      currentLocation: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.show = this.show.bind(this);
    this.showdeletion = this.showdeletion.bind(this);
    this.showsuggest = this.showsuggest.bind(this);
    this.hide = this.hide.bind(this);
    this.hidedeletion = this.hidedeletion.bind(this);
    this.hidesuggest = this.hidesuggest.bind(this);
    this.showDisqus = this.showDisqus.bind(this);
    this.closeDisqus = this.closeDisqus.bind(this);
  }
  show(val) {
    return ( e => {
      e.preventDefault();
      this.setState({ visible: true });
      this.setState({ currentLocation: val });
    });
  }
  showsuggest() {
    return ( e => {
      e.preventDefault();
      this.setState({ visiblesuggest: true });
    });
  }
  showdeletion(val) {
    return ( e => {
      e.preventDefault();
      this.setState({ visibledelete: true });
      this.setState({ currentLocation: val });
    });
  }
  showDisqus (val) {
    return ( e => {
      e.preventDefault();
      this.setState({ currentLocation: val });
      this.setState({ showdisqus: true });
    });
  }
  closeDisqus () {
    return ( e => {
      e.preventDefault();
      this.setState({ currentLocation: null });
      this.setState({ showdisqus: false });
    });
  }
  hide() {
    this.setState({ visible: false });
    this.setState({ currentLocation: null });
  }
  hidesuggest() {
    this.setState({ visiblesuggest: false });
  }
  hidedeletion() {
    this.setState({ visibledelete: false });
    this.setState({ currentLocation: null });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    this.setState({ loading: false });
    mixpanel.track('User searched for: ' + this.state.value);
    axios.get('https://api.govote.org.ng/search?query=' + this.state.value + '&key=k9ihbvse57fvsujbsvsi5362WE$NFD2')
      .then(res => {
        this.setState({ loading: true });
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
  componentWillMount () {
    axios.get('https://api.govote.org.ng/search?query=' + ' ' + '&key=k9ihbvse57fvsujbsvsi5362WE$NFD2')
      .then(res => {
        console.log(res.data);
        this.setState({ loading: true });
        this.setState({ locations: res.data.data });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    let searchResults = classnames(style.search_results, {
      'searchresults_left': this.state.showdisqus
    });
    let searchRow = classnames({
      'searchpage__row': this.state.showdisqus
    });

    let disqusSection = classnames(style.disqus_section, {
      'disqus_show': this.state.showdisqus
    })
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

        <div className={searchRow}>
          <div className={style.suggest_location}>
            <a onClick={this.showsuggest()} href="#">Suggest a Location</a>
          </div>
          <div className={searchResults}>
            {this.state.loading
              ? <div>
                {this.state.result && <p>{this.state.locations.length} search results.</p>}
                <div className="columns is-multiline">
                  {this.state.locations.map((item, i) => (
                    <div className="column is-half">
                      <div className={style.search_collection}>
                        <p>{item.name}</p>
                        <p><strong>Address</strong>: {item.address}</p>
                        <p><strong>Area</strong>: {item.area}</p>
                        {item.city && <p><strong>City</strong>: {item.city}</p>}
                        <p><strong>State</strong>: {item.state} State</p>
                      </div>
                      <footer class="card-footer">
                        { item.latitude || item.longitude ? <a href={'https://www.google.com/maps/?q=' + item.latitude + ',' + item.longitude} class="card-footer-item" target="_blank">View on Map</a> : ''}
                        <a onClick={this.show(item)} href="#" class="card-footer-item">Suggest Edits</a>
                        <a onClick={this.showdeletion(item)} href="#" class="card-footer-item">Suggest Deletion</a>
                        {/*<a onClick={this.showDisqus(item)} href="#" class="card-footer-item">Discuss</a>*/}
                      </footer>
                    </div>
                  ))}
                </div>

                {/*<button onClick={this.loadMore} className={style.loadmore_btn}>Load More</button>*/}
              </div> : <div className="columns is-multiline">
                <div className="column is-half">
                  <div className={style.search_collection}>
                    <p className={style.animated_background__sub__first}></p>
                    <p className={style.animated_background__sub__second}></p>
                    <p className={style.animated_background__sub__third}></p>
                    <p className={style.animated_background__sub__second}></p>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">View on Map</a>
                    <a href="#" class="card-footer-item">Suggest Edits</a>
                    <a href="#" class="card-footer-item">Discuss</a>
                  </footer>
                </div>
                <div className="column is-half">
                  <div className={style.search_collection}>
                    <p className={style.animated_background__sub__first}></p>
                    <p className={style.animated_background__sub__second}></p>
                    <p className={style.animated_background__sub__third}></p>
                    <p className={style.animated_background__sub__second}></p>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">View on Map</a>
                    <a href="#" class="card-footer-item">Suggest Edits</a>
                    <a href="#" class="card-footer-item">Discuss</a>
                  </footer>
                </div>
                <div className="column is-half">
                  <div className={style.search_collection}>
                    <p className={style.animated_background__sub__first}></p>
                    <p className={style.animated_background__sub__second}></p>
                    <p className={style.animated_background__sub__third}></p>
                    <p className={style.animated_background__sub__second}></p>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">View on Map</a>
                    <a href="#" class="card-footer-item">Suggest Edits</a>
                    <a href="#" class="card-footer-item">Discuss</a>
                  </footer>
                </div>
                <div className="column is-half">
                  <div className={style.search_collection}>
                    <p className={style.animated_background__sub__first}></p>
                    <p className={style.animated_background__sub__second}></p>
                    <p className={style.animated_background__sub__third}></p>
                    <p className={style.animated_background__sub__second}></p>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">View on Map</a>
                    <a href="#" class="card-footer-item">Suggest Edits</a>
                    <a href="#" class="card-footer-item">Discuss</a>
                  </footer>
                </div>
                <div className="column is-half">
                  <div className={style.search_collection}>
                    <p className={style.animated_background__sub__first}></p>
                    <p className={style.animated_background__sub__second}></p>
                    <p className={style.animated_background__sub__third}></p>
                    <p className={style.animated_background__sub__second}></p>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">View on Map</a>
                    <a href="#" class="card-footer-item">Suggest Edits</a>
                    <a href="#" class="card-footer-item">Discuss</a>
                  </footer>
                </div>
                <div className="column is-half">
                  <div className={style.search_collection}>
                    <p className={style.animated_background__sub__first}></p>
                    <p className={style.animated_background__sub__second}></p>
                    <p className={style.animated_background__sub__third}></p>
                    <p className={style.animated_background__sub__second}></p>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">View on Map</a>
                    <a href="#" class="card-footer-item">Suggest Edits</a>
                    <a href="#" class="card-footer-item">Discuss</a>
                  </footer>
                </div>
                <div className="column is-half">
                  <div className={style.search_collection}>
                    <p className={style.animated_background__sub__first}></p>
                    <p className={style.animated_background__sub__second}></p>
                    <p className={style.animated_background__sub__third}></p>
                    <p className={style.animated_background__sub__second}></p>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">View on Map</a>
                    <a href="#" class="card-footer-item">Suggest Edits</a>
                    <a href="#" class="card-footer-item">Discuss</a>
                  </footer>
                </div>
                <div className="column is-half">
                  <div className={style.search_collection}>
                    <p className={style.animated_background__sub__first}></p>
                    <p className={style.animated_background__sub__second}></p>
                    <p className={style.animated_background__sub__third}></p>
                    <p className={style.animated_background__sub__second}></p>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">View on Map</a>
                    <a href="#" class="card-footer-item">Suggest Edits</a>
                    <a href="#" class="card-footer-item">Discuss</a>
                  </footer>
                </div>
                <div className="column is-half">
                  <div className={style.search_collection}>
                    <p className={style.animated_background__sub__first}></p>
                    <p className={style.animated_background__sub__second}></p>
                    <p className={style.animated_background__sub__third}></p>
                    <p className={style.animated_background__sub__second}></p>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">View on Map</a>
                    <a href="#" class="card-footer-item">Suggest Edits</a>
                    <a href="#" class="card-footer-item">Discuss</a>
                  </footer>
                </div>
                <div className="column is-half">
                  <div className={style.search_collection}>
                    <p className={style.animated_background__sub__first}></p>
                    <p className={style.animated_background__sub__second}></p>
                    <p className={style.animated_background__sub__third}></p>
                    <p className={style.animated_background__sub__second}></p>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">View on Map</a>
                    <a href="#" class="card-footer-item">Suggest Edits</a>
                    <a href="#" class="card-footer-item">Discuss</a>
                  </footer>
                </div>
              </div>
            }
          </div>

          <div className={disqusSection}>
            <div className={style.disqus_section__inner}>
              <div className={style.disqus_section__close}>
                <a onClick={this.closeDisqus()} href="#">X</a>
              </div>
              {this.state.currentLocation !== null && <div className={style.disqus_section__content}>
                <p><strong>{this.state.currentLocation.name}</strong></p>
                <p>Address: {this.state.currentLocation.address}</p>
                <p>Area: {this.state.currentLocation.area}</p>
                <p>City: {this.state.currentLocation.city}</p>
                <p>State: {this.state.currentLocation.state}</p>

                {/*<DisqusThread id={this.state.currentLocation.id + ''} title={this.state.currentLocation.name} path="/search" />*/}
              </div>}
            </div>
          </div>

        </div>
        <Rodal width={500} animation="fade" visible={this.state.visible} onClose={this.hide}  showCloseButton={true} closeOnEsc={true}>
          {this.state.currentLocation !== null && <div>
            <div className={style.modal__header}>
              <strong>Suggest Edits for {this.state.currentLocation.name}</strong>
            </div>
            <p>
              <blockquote>
                We apologise for any wrong information you see. Please help us clean it up by making edits and suggestions. 😁
              </blockquote>
            </p>
            <div className={style.modal__body}>
              <form action="https://formspree.io/govoteng@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="Suggestion Edits for a Location" />
                <input type="hidden" name="_next" value="https://govote.org.ng/#/search" />
                <div className="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input class="input" type="text" name="Name" value={this.state.currentLocation.name}  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">Address</label>
                  <div class="control">
                    <input class="input" type="text" name="Address" value={this.state.currentLocation.address}  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">Latitude</label>
                  <div class="control">
                    <input class="input" type="text" name="Latitude" value={this.state.currentLocation.latitude}  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">Longitude</label>
                  <div class="control">
                    <input class="input" type="text" name="Longitude" value={this.state.currentLocation.longitude}  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">Area</label>
                  <div class="control">
                    <input class="input" type="text" name="Area" value={this.state.currentLocation.area}  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">City</label>
                  <div class="control">
                    <input class="input" type="text" name="City" value={this.state.currentLocation.city}  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">State</label>
                  <div class="control">
                    <input class="input" type="text" name="State" value={this.state.currentLocation.state}  />
                  </div>
                </div>
                <div class="control">
                  <button type="submit" class="button is-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>}
        </Rodal>
        <Rodal width={500} animation="fade" visible={this.state.visibledelete} onClose={this.hidedeletion} showCloseButton={true} closeOnEsc={true}>
          {this.state.currentLocation !== null && <div>
            <div className={style.modal__header}>
              <strong>Suggest Deletion for {this.state.currentLocation.name}</strong>
            </div>
            <div className={style.modal__body}>
              <form action="https://formspree.io/govoteng@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="Deletion for a Location" />
                <input type="hidden" name="_next" value="https://govote.org.ng/#/search" />
                <div className="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input class="input" type="text" name="Name" value={this.state.currentLocation.name}  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">Address</label>
                  <div class="control">
                    <input class="input" type="text" name="Address" value={this.state.currentLocation.address}  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">Latitude</label>
                  <div class="control">
                    <input class="input" type="text" name="Latitude" value={this.state.currentLocation.latitude} required />
                  </div>
                </div>
                <div className="field">
                  <label class="label">Longitude</label>
                  <div class="control">
                    <input class="input" type="text" name="Longitude" value={this.state.currentLocation.longitude} required />
                  </div>
                </div>
                <div className="field">
                  <label class="label">Area</label>
                  <div class="control">
                    <input class="input" type="text" name="Area" value={this.state.currentLocation.area}  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">City</label>
                  <div class="control">
                    <input class="input" type="text" name="City" value={this.state.currentLocation.city}  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">State</label>
                  <div class="control">
                    <input class="input" type="text" name="State" value={this.state.currentLocation.state}  />
                  </div>
                </div>
                <div class="control">
                  <button type="submit" class="button is-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>}
        </Rodal>
        <Rodal width={500} animation="fade" visible={this.state.visiblesuggest} onClose={this.hidesuggest} showCloseButton={true} closeOnEsc={true}>
          <div>
            <div className={style.modal__header}>
              <strong>Suggest A New Location</strong>
            </div>
            <div className={style.modal__body}>
              <form action="https://formspree.io/govoteng@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="New Suggestion submission!" />
                <input type="hidden" name="_next" value="https://govote.org.ng/#/search" />
                <div className="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input class="input" type="text" name="Name" placeholder="Location Name"  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">Address</label>
                  <div class="control">
                    <input class="input" type="text" name="Address" placeholder="Location Address"  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">Latitude</label>
                  <div class="control">
                    <input class="input" type="text" name="Latitude" placeholder="Location Latitude"  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">Longitude</label>
                  <div class="control">
                    <input class="input" type="text" name="Longitude" placeholder="Location Longitude"  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">Area</label>
                  <div class="control">
                    <input class="input" type="text" name="Area" placeholder="Location Area"  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">City</label>
                  <div class="control">
                    <input class="input" type="text" name="City" placeholder="Location City"  />
                  </div>
                </div>
                <div className="field">
                  <label class="label">State</label>
                  <div class="control">
                    <input class="input" type="text" name="State" placeholder="Location State"  />
                  </div>
                </div>
                <div class="control">
                  <button type="submit" class="button is-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </Rodal>
      </div>
    )
  }
}
