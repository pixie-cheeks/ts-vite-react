function RenderName({ name = 'Zach' }) {
  return <div>{name}</div>;
}

function App() {
  return (
    <>
      <p>Hello World!</p>
      <RenderName />
    </>
  );
}

export { App };
