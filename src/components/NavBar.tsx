import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/sellit-green.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
	return (
		<HStack justifyContent='space-between' padding="10px">
			<Image src={logo} boxSize="50px" objectFit="contain" />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
