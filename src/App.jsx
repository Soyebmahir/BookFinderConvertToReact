import { useState } from "react";
import DisplayBook from "./component/DisplayBook/DisplayBook";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import { books } from "./Utils/books";

const App = () => {
  const [allBooks, setAllBooks] = useState([...books]);

  const handleSearch = (searchText) => {
    if (!searchText) {
      return;
    }
    console.log(searchText);
    const filteredBooks = allBooks.filter((book) =>
      book.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setAllBooks([...filteredBooks]);
  };
  return (
    <div>
      <Navbar />
      <div className="my-10 lg:my-14">
        <Header searchOn={handleSearch} />
      </div>
      <DisplayBook allBooks={allBooks} />
      <Footer />
    </div>
  );
};

export default App;
