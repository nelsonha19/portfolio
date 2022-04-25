import { Text } from '@chakra-ui/react';
import React from 'react';
import Container from '../components/Container/Container';

type Props = {};

export default function About({  }: Props) {
	return (
		<Container>
			<h1>About me page</h1>
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui quos aut at laborum harum?
				Voluptates odio, a magnam quo aut aspernatur adipisci dignissimos sint voluptatem, eaque nesciunt,
				repellat eum quam diitatis praesentium doloribus dignissimos, nulla voluptatum, architecto minus
				officiis eveniet! Est sunt qui quod modi odit suscipit consequatur ducimus sit enim eius, dolores
				aperiam nobis iusto, nisi eum?
			</Text>
		</Container>
	);
}
