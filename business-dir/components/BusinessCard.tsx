import Link from "next/link";
export default function BusinessCard({ item } : { item: any }) {
  return (
    <div className="business-card">

      <img src={item.image} alt="shop" className="avatar" />

      <div className="card-info">

        
        <h3>{item.name}</h3>

        <p className="location">
          <i className="fa-solid fa-location-dot"></i>
          {item.location}
        </p>

        <p className="cat">
            {item.cat}
        </p>

        <div className="rating">
          <span className="rating-number">{item.rating}</span>
        </div>
      </div>
      <Link href={`/shop/${item.id}`}>
      <button className="details-btn">عرض</button>
      </Link>
    </div>
  );
  
}

