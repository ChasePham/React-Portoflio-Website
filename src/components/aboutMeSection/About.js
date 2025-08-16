import Hobby from "./Hobby.js"

import snowboard from "../../images/snowboard.JPG"
import hike from "../../images/hike.jpg"
import miami from "../../images/miami.jpg"
import boilerroom from "../../images/boilerroom.jpg"
import beyond from "../../images/beyond.jpg"
import asap from "../../images/asap.png"
import dodgers from "../../images/dodgers.png"
import nyc from "../../images/nyc.png"
import lost from "../../images/lost.png"
import griffith from "../../images/griffith.png"

function About() {

    return(
        <div id = "about">
            <div class = "d-flex justify-content-center">
                <div>
                    <h2 class = "text-center">About me</h2>
                    <p class = "text-center">Currently, working at Capital One in DC as a Software Engineer focusing on full stack development. I recently graduated from the University of Texas at Austin where I studied Neuroscience and programming. On top of that, I've spent most of my learning tinkering on a variety of programming projects and networking with other like-minded software engineers, and I'm always looking for new ways to expand my skillset! Here are some life pics :O
</p>
                </div>

            </div>
            <div  class = "d-flex justify-content-center">
            <Hobby pics={[snowboard, hike, miami, boilerroom, beyond, asap, dodgers, nyc, lost, griffith]} hobby="My Life" id_name="life" />
                {/* <Hobby pics = {['boilerroom.jpg','cfg.jpg','beyond.jpg',]} hobby = "Music" id_name= "music"></Hobby> */}
            </div>

        </div>
    )
}

export default About;