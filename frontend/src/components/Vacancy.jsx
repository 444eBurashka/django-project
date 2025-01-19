export default function Vacancy(props) {
    return (
        <a href={props.url} className="list-group-item list-group-item-action" target="_blank" rel="noreferrer noopener">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.name}</h5>
                <small>{props.date}</small>
            </div>
            <div
                className="description"
                dangerouslySetInnerHTML={{ __html: props.description }}
            />
            <small>{props.companyName}</small>
        </a>
    )
}