import { recipes } from "@/app/public/data/recipesData";

function Recipe({ id, name, ingredients }: any) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient: any) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Challenge3() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  );
}
