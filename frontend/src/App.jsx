import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },);

  return (
    <div>
      <h1>Jokes</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
