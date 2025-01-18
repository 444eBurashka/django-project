import im1 from "../img/im1.png";
import im2 from "../img/im2.png";
import im3 from "../img/im3.png";

export default function Carousel() {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={im1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={im2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={im3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    )
}