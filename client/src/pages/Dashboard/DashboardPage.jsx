import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavbar from "../../layout/SideNavbar.jsx";
import '../../assets/CSS/index.css'
import DashboardMenuFirst from "./DashboardMenuFirst.jsx";
import DashboardMenuSecond from "./DashboardMenuSecond.jsx";

const DashboardPage = () => {
     return (
            <SideNavbar>
               <DashboardMenuFirst/>
                <DashboardMenuSecond/>
            </SideNavbar>
        );
};

export default DashboardPage;