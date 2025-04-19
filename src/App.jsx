import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/Routes';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="pt-16">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;