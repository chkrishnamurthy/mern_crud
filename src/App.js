import logo from "./logo.svg";
import "./App.css";
import BookList from "./components/BookList";
import { BrowserRouter, Route } from "react-router-dom";
// import BookItem from "./components/BookItem";
import EditBook from "./components/EditBook";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={BookList} exact />
        <Route path="/addbook" component={AddBook} exact />
        <Route path="/editbook" component={EditBook} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
