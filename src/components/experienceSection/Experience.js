
import Company from "./Company.js"

function Experience() {
    let company_description_1 = 'Contributed to the launch of Melio widgets developed with Angular on the Capital One official website for small business bank (SBB) accounts to increase outbound digital money movement engagement rate to 56\%. \n Spearheaded the development of live dependency tests for widgets including creating feature toggles on Optimizely. \n Quarterbacked the migration of SBB’s Accounts Payables Insights API from Gen2 to Gen3 to lower the blast radius of the application and reduce technical debt, by segmenting Capital One’s workload environment into smaller AWS units. \nConfigured the small business banking fraud check API to OpenTelemetry standards that enables distributed tracing in order to enhance the full stack observability journey, reducing the mean time to repair and detect'
    return(

        <div id ="experience">
            <h2 class = "text-center">Experience</h2>
            <div class = "container">
                <ul class = "list-unstyled">
                    <li>
                        <Company companyLogo = "images/capitalone.png" description = {company_description_1} date = "February 2025 - Present" title = "Software Engineer | Technology Development Program" companyName = "Capital One"></Company>
                    </li>
                    <li>
                        <Company companyLogo = "images/capitalone.png" description = "Achieved a 6-month intensive software engineering training focused on full stack development, AWS, DevOps, and Cyber Security, where I completed 60+ full stack apps with colleagues and mentors" date = "August 2024 - February 2025" title = "Software Engineer | Capital One Developer Academy" companyName = "Capital One"></Company>
                    </li>
                    <li>
                        <Company companyLogo = "images/texas.png" description = "Moderated with instructor and 11 TAs to facilitate recitations, grade programs, and address 550+ students over Introduction to Programming topics taught in Python while fostering a collaborative learning environment over Piazza" date = "Janruary 2023 - May 2024" title = "Elements of Computing Teaching Assistant" companyName = "University of Texas Computer Science"></Company>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Experience;