import { Badge } from "@chakra-ui/react";

interface Props {
	score: number;
}

const CriticScore = ({ score }: Props) => {
	return (
		<Badge
			colorScheme={
				score >= 85
					? "green"
					: score >= 65
					? "blue"
					: score >= 45
					? "orange"
					: "red"
			}
		>
			{score}
		</Badge>
	);
};

export default CriticScore;
