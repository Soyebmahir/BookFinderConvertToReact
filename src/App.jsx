import DisplayBook from "./component/DisplayBook/DisplayBook";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="my-10 lg:my-14">
        <Header />
      </div>
      <DisplayBook />
    </div>
  );
};

export default App;
