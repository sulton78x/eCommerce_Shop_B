import { useState } from 'react'
import Head from "next/head";

// add Chat Functionality

const HomePage = () => {

	const [cart, setCart] = useState(0)
	return (
		<div>
		<Head>
			<title></title>
		</Head>
		<div>
			<header></header>
			<main>
				<h1 className='font-lato font-bold text-5xl text-red-500'>Shopping Cart</h1>
			</main>
		</div>
		</div>
	);
}

export default HomePage;