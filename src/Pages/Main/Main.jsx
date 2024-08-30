import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

function Main() {
  return (
    <div className="max-w-screen-xl h-max overflow-y-auto flex flex-col mx-auto gap-5 ">
      <Navbar />
      <Header />
      <span></span>
    </div>
  );
}

export default Main;
