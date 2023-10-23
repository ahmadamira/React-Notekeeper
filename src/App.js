import "./App.css";
import CreateNoteFiled from "./Components/CreateNoteFiled/CreateNoteFiled";
import Header from "./Components/Header/Header";
import NoteCard from "./Components/NoteCard/NoteCard";
import NotesGrid from "./Components/NotesGrid/NotesGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <CreateNoteFiled />
      <NotesGrid />
    </div>
  );
}

export default App;
