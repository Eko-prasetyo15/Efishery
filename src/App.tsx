import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import routes from "./routes"
import Layout from "./View/Component/Layout"
import { useDispatch, useSelector } from 'react-redux';
import { getList } from './Action';

function App() {
  // const dispatch = useDispatch()
  // const listData = useSelector((state: any) => state.listPerikanan.listData)
  // console.log(listData, 'list')
  // useEffect(() => {
  //   dispatch<any>(getList())
  // }, [])
  // const renderWithLayout = (Component: <Any/>, props: any) => {
  //   return (
  //     <Layout {...props}>
  //       <Component {...props} />
  //     </Layout>
  //   );
  // };

  return (
    // @ts-ignore
    <Router history={History}>
      <Routes>
        {routes.map((route: any, idx: number) => {
          return (
            <Route
              key={idx}
              //@ts-ignore
              exact={route.exact}
              path={route.path}
              element={
                <Layout>
                  <route.component />
                </Layout>}
            // render={(props: any) => renderWithLayout(<route.component />, props)}
            />
          );
        })}
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
