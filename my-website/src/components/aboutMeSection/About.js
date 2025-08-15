import Hobby from "./Hobby.js"

function About() {

    return(
        <div>
            <div class = "d-flex justify-content-center">
                <div>
                    <h2 class = "text-center">About me</h2>
                    <p class = "text-center">Currently, working at Capital One in DC as a Software Engineer focusing on full stack development. I recently graduated from the University of Texas at Austin where I studied Neuroscience and programming. On top of that, I've spent most of my learning tinkering on a variety of programming projects and networking with other like-minded software engineers, and I'm always looking for new ways to expand my skillset!
</p>
                </div>

            </div>
            <div  class = "d-flex justify-content-center">
                <Hobby pics = {['snowboard.jpg','hike.jpg','miami.jpg', 'boilerroom.jpg','beyond.jpg']} hobby = "My Life" id_name = "life"></Hobby>
                {/* <Hobby pics = {['boilerroom.jpg','cfg.jpg','beyond.jpg',]} hobby = "Music" id_name= "music"></Hobby> */}
            </div>

        </div>
    )
}

export default About;