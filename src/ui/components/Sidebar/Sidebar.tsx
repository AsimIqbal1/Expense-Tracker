import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    Icon,
    useColorMode,
} from '@chakra-ui/react'

import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import theme from 'theme';
import { ISidebarProps, SidebarProps, NavItemProps, MobileProps } from './Sidebar.types';

export default function Sidebar(props: ISidebarProps) {
    const { pages, children } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH={theme.size.fullScreenHeight} >
            <SidebarContent onClose={() => onClose} display={{ sm: 'none', md: 'block' }} pages={pages} />

            {/* Drawer for mobile */}
            <Drawer
                isOpen={isOpen}
                placement="top"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent pages={pages} onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ sm: 'flex', md: 'none' }} onOpen={onOpen} />
            <Box ml={{ sm: 0, md: '20vw' }} p={theme.space.x4}>
                {children}
            </Box>
        </Box>
    )
}

const SidebarContent = (props: SidebarProps) => {
    const { onClose, pages, ...rest } = props;
    const { colorMode } = useColorMode();

    return (
        <Box
            borderRight="1px"
            borderRightColor={theme.colors.border[colorMode]}
            w={{ sm: 'full', md: '20vw' }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h={theme.size.x1} width={theme.size.fullParentWidth} alignItems="center" mx={theme.space.x8} >
                <Text display={{ sm: "none", md: "block" }} fontSize={theme.fontSizes['3xl']} fontFamily={theme.fonts.bold} >
                    Bracker.
                </Text>
                <CloseButton display={{ sm: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            <Flex
                flexDir={"column"}
                mt={theme.space.x8}
            // mt={{ base: 'none', md: theme.space.x8 }}
            >
                {pages.map((page) => (
                    <NavItem key={page.name} page={page} onClose={onClose} />
                ))}
            </Flex>

        </Box>
    )
}

const NavItem = (props: NavItemProps) => {

    const {
        page: {
            icon,
            route,
            name
        },
        onClose
    } = props;
    const { colorMode } = useColorMode();

    return (
        <Box
            as={NavLink}
            to={route}
            onClick={onClose}
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}
        >
            <Flex
                align="center"
                justifyContent={{ sm: 'center', md: 'normal' }}
                p={{ sm: theme.space.x8, md: theme.space.x4 }}
                mx={{ sm: theme.space.x8, md: theme.space.x4 }}
                borderRadius={theme.borderRadius.md}
                role="group"
                cursor="pointer"
                _hover={{
                    bg: theme.colors.primary[colorMode],
                    color: theme.colors.text[colorMode],
                }}
            >
                {icon && (
                    <Icon
                        mr={theme.space.x6}
                        icon={icon}
                        as={FontAwesomeIcon}
                    />
                )}
                {name}
            </Flex>
        </Box>
    )
}

const MobileNav = (props: MobileProps) => {
    const { onOpen, ...rest } = props;
    const { colorMode } = useColorMode();

    return (
        <Flex
            px={theme.space.x4}
            height={theme.size.x1}
            alignItems="center"
            borderBottomWidth="1px"
            borderBottomColor={theme.colors.border[colorMode]}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FontAwesomeIcon icon={faHamburger} />}
            />

            <Text fontSize={theme.fontSizes['2xl']} ml={theme.space.x8} fontFamily={theme.fonts.bold}>
                Bracker.
            </Text>
        </Flex>
    )
}