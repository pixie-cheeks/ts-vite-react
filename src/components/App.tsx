import type { JSX } from 'react';

function RenderName({ name = 'Zach' }): JSX.Element {
  return <div>{name}</div>;
}

function App(): JSX.Element {
  return (
    <>
      <p>Hello World!</p>
      <RenderName />
    </>
  );
}

export { App };
