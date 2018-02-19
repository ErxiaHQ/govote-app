import PropTypes from 'prop-types';
import { h, Component } from 'preact';

const SHORTNAME = 'govote-1';
const WEBSITE_URL = 'https://govote.org.ng';

function renderDisqus () {
  if (window.DISQUS === undefined) {
    let script = document.createElement('script');
    script.async = true;
    script.src = 'https://' + SHORTNAME + '.disqus.com/embed.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    window.DISQUS.reset({ reload: true });
  }
}

class DisqusThread extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  };

  shouldComponentUpdate (nextProps) {
    return (
      this.props.id !== nextProps.id ||
      this.props.title !== nextProps.title ||
      this.props.path !== nextProps.path
    );
  }

  componentDidMount () {
    renderDisqus();
  }

  componentDidUpdate () {
    renderDisqus();
  }

  render () {
    let { id, title, path, ...other } = this.props;

	  // if (process.env.BROWSER) {
		//   window.disqus_shortname = SHORTNAME;
		//   window.disqus_identifier = id;
		//   window.disqus_title = title;
		//   window.disqus_url = WEBSITE_URL + path;
	  // }

    return <div {...other} id='disqus_thread' />;
  }
}

export default DisqusThread;
