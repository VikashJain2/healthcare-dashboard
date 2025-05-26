
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './App.css';

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;