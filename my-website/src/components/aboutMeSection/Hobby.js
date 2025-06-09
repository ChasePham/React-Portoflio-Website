
function Hobby(props) {
    let list_items = []
    for (let i = 0; i <props.pics.length; i++) {
        list_items.push(<li>{props.pics[i]}</li>)
    }
    return (
        <div>
            <h3 class = "p-2">{props.hobby}</h3>
            <ul>
                {list_items}
            </ul>
        </div>
    )
}

export default Hobby