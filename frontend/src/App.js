import './App.css';
import AppRoutes from './pages/AppRoutes';
import TopNavbar from './components/topNavbar';

function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <AppRoutes/>
    </div>
  );
}

export default App;
