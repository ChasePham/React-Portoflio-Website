
function Company(props) {
    return(
        <div class = "d-flex justify-content-center">
            <img src = {props.companyLogo} style={{height:100, width:100}} class = "rounded border"></img>
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