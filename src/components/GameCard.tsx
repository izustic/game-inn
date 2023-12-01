import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from '../services/image-url';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image
				src={getCroppedImageUrl(game.background_image)}
				h={{ sm: "300px", md: "250px", lg: "200px" }}
				objectFit="cover"
				objectPosition="center"
			/>
			<CardBody style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
				<HStack justifyContent="space-between" marginBottom={2}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="2xl">{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
