import { Repository } from "./RepositoryList";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

const RepositoryItem = ({ item }: { item: Repository }) => {
  return (
    <Box className="justify-start border border-gray-200 rounded-lg p-4 mb-4">
      <VStack space="xs" reversed={false}>
        <RepositoryItemElement label="Full name" value={item.fullName} />
        <RepositoryItemElement label="Description" value={item.description} />
        <RepositoryItemElement label="Language" value={item.language} />
        <RepositoryItemElement
          label="Fork"
          value={item.forksCount.toString()}
        />
        <RepositoryItemElement
          label="Star"
          value={item.stargazersCount.toString()}
        />
        <RepositoryItemElement
          label="Rating"
          value={item.ratingAverage.toString()}
        />
        <RepositoryItemElement
          label="Review"
          value={item.reviewCount.toString()}
        />
      </VStack>
    </Box>
  );
};
export default RepositoryItem;

const RepositoryItemElement = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <Box className="flex-row justify-start items-start gap-4">
      <Text className="text-secondary-950 w-24">{label}</Text>
      <Text className="text-primary-950 font-medium flex-1">{value}</Text>
    </Box>
  );
};
