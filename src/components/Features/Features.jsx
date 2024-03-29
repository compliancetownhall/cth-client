import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';

  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Features() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              complliancetownhall.com  is for
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon  color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Meeting for a common purpose'}
              />
              <Feature
                icon={<Icon  color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Discussion various issue of respective domains'}
              />
              <Feature
                icon={
                  <Icon  color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Interaction and exchange of ideas'}
              />
               <Feature
                icon={
                  <Icon  color={'red.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('red.100', 'red.900')}
                text={'Sharing of thoughts and knowledge'}
              />
              <Feature
                icon={
                  <Icon  color={'blue.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('blue.100', 'blue.900')}
                text={'Collaborating and Associating'}
              />
              <Feature
                icon={
                  <Icon  color={'orange.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('orange.100', 'orange.900')}
                text={'with freedom and independence ...'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://static.vecteezy.com/system/resources/previews/002/173/297/original/business-colleagues-have-a-discussion-with-speech-bubbles-free-vector.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }