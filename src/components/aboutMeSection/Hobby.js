
function Hobby(props) {
        let list_items = props.pics.map((pic, i) => {
            let src = pic;
            return (
                <img
                    key={i}
                    className="img-fluid d-block w-100"
                    src={src}
                    alt="gradImgPng"
                    width="60%"
                    height="60%"
                />
            );
        });
    
        // Step 2: Wrap each image in a carousel-item div
        let carouselItems = list_items.map((img, i) => (
            <div
                className={`carousel-item${i === 0 ? " active" : ""}`}
                key={i}
            >
                {img}
            </div>
        ));
    
    return (
        
        <div>
<div id={props.id_name} style= {{maxWidth: "500px"}}class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    {carouselItems}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target={"#"+ props.id_name} data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target={"#"+ props.id_name} data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>
    )
}

export default Hobby