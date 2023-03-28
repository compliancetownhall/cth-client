import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';



const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};



export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320166578424287581.png"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h2" marginTop="5">
        Some Write Ups
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://img.freepik.com/free-vector/stop-corruption-concept-illustration_114360-13709.jpg?w=2000'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={['Transparency', 'Corruption']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Transparency Tools
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            TRANSPARENCY TOOL TO CURB CORRUPTION
            </Text>
            <BlogAuthor
              name="SUDIP KAR - Chief Manager (Vigilance)"
              date={new Date('2023-01-01T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default ArticleList;