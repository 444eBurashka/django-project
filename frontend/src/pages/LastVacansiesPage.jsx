import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import VacancyList from "../components/VacancyList";


export default function LastVacansiesPage() {
    return (
        <div className="App">
            <SideBar />
            <div className="Page">
                <Header />
                <div className="container">
                    <h1>Последние вакансии</h1>
                    <VacancyList />
                </div>
                <Footer />
            </div>
        </div>
    )
}