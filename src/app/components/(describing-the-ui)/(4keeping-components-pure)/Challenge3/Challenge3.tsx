export default function Challenge3({ stories }: any) {
  // Copy the array!
  let storiesToDisplay = stories.slice();

  // Does not affect the original array:
  storiesToDisplay.push({
    id: "create",
    label: "Create Story",
  });

  return (
    <ul>
      {storiesToDisplay.map((story: any) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
