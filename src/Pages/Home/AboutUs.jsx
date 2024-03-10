export default function AboutUs() {
  return (
    <section id="AboutUs" className="about--section">
      <div className="about--section--img">
        <img src="https://c.ndtvimg.com/2022-02/7pusgugg_car_625x300_03_February_22.jpg" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          
          <h1 className="about-heading">Details</h1>
          <ul>
            <li>SpeedTech Showdown will be a full day event exclusively for freshers.</li>
            <li>First 50 teams will join the race </li>
            <li>Date: 11th March 2024</li>
            <br/>
            <li>There will be 2 slots.
              <br/>
              <br/>
              <ul className="timings">
                <li>Slot 1 in the morning</li>
                <li>Slot 2 during the evening</li>
              </ul>
            </li>
            <br/>
            <li>Prizes:
              <ul className="prizes">
                <br/>
                <li>Winner team will be awarded with Cash Prize + upcoming event Merchandise + brand new rc car</li>
                <li>Runner up team will be awarded with upcoming event and a brand new rc car</li>
                <li>Second Runner up team will be awarded with upcoming event merchandise</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
