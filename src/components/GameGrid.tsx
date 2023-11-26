import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from '../hooks/useGenres';

interface Props {
	selectedGenre: Genre | null
}

const GameGrid = ({ selectedGenre }: Props) => {
	const { data, error, isLoading } = useGames(selectedGenre);
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{
					sm: 1,
					md: 2,
					lg: 3,
					xl: 5,
				}}
				padding="15px"
				spacing={4}
			>
				{isLoading &&
					Array.from({ length: 20 }).map((_, index) => (
						<GameCardContainer key={index}>
							<GameCardSkeleton/>
						</GameCardContainer>
					))}
				{data.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
