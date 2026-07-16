import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import PizzaList from "./components/PizzaList";
function App() {
  return (
    <>
    <h1>Welcome to My Pizza App</h1>
      <PizzaList />
      <Footer />
    </>
  );
}
export default App;