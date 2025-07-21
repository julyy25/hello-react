// USER DEFFINED TAG
function App() {
  return (
    <div>
      <h1>My Project</h1>

      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

// USER DEFINED TAG :: <Hello />
function Hello() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a simple React application.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>
        Donec vel mauris quam. Sed euismod, nisi vel consectetur interdum, nisl nisi aliquet nunc, nec aliquet nunc nisl
        eget nunc.
      </p>
      <p>Curabitur non libero nec leo facilisis tincidunt.</p>
      <p>Phasellus euismod, nisi vel consectetur interdum, nisl nisi aliquet nunc</p>
    </div>
  );
}

export default App;
