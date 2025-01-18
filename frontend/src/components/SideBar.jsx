export default function SideBar() {
    return (
        <div className="sidebar">
            <h3>Меню</h3>
            <ul className="list-unstyled">
                <li><a href="/">Главная</a></li>
                <li><a href="/stats">Общая статистика</a></li>
                <li><a href="/relevance">Востребованность</a></li>
                <li><a href="/geography">География</a></li>
                <li><a href="/skills">Навыки</a></li>
                <li><a href="/lastVacansies">Последние вакансии</a></li>
            </ul>
        </div>
    )
}