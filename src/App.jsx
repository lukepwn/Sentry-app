function App() {
  return (
    <div>
      <h1>Test</h1>
      <button
        onClick={(e) => {
          throw new Error("sentry error", e);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
