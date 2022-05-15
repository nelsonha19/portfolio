import { Box, Flex, Heading, Image, List, ListItem, Text, Divider } from '@chakra-ui/react';
import React from 'react';
import { workExperienceType } from '../../constants/workExperience';
import { getFullMonthAndYearString } from '../../util/util';

type Props = { work: workExperienceType };

export default function WorkExperience({ work }: Props) {
    return (
        <Flex flexDir={'row'}
            borderRadius={'lg'} justifyContent={'space-between'} alignItems={'center'} my={2} py={6} boxShadow={'md'}>
            {work.logoPath && (
                <>
                <Image
                    src={work.logoPath}
                    boxSize={{ base: 0, md: 28 }}           
                              alt="CommBank logo" 
                    display={'inline'}
                    verticalAlign={'middle'}
                /><Divider orientation='vertical' mx={2} variant={'dashed'}/> </>
            )}

            <Flex flexGrow={1} flexDirection="column" justifyContent={'center'} pl={!work.logoPath ? 4 : 0}>
                <Flex flexDir={{base: 'column', md: 'row'}} alignItems={'center'} justifyContent={{base: 'center', md: 'unset'}}>
                        <Flex alignItems={'center'} justifyContent={'center'}>
                            <Heading fontSize={'xl'}>{work.company}</Heading>
                            {work.logoPath && (<Image
                                src={work.logoPath}
                                
                                boxSize={{ base: 12, md: 0 }}           
                                        alt="CommBank logo" 
                                display={'inline'}
                                verticalAlign={'middle'}
                            />)}
                        </Flex>
                        {work.isPrimary && <Text as={'p'} mb={{base:1, md: 0}} textAlign={'right'}>&nbsp;(CURRENT)</Text>}
                </Flex>
                <Text>{work.role}</Text>
                <Text>Started: {getFullMonthAndYearString(work.startDate)}</Text>
                <Text>Ended: {getFullMonthAndYearString(work.endDate)}</Text>

                {work.description?.map((desc, index) => <List key={index}>
                    <ListItem>{desc}</ListItem>
                </List>)}
            </Flex>
        </Flex>
    );
}
