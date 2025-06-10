
function Home() {
    //FIXME, IMG tag not working
    return(
        <div class = "container">
            <div class = "row d-flex flex-row align-items-center">
                <div class = "col">
                    <h1 class = "text-center">Chase Pham</h1>
                    <h2 class = "text-center">Software Engineer at Capital One</h2>
                    <ul class = "d-flex list-unstyled justify-content-center">
                        <li class = "p-2">Linkedin link</li>
                        <li class = "p-2">Github Link</li>
                        <li class = "p-2">Email Link</li>
                        <li class = "p-2">Leetcode Link</li>
                    </ul>
                </div>
                <div class = "col d-flex justify-content-center">
                    <img class = "img-fluid" src = "images/gradimg.png" alt = "gradImGpng" width = "60%" height = "60%"/>
                </div>                
            </div>

        </div>
    )
}


export default Home;