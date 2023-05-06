import "./App.css";
import Quiz from "./components/Quiz";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <h1>My Quiz App</h1>
      <Wrapper>
        <Quiz />
      </Wrapper>
    </div>
  );
}

export default App;
