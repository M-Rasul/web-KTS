import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

// MAIN LAYOUT
const MainLayout = ({ children }) => {

    // LAYOUT
    return (
        <div className="main__layout">
            <Header />
            <div className="main__layout_bottom">
                <Sidebar />
                <div className="main__content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;