import React from 'react';

const Nav = (props) => {

	return (
		<nav className="flex bg-green-700 py-6 px-10">
			<div className="container mx-auto flex items-center text-green-300">
				<a href="#home" className="font-semibold text-xl tracking-tight hover:text-white">GinoHagad</a>
			</div>
			<div className="block md:hidden">
				<button className="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
				</button>	
			</div>
			<div className="hidden md:flex px-2 pt-2">
				<a href="#home" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-green-800 hover:text-green-200">Home</a>
				<a href="#about" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-green-800 hover:text-green-200">About</a>
				<a href="#projects" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-green-800 hover:text-green-200">Projects</a>
			</div>
		</nav>
	);
}

export default Nav;
