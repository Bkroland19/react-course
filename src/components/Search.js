import React from "react";
import axios from "axios";

const { useState, useEffect } = React;

function Search() {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState("programming");
	console.log(results);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
				params: {
					action: "query",
					list: "search",
					origin: "*",
					format: "json",
					srsearch: "term",
				},
			});
			setResults(data);
		};

		search();
	}, [term]);

	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="content">
					<div className="header">{result.title}</div>
					{result.snippet}
				</div>
			</div>
		);
	});

	//alternatively

	// useEffect(() => {
	// 	(async () => {
	// 		await axios.get("uri");
	// 	})();
	// }, [term]);

	return (
		<>
			<div className="ui-form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						className="input"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</>
	);
}

export default Search;
