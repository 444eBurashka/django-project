import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import LineChart from "../components/LineChart";


export default function StatsPage() {
    return (
        <div className="App">
            <SideBar />
            <div className="Page">
                <Header />
                <div className="container">
                    <h1>ОБЩАЯ СТАТИСТИКА</h1>
                    <LineChart />
                </div>
                <Footer />
            </div>
        </div>
    )
}