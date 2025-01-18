import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";


export default function SkillsPage() {
    return (
        <div className="App">
            <SideBar />
            <div className="Page">
                <Header />
                <div className="container">
                    <h1>НАВЫКИ</h1>
                </div>
                <Footer />
            </div>
        </div>
    )
}