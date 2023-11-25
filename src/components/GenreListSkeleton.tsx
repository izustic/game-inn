import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
	return (
		<ListItem paddingY="5px">
			<HStack>
				<Skeleton boxSize="32px" paddingX={4} borderRadius={8} />
				<SkeletonText width="100%" noOfLines={1} skeletonHeight={4} />
			</HStack>
		</ListItem>
	);
};

export default GenreListSkeleton;
