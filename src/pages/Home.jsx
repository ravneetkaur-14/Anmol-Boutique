import { Link } from 'react-router-dom';

const services = [
  ['👗', 'Punjabi Suits', 'Beautiful Punjabi suits with elegant stitching and trendy designs.'],
  ['✨', 'Neck Designs', 'Stylish and latest neck patterns for boutique outfits.'],
  ['💃', 'Palazzo Designs', 'Modern trendy palazzo stitching with premium fitting.'],
  ['🌸', 'Patiala Salwars', 'Traditional Patiala salwars with designer boutique touch.'],
  ['👑', 'Bridal Wear', 'Luxury bridal stitching with heavy designer finishing.'],
  ['🔥', 'Trending Suits', 'Latest fashion suits for parties and special occasions.'],
];

function Home() {
  return (
    <main>
      <section className="hero">
        <img src="/images/banner.jpg.jpeg" alt="Anmol Boutique collection" />
        <div className="hero-overlay">
          <h2>Designer Punjabi Suits &amp; Boutique Stitching</h2>
          <p>Punjabi Suits • Neck Designs • Palazzo • Salwars</p>
          <Link to="/gallery">
            <button type="button">Explore Collection</button>
          </Link>
        </div>
      </section>

      <section className="about">
        <div className="about-content">
          <h2>✨ Welcome To Anmol Boutique ✨</h2>
          <p>
            We create stylish Punjabi boutique outfits with premium stitching,
            modern fashion trends and elegant designer finishing.
          </p>
        </div>
      </section>

      <section className="services">
        <h2 className="title">Our Special Services</h2>
        <div className="service-container">
          {services.map(([icon, title, description]) => (
            <div className="service-box" key={title}>
              <div className="service-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-preview">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-item"><h3>👩 Tailor</h3><p>Anmolpreet Kaur</p></div>
          <div className="contact-item"><h3>📞 Phone</h3><p>7986726268</p></div>
          <div className="contact-item"><h3>📍 Address</h3><p>104 Flat Number, Nirwana Greens 4, Kharar, Mohali</p></div>
          <div className="contact-item"><h3>📮 Pincode</h3><p>140301</p></div>
        </div>
      </section>
    </main>
  );
}

export default Home;
