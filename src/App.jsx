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
  const handleSort = (sortOption) => {
    // [
    //   "Name (A-Z)",
    //   "Name (Z-A)",
    //   "Publication Year (Oldest)",
    //   "Publication Year (Newest)",
    // ];
    if (sortOption === "Name (A-Z)") {
      setAllBooks(
        allBooks.slice().sort((a, b) => {
          return a.name.localeCompare(b.name);
        })
      );
    } else if (sortOption === "Name (Z-A)") {
      setAllBooks(
        allBooks.slice().sort((a, b) => {
          return b.name.localeCompare(a.name);
        })
      );
    } else if (sortOption === "Publication Year (Oldest)") {
      setAllBooks(allBooks.slice().sort((a, b) => a.published - b.published));
    } else if (sortOption === "Publication Year (Newest)") {
      setAllBooks(allBooks.slice().sort((a, b) => b.published - a.published));
    } else {
      return;
    }
    console.log({ sortOption });
  };
  const handleFavorite = (bookId) => {
    // const favBook=allBooks.filter(book=>book.id===bookId).isFavourite
    setAllBooks(
      allBooks.map((book) => {
        if (book.id == bookId) {
          return { ...book, isFavourite: !book.isFavourite };
        } else {
          return book;
        }
      })
    );
  };
  return (
    <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <Navbar />
      <div className="my-10 lg:my-14">
        <Header searchOn={handleSearch} onSort={handleSort} />
      </div>
      <DisplayBook allBooks={allBooks} onFav={handleFavorite} />
      <Footer />
    </div>
  );
};

export default App;
