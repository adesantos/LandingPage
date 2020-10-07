import React from "react";
import { Card } from "./card";

export function Inside_content() {
	const list = [];

	for (var i = 0; i < 4; i++) {
		list.push(
			<div key={i} className="col-xs-12 col-md-6 col-lg-3">
				{<Card />}
			</div>
		);
	}
	return (
		<div id="inside-content">
			<div className="row">{list}</div>
		</div>
	);
}
