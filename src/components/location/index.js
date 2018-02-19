import PropTypes from 'prop-types';
import { h, Component } from 'preact';

export default class Location extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		address: PropTypes.string.isRequired,
		area: PropTypes.string.isRequired,
		city: PropTypes.string.isRequired,
		state: PropTypes.string.isRequired
	};

	shouldComponentUpdate (nextProps) {
		return (
			this.props.name !== nextProps.name ||
			this.props.address !== nextProps.address ||
			this.props.area !== nextProps.area ||
			this.props.city !== nextProps.city ||
			this.props.state !== nextProps.state
		);
	}

	render () {
		let {name, address, area, city, state} = this.props;
		return (
			<div>
				<p>{name}</p>
				<p><strong>Address</strong>: {address}</p>
				<p><strong>Area</strong>: {area}</p>
				{city && <p><strong>City</strong>: {city}</p>}
				<p><strong>State</strong>: {state} State</p>
			</div>
		)
	}
}
