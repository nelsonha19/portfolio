import { Button } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Nelson Ha</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>Hello</h1>
			<Button colorScheme={'blue'}>Button</Button>
		</div>
	);
};

export default Home;
