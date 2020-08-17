import React from 'react';


const Header = (props) => {

	return (
		<nav className="flex items-center justify-between flex-wrap bg-green-700 p-6">
			<div className="container mx-auto flex items-center flex-shrink-0 text-green-300">
				<span className="font-semibold text-xl tracking-tight">GinoHagad</span>
			</div>
			<div className="block lg:hidden">
				<button className="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
				</button>	
			</div>
		</nav>
	);
}

export default Header;


