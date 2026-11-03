const collections = [
  {
    title: 'Punjabi Suit Collection',
    items: [
      ['TraditionalPunjabiSuit.jpeg', 'Traditional Punjabi Suit'],
      ['PartyWearSuit.webp', 'Party Wear Suit'],
      ['DesignerSuit.webp', 'Designer Suit'],
    ],
  },
  {
    title: 'Neck Designs',
    items: [['BoatNeck.jpg', 'Boat Neck'], ['RoundNeck.jpg', 'Round Neck'], ['CollarNeck.jpg', 'Collar Neck']],
  },
  {
    title: 'Palazzo Designs',
    items: [['SimplePalazzo.jpg', 'Simple Palazzo'], ['PrintedPalazzo.jpg', 'Printed Palazzo'], ['PartyWearPalazzo.jpg', 'Party Wear Palazzo']],
  },
  {
    title: 'Salwar Designs',
    items: [['PatialaSalwar.jpg', 'Patiala Salwar'], ['DhotiSalwar.jpg', 'Dhoti Salwar'], ['ChuridarSalwar.jpg', 'Churidar Salwar']],
  },
  {
    title: 'Trending Suits',
    items: [['AnarkaliSuit.jpg', 'Anarkali Suit'], ['ShararaSuit.jpg', 'Sharara Suit'], ['HeavyPartyWear.jpg', 'Heavy Party Wear']],
  },
];

function Gallery() {
  return (
    <main>
      {collections.map(({ title, items }) => (
        <section key={title}>
          <h2 className="title">{title}</h2>
          <div className="gallery">
            {items.map(([image, name]) => (
              <div className="card" key={image}>
                <img src={`/images/${image}`} alt={name} />
                <h3>{name}</h3>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default Gallery;
