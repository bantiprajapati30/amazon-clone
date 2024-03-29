/** @format */

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./component/Checkout";
import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./component/Login";
import "./scss/style.scss";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";
function App() {
  const [ dispatch] =useStateValue();
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in..
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      } else {
        // the user is logged out.
        dispatch({
          type:'SET_USER',
          user:null,
        });
      }
    });
    return ()=> {
      unsubcribe();
    };
  }, [dispatch]);
  return (
    <>
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      </ErrorBoundary>
    </>
  );
}

export default App;
