import React from "react";

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	// Unmount timerID to prevent memory and performance issues
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({ date: new Date() });
	}

	render() {
		return <p>{this.state.date.toLocaleTimeString()}</p>;
	}
}

export default Clock;
