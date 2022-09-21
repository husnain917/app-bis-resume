import {
    Box,
    Flex,
    Text,
    IconButton,
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
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import logoIcon from "../../../public/vercel.svg";
import Image from 'next/image';
import { NAV_ITEMS, EnglishDropDown } from "../constant/navbarLinks/NavbarLinks";

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

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

                {/* logo */}
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: 'start' }}
                >
                    <Image
                        src={logoIcon}
                        alt='Image Not Found'
                        width={useBreakpointValue({ base: 100 })}
                    />

                    {/* deskTop Nav */}
                    <Flex display={{ base: 'none', lg: 'flex', }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>


                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    alignItems={'center'}
                    spacing={5}
                    >

                    {/* English dropdown start */}
                    {EnglishDropDown?.map((navItem) => (
                        <Box key={navItem?.label}
                            display={{ base: 'none', lg: 'inline-flex' }}
                        >
                            <Popover trigger={'hover'} placement={'bottom-start'}>
                                <PopoverTrigger>
                                    <Link
                                        padding={'8px 0px'}
                                        minW={'110'}
                                        href={navItem?.href ?? '#'}
                                        fontSize={'md'}
                                        fontWeight={500}
                                        display={'inline-block'}
                                        color={linkColor}
                                        border={'1px'}
                                        borderColor={'#CCC'}
                                        textAlign={'center'}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: linkHoverColor,
                                        }}>
                                        {navItem?.label}
                                        <Icon color={'black.400'} w={5} h={5} as={navItem.icon} />
                                    </Link>
                                </PopoverTrigger>

                                {navItem.children && (
                                    <PopoverContent
                                        border={0}
                                        boxShadow={'xl'}
                                        bg={popoverContentBgColor}
                                        p={4}
                                        rounded={'xl'}
                                        minW={'xs'}>
                                        <Stack>
                                            {navItem.children.map((child) => (
                                                <DesktopSubNav key={child.label} {...child} />
                                            ))}
                                        </Stack>
                                    </PopoverContent>
                                )}
                            </Popover>
                        </Box>
                    ))}
                    {/* English dropdown end */}


                    {/* Account button */}
                    <Box
                        display={{ base: 'none', md: 'inline-block' }}
                        justify={{ base: 'end' }}
                        border={0}
                        boxShadow={'lg'}
                        width={useBreakpointValue({ base: 120, lg: 95 })}
                        bg={popoverContentBgColor}
                        textAlign={'center'}
                        padding={'11px 5px'}
                        textTransform={'uppercase'}
                    >
                        <Link
                            fontWeight={500}
                            color={linkColor}
                            fontSize={useBreakpointValue({ base: 14, lg: 12 })}
                            _hover={{
                                textDecoration: 'none',
                                color: linkHoverColor,
                            }}
                        >
                            My Account
                        </Link>
                    </Box>
                    {/* account button end */}

                    {/* toggle button */}
                    <Flex
                        flex={{ base: 1, }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', lg: 'none' }}
                        justify={{ base: 'end' }}
                    >
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    {/* toogle button end */}
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} alignItems={'center'} spacing={4}>
            {NAV_ITEMS?.map((navItem) => (
                <Box key={navItem?.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                href={navItem?.href ?? '#'}
                                fontWeight={500}
                                color={linkColor}
                                fontSize={useBreakpointValue({ base: '15px' })}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem?.label}
                                {
                                    navItem.label === 'Resume' || navItem.label === 'CV' || navItem.label === 'Cover Letter' ?
                                        <>
                                            <Icon color={'black.400'} w={5} h={5} as={navItem.icon} />
                                        </>
                                        :
                                        <></>
                                }
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'xs'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
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
            rounded={'sm'}
            _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'blue.400' }}
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
                    <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ lg: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
            {EnglishDropDown.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
            {/* Account button */}
            <Box
                display={{ base: 'inline-block', md: 'none' }}
                border={0}
                boxShadow={'lg'}
                width={'150px'}
                bg={popoverContentBgColor}
                textAlign={'center'}
                padding={'12px 5px'}
                textTransform={'uppercase'}
            >
                <Link
                    fontWeight={500}
                    color={linkColor}
                    fontSize={'14px'}
                    _hover={{
                        textDecoration: 'none',
                        color: linkHoverColor,
                    }}
                >
                    My Account
                </Link>
            </Box>
            {/* account button end */}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

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
                    color={useColorModeValue('gray.600', 'gray.200')}>
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
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

//   interface NAV_ITEMS {
//     label: string;
//     subLabel?: string;
//     children?: Array<NAV_ITEMS>;
//     href?: string;
//   }