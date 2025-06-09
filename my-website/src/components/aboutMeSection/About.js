import Hobby from "./Hobby.js"

function About() {

    return(
        <div>
            <div class = "d-flex justify-content-center">
                <div>
                    <h2>About me</h2>
                    <p>Fill in Bio</p>
                </div>

            </div>
            <div  class = "d-flex justify-content-center">
                <Hobby pics = {['test1','test2']} hobby = "My Life"></Hobby>
                <Hobby pics = {['test1','test2']} hobby = "Music"></Hobby>
            </div>

        </div>
    )
}

export default About;