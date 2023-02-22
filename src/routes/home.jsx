import Card from "../components/card";

export default function Home() {
  return (
    <div className="homecontainer">
      <div className="welcomerow">
        <div className="heading">
          <p>Welcome Back!</p>
          <p className="bold">Adam Smith</p>
        </div>
        <div className="picture">
          <img src="/model.png"></img>
        </div>
      </div>
      <div className="homehero">
        <div className="hero-left">
          <h2>Trade in and save</h2>
          <p>Enjoy great upfront saving</p>
          <button className="learnbtn">Learn More</button>
        </div>
        <div className="hero-right">
          <div className="heroimage">
            <img src="/homeheropic.png"></img>
          </div>
        </div>
      </div>
      <div className="salesrow">
        <h2>Shocking sale</h2>
        <h2 className="viewall">View All</h2>
      </div>
      <Card />
      <div className="ctarow">
        <div className="ctaleft">
          <h3>Get RM $10 off</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            soluta.
          </p>
          <button className="ctabtn">Buy Now</button>
        </div>
        <div className="ctaright">
          <img src="ctaimage2.jpg"></img>
        </div>
      </div>
      <div className="footer">
        <i class="fa-solid fa-house fa-lg"></i>
        <i class="fa-solid fa-cart-shopping fa-lg"></i>
        <i class="fa-solid fa-bell fa-lg"></i>
        <i class="fa-solid fa-user fa-lg"></i>
      </div>
    </div>
  );
}
