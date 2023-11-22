import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/sellit-green.png'

const NavBar = () => {
	return (
  <HStack>
    <Image src={logo} boxSize="50px" objectFit="contain"/>
    <Text>Nav bar</Text>
  </HStack>
  );
};

export default NavBar;
