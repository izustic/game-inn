import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
	const { data, isLoading, error } = useGenres();

  if (error) return null

	return (
		<>
			<List>
				{isLoading &&
					Array.from({ length: 20 }).map((_, index) => (
						<GenreListSkeleton key={index} />
					))}
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Text fontSize="lg">{genre.name}</Text>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
