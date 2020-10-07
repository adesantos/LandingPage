import React from "react";
import { Banner } from "./banner";
import { Inside_content } from "./inside_content";

export function Content() {
	return (
		<div className="container">
			<Banner />
			<Inside_content />
		</div>
	);
}
