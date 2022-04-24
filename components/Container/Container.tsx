import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

type Props = {
	children: React.ReactNode;
};

export default function Container(props: Props) {
	return (
		<div>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
}
