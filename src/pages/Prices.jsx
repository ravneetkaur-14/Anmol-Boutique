const prices = [
  ['Punjabi Suit Stitching', 'Elegant daily wear stitching', '₹700'],
  ['Designer Suit', 'Premium designer finish', '₹1500'],
  ['Lehenga Stitching', 'Wedding & party special', '₹3500'],
  ['Blouse Stitching', 'Custom stylish blouse', '₹900'],
  ['Bridal Dress Stitching', 'Luxury bridal collection', '₹8000'],
  ['Palazzo Suit Stitching', 'Modern trendy stitching', '₹1200'],
];

function Prices() {
  return (
    <main>
      <section className="price-hero">
        <div className="price-overlay">
          <h2>Premium Stitching Services</h2>
          <p>Elegant Designs • Perfect Fitting • Boutique Finish</p>
        </div>
      </section>
      <section className="price-section">
        <h2 className="title">Boutique Stitching Price List</h2>
        <div className="table-container">
          <table className="price-table">
            <thead><tr><th>Service</th><th>Description</th><th>Price</th></tr></thead>
            <tbody>
              {prices.map(([service, description, price]) => (
                <tr key={service}><td>{service}</td><td>{description}</td><td>{price}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Prices;
