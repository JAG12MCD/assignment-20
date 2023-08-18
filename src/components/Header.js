import React from 'react';
import { developerData } from '../data/developer';

function Header({ handleTabChange }) {
	return (
		<div>
			<header>
				<h1>{developerData.name}</h1>
				<div>
					{['AboutMe', 'Portfolio', 'Contact', 'Resume'].map(
						(tab) => (
							<button
								key={tab}
								onClick={() => handleTabChange(tab)}
							>
								{tab.replace(/([A-Z])/g, ' $1').trim()}{' '}
							</button>
						)
					)}
				</div>
			</header>
		</div>
	);
}

export default Header;
