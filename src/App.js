import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidbar';
import Widget from './components/Widget';
import Progress from './components/Progress';
import Chart from './components/Chart.jsx';
import List from './components/user/List';
import SingleUser from './components/user/SingleUser';
import Transactions from './components/Transactions';
import { useContext } from "react";
import { DarkMoodContext } from './darkMoodContext';
import "./scss/app.scss";
function App() {
  const { darkMood } = useContext(DarkMoodContext);
  return <>
    <Router >
      <Navbar />
      <div className={darkMood ? "appContainer dark" : "appContainer"}>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<>
            <div  className={darkMood ? "rightSection dark" : "rightSection"}>
              <div className='widgetContainer'>
                <Widget type="user" />
                <Widget type="orders" />
                <Widget type="earning" />
                <Widget type="balance" />
              </div>
              <div className='infoContainer'>
                <Progress />
                <Chart type="mini" />
              </div>
              <Transactions />
            </div>
          </>}></Route>
          <Route exact path="/users" element={<List type="users" />}></Route>
          <Route exact path="/users/:id" element={<SingleUser />}></Route>
          <Route exact path="/products" element={<List type="products" />}></Route>
          <Route exact path="/orders" element={<Transactions type="singlePage" />}></Route>
          <Route exact path="/delivered" element={<Transactions type="delivered" />}></Route>
          <Route exact path="/earnings" element={<div className='rightSection'><Chart type="full"/></div>}></Route>
        </Routes>
      </div>

    </Router>
  </>
}

export default App;
