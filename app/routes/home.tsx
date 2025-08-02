namespace Route {
  export type LoaderArgs = any;
  export type ComponentProps = any;
}

import { TestingActionButton } from "./home.client.tsx";

const Component = ({ loaderData }: Route.ComponentProps) => {
  return (
    <main className="container my-8 px-8 mx-auto">
      <article className="paper prose max-w-none">
        <h1>Home</h1>
        <p>This is the home page.</p>
        <TestingActionButton />
      </article>
    </main>
  );
};

export default Component;
