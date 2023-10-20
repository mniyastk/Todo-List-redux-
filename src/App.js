import "./App.css";
import ProductList from "./productList";
function App() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center text font-serif ">
      <h1 className="text-2xl stroke-stone-800 font-bold">TODO List</h1>
      <ProductList />
    </div>
  );
}

export default App;
