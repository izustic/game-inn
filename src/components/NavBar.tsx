import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/sellit-green.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
	return (
		<HStack justifyContent='space-between' padding="10px">
			<Image src={logo} boxSize="50px" objectFit="contain" />
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
