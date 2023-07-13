import MyIndividualButton from "./components/(quick-start)/MyIndividualButton/MyIndividualButton";
import MySharedDataButton from "./components/(quick-start)/MySharedDataButton/MySharedDataButton";
import Profile from "./components/(quick-start)/Profile/Profile";
import ShoppingList from "./components/(quick-start)/ShoppingList/ShoppingList";

export default function Home() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyIndividualButton />
      <MyIndividualButton />
      <MySharedDataButton />
      <Profile />
      <ShoppingList />
    </div>
  );
}
