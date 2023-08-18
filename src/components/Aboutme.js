import React from 'react';
import { developerData } from '../data/developer';

function Aboutme() {
	return (
		<section className="about-me">
			<img
				src={developerData.avtarPath}
				alt="Developer's Avatar"
				className="avatar"
			/>
			<div className="details">
				<h2>{developerData.name}</h2>
				{developerData.aboutData.map((data) => (
					<p>{data}</p>
				))}
			</div>
		</section>
	);
}

export default Aboutme;
