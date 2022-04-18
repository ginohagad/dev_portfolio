import React from 'react';
import Intro from './Intro';
import Hero from './Hero';
import Projects from './Projects';



const Main = (props) => {

	return (
		<>
			<Intro />
			<Hero />
			<Projects />
			<div className="py-10 bg-gray-400">
				<div className="text-center">Copyright Gino Hagad Portfolio &copy; 2022.</div>
			</div>
		</>
	);
}


export default Main;
