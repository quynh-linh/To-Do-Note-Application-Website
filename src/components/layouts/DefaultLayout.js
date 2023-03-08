import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
function DefaultLayout({children}){
    return (
        <div>
            <Header/>
            <div className="container">
                <Sidebar/>
                {children}
            </div>
        </div>
    )
}
export default DefaultLayout;
