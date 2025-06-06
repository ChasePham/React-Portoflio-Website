import Hobby from "./Hobby.js"

function About() {

    return(
        <div>
            <h2>About me</h2>
            <p>Fill in Bio</p>
            <Hobby pics = {['test1','test2']} hobby = "My Life"></Hobby>
            <Hobby pics = {['test1','test2']} hobby = "Music"></Hobby>
        </div>
    )
}

export default About;