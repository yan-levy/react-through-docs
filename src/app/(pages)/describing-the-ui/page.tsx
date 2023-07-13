import Gallery from "@/app/components/(describing-the-ui)/Gallery/Gallery";
import List from "@/app/components/(describing-the-ui)/List/List";
import PackingList from "@/app/components/(describing-the-ui)/PackingList/PackingList";
import Profile from "@/app/components/(describing-the-ui)/Profile/Profile";
import Profile2 from "@/app/components/(describing-the-ui)/Profile2/Profile2";
import Profile3 from "@/app/components/(describing-the-ui)/Profile3/Profile3";
import TeaSet from "@/app/components/(describing-the-ui)/TeaSet/TeaSet";
import TodoList from "@/app/components/(describing-the-ui)/TodoList/TodoList";
import React from "react";

function page() {
  return (
    <section>
      <div>
        <h2>Writing markup with JSX</h2>
        <Gallery />
        <TodoList />
      </div>
      <div>
        <h2>Javascript in JSX with curly braces</h2>
        <Profile2 />
      </div>
      <div>
        <h2>Passing props to a component</h2>
        <Profile3 />
      </div>
      <div>
        <h2>Conditional rendering</h2>
        <PackingList />
      </div>
      <div>
        <h2>Rendering lists</h2>
        <List />
      </div>
      <div>
        <h2>Keeping components pure</h2>
        <TeaSet />
      </div>
    </section>
  );
}

export default page;
