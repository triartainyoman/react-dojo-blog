import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

// Using server-json
// 1. Create file data/db.json on the root directory of the project
// 2. Run this command on terminal and automaticly install the server-json package:
//    npx json-server --watch data/db.json --port 8000

// Watching the full tutorial on this link below if you forgot how to use it:
// https://www.youtube.com/watch?v=mAqYJF-yxO8&ab_channel=TheNetNinja
