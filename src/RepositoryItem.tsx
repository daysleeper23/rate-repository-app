import { View } from "react-native";
import { Repository } from "./RepositoryList";

const RepositoryItem = ({ repository }: { repository: Repository }) => {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}>
      <h2>{repository.fullName}</h2>
      <p>{repository.description}</p>
      <p>Stars: {repository.stargazersCount}</p>
      <p>Forks: {repository.forksCount}</p>
      <a
        href={repository.ownerAvatarUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Repository
      </a>
    </View>
  );
};
export default RepositoryItem;
