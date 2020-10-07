import React from "react";
import { Header } from "./header";
import { Content } from "./content";
import { Footer } from "./footer";

export function Home() {
	return (
		<div id="home-page">
			<Header />
			<Content />
			<Footer />
		</div>
	);
}
