import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import CSR from '../CSR/CSR';
import { useState } from 'react';
import InternalInvestigation from '../InternalInvestigation/InternalInvestigation';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontSize={"xl"}
              fontWeight="bold"
              color={useColorModeValue('black.800', 'white')}>
              Compliance Townhall
            </Text>
            
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
            <Flex pl={"35"} display={{ base: 'flex', md: 'none' }}>
            <Link href='https://community.compliancetownhall.vercel.app/' isExternal>
            <Button
              as={'a'}
              // display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={"#54bfd7"}
              _hover={{
                bg: '#024250',
              }}
              >
              Sign In
            </Button>
            </Link>
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
              <Link href='https://community.compliancetownhall.vercel.app/' isExternal>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={"#54bfd7"}
              _hover={{
                bg: '#024250',
              }}
              >
              Sign In
            </Button>
            </Link>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('blue.600', 'blue.600');
    const linkHoverColor = useColorModeValue('black.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [type,setType]=useState(0);
    const openWindow = (type) => {
      console.log(type);
      if (type == "CSR") {
        setType(1);
      } else {
        setType(2);
      }
      onOpen();
    }
    return (
      <Stack direction={'row'} spacing={4}>
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'}>
            <ModalOverlay />
            <ModalContent maxW={'5xl'}>
              <ModalCloseButton />
              <ModalBody>
              {
                  type == 1 ? <CSR/> :<InternalInvestigation/>
                }
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            
                <Link
                  p={2}
                  onClick={()=>openWindow(navItem.label)}
                  href={navItem.href ?? '#'}
                  fontSize={'18px'}
                  fontWeight={"600"}
                  color={linkColor}
                  >
                  {navItem.label}
                </Link>
              
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onOpen, onToggle, onClose } = useDisclosure();
    const [type,setType]=useState(0);
    const openWindow = (type) => {
      if (type == "CSR") {
        setType(1);
      } else {
        setType(2);
      }
    }
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('black.600', 'black.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'}>
            <ModalOverlay />
            <ModalContent maxW={'5xl'}>
              <ModalCloseButton />
              <ModalBody>
                {
                  type == 1 ? <CSR/> :<InternalInvestigation/>
                }
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href} onClick={()=>openWindow(child.label)}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };

  
  const NAV_ITEMS = [
    {
      label: 'CSR',
      href: '#',
    },
    {
      label: 'Internal Investigations',
      href: '#',
    },
  ];    