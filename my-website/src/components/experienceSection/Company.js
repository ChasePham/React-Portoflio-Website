
function Company(props) {
    return(
        <div>
            <p>{props.companyLogo}</p>
            <ul>
                <p>{props.date}</p>
                <h2>{props.title}</h2>
                <p>{props.companyName}</p>
                <p>{props.description}</p>
            </ul>
        </div>
    )
}

export default Company