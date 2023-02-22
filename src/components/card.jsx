export default function Card() {
  const cardimages = ["/cardimage1.png", "cardimage1.png"];

  return (
    <div className="container">
      <div className="card">
        {cardimages.map((card) => (
          <img src={card}></img>
        ))}
      </div>
    </div>
  );
}
