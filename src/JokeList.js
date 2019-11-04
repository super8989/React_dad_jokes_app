import React, { Component } from "react";
import axios from "axios";

class JokeList extends Component {
	async componentDidMount() {
		//Load jokes
		let res = await axios.get("https://icanhazdadjoke.com/", {
			headers: { Accept: "application/json" }
		});
		console.log(res);
	}

	render() {
		return <h1>Dad Jokes</h1>;
	}
}

export default JokeList;
