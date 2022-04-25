import { EmailIcon } from '@chakra-ui/icons';
import { Icon, chakra, Link, Flex, Text } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import styles from './Footer.module.scss';

type Props = {};

export default function Footer({  }: Props) {
	const socials = useMemo(
		() => [
			{
				id: 'linkedin-link',
				url: 'https://www.linkedin.com/in/nelson-ha-3743b7117/',
				icon: AiFillLinkedin
			},
			{
				id: 'github-link',
				url: 'https://github.com/nelsonha19',
				icon: AiFillGithub
			},
			{
				id: 'instagram-link',
				url: 'instagram',
				icon: AiFillInstagram
			},
			{
				id: 'email-link',
				url: 'mailto:nelsonha19@gmail.com',
				icon: MdEmail
			}
		],
		[]
	);

	return (
		<Flex
			className={`${styles.footerContainer}`}
			mt={{ base: 10, md: 20 }}
			flexDir={'column'}
			alignItems={'center'}
		>
			<Flex my={3}>
				{socials.map(({ id, url, icon }) => (
					<Link key={id} target={'_blank'} href={url} mx={2}>
						<Icon id={id} as={icon} boxSize={'6'} />
					</Link>
				))}
			</Flex>
			<Text fontSize={14} letterSpacing={'tight'}>
				© 2022 Nelson Ha
			</Text>
		</Flex>
	);
}
