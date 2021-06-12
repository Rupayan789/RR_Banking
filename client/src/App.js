import './App.css';
import Homepage from './pages/homepage/homepage';
import { Switch,Route} from 'react-router-dom'
import Userpage from './pages/users/view-users';
import Navbar from './components/navbar/navbar';
import UserProfile from './components/userProfile/userProfile';
import TransactionHistoryPage from './pages/transaction.history.jsx/transaction.history';
import CreateUserPage from './pages/createUser/createUser';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/users" component={Userpage}/>
        <Route path="/transact/:userID" component={UserProfile}/>
        <Route path="/transaction/history" component={TransactionHistoryPage}/>
        <Route path="/users/create" component={CreateUserPage}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
