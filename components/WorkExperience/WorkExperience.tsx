import { Box, Flex, Heading, Image, List, ListItem, Text, Divider, ListIcon } from '@chakra-ui/react';
import React from 'react';
import { workExperienceType } from '../../constants/workExperience';
import { getFullMonthAndYearString } from '../../util/util';
import TechTags from '../TechTags/TechTags';
import WorkTags from '../WorkTags/WorkTags';
import { ChevronRightIcon } from '@chakra-ui/icons';

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
                </Flex>

                <Text as={'em'}>{work.role}</Text>

                <Divider mb={2}/>

                {work.isPrimary && <Text as={'samp'} fontWeight={'extrabold'} fontSize={'xs'} color={'green.500'}>
                    CURRENT EMPLOYMENT
                </Text>}
                <Text as={'samp'} color={'gray.600'} fontSize={'xs'}>Started: {getFullMonthAndYearString(work.startDate)}</Text>
                {work.endDate && <Text as={'samp'} fontSize={'xs'} color={'gray.600'}>
                    Ended: {getFullMonthAndYearString(work.endDate)}
                </Text>}

                <Divider my={2} mb={4}/>

                {work.description?.map((description, index) => <>
                    <List fontSize={'sm'} key={index}>
                        <ListItem>{description.main}</ListItem>
                        {description.sub?.map(sub => {
                            return <ListItem key={sub}>
                                <ListIcon as={ChevronRightIcon}/>
                                {sub}
                            </ListItem>
                        })}
                    </List>
                </>)}

                <Divider my={3} mt={5}/>

                {/* TAGS */}
                <WorkTags tags={['React', 'reactNative', 'reactNative', 'reactNative', 'reactNative', 'reactNative', 'reactNative', 'reactNative', 'reactNative', 'reactNative', 'reactNative']} />
            </Flex>
        </Flex>
    );
}
