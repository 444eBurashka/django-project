import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";


export default function StatsPage() {
    return (
        <div className="App">
            <SideBar />
            <div className="Page">
                <Header />
                <div className="container">
                    <h1>ОБЩАЯ СТАТИСТИКА</h1>
                </div>
                <Footer />
            </div>
        </div>
    )
}