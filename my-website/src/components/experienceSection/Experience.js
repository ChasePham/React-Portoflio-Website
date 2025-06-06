
import Company from "./Company.js"

function Experience() {
    return(
        <div>
            <h2>Experience</h2>
            <ul>
                <li>
                    <Company companyLogo = "fillpic" description = "fill1" date = "date1" title = "fill1" companyName = "fill1"></Company>
                </li>
                <li>
                    <Company companyLogo = "fillpic" description = "fill2" date = "date" title = "fill2" companyName = "fill2"></Company>
                </li>
                <li>
                    <Company companyLogo = "fillpic" description = "fill3" date = "date3" title = "fill3" companyName = "fill3"></Company>
                </li>
            </ul>
        </div>
    )
}

export default Experience;