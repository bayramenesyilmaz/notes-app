import Form from "./components/Form";
import TextArea from "./components/TextArea";
import NoteList from "./components/NoteList";

function App() {

  return (
    <div className="container">
      <header>

        <h1>NotesApp</h1>
        <Form />
        <TextArea />

      </header>

      <NoteList />

    </div>
  );
}

export default App;
