import { Box, Flex, Heading, Image, List, ListItem, Text, Divider } from '@chakra-ui/react';
import React from 'react';
import { workExperienceType } from '../../constants/workExperience';

type Props = { work: workExperienceType };

export default function WorkExperience({ work }: Props) {
    return (
        <Flex flexDir={'row'}
            borderRadius={'lg'} justifyContent={'space-between'} alignItems={'center'} my={2} py={6} boxShadow={'md'}>
            {work.logoPath && (
                <>
                <Image
                    src={work.logoPath}
                    boxSize={{ base: 16, md: 32 }}           
                              alt="CommBank logo" 
                    display={'inline'}
                    verticalAlign={'middle'}
                /><Divider orientation='vertical' mx={2} variant={'dashed'}/> </>
            )}

            <Flex flexGrow={1} flexDirection="column" justifyContent={'center'} pl={!work.logoPath ? 8 : 0}>
                <Heading>{work.company}</Heading>
                <Text>{work.role}</Text>
                <Text>Started: {work.startDate}</Text>
                <Text>Ended: {work.endDate}</Text>

                {work.description?.map((desc, index) => <List key={index}>
                    <ListItem>{desc}</ListItem>
                </List>)}
            </Flex>
        </Flex>
    );
}
