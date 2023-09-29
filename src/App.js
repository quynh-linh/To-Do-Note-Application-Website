import { BrowserRouter as Router, Route , Routes, Outlet, Navigate} from "react-router-dom";
import { Fragment } from "react";
import { publicRoutes , privateRoutes } from "~/routes";
import {DefaultLayout} from "~/components/layouts";
import WebLayout from "./components/layouts/WebLayout/WebLayout";
import AccountManagementLayout from "./components/layouts/auth/AccountManagementLayout";
import { ToastContainer } from "react-toastify";
function App() {
    function PrivateOutlet() {
      const tokenUser = localStorage.getItem('token');
      return tokenUser !== null ? <Outlet /> : <Navigate to="/login"/>;
    }
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route element={<PrivateOutlet />}>
              {
                privateRoutes.map((route, index) =>{
                  const Layout = route.layout === null ? Fragment : DefaultLayout;
                  const Page = route.component;
                  return (
                    <Route 
                      key={index} 
                      path={route.path} 
                      element={
                        <Layout>
                          <Page/>
                        </Layout>
                      }
                    />
                  )
                })
              }
            </Route>
            {
              publicRoutes.map((route,index) => {
                const Layout = route.layout !== null ? (route.pageCode === 1 ? WebLayout : AccountManagementLayout) : Fragment ;
                const Page = route.component;
                  return (
                    <Route 
                      key={index} 
                      path={route.path} 
                      element={
                        <Layout>
                          <Page/>
                        </Layout>
                      }
                    />
                  ) 
              })
            }     
          </Routes> 
          <ToastContainer/>
        </div>
      </Router>
    );
}
export default App;
