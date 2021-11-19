import Header from './components/Header'
import Logger from './components/Logger'
import Shifts from './components/Shifts'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App container">
      <Header />
      <Logger />
      <Shifts />
      <Footer />
    </div>
  );
}

export default App
