
import Company from "./Company.js"

function Experience() {
    return(

        <div>
            <h2 class = "text-center">Experience</h2>
            <div class = "container">
                <ul class = "list-unstyled">
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

        </div>
    )
}

export default Experience;