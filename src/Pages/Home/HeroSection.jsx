export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Team SAE NIT DGP announces</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">"SpeedTech Showdown"</span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
          Hello freshers, Team SAE NIT DGP brings an opportunity to delve inside the childhood dream of participating in a Remote Controlled Car Race Showdown. Join us in the one-day event where we explore the thrill and the fun of reliving the RC era of our lives. 

          <br />
            <br />Let's Dive, Drive and Dominate<br />
            Register Now....
          </p>
        </div>
        <button className="btn btn-primary"><a class="button-anchor" href="/join">Register</a></button>
      </div>
      <div className="hero--section--img">
        <img src="https://www.horizonhobby.com/on/demandware.static/-/Sites-horizon-us-Library/default/dwd5ad6ca6/blog/blog-cars-trucks/425367-fast-cars/LOS03027V2-630x340.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
