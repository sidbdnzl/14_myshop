import { Link } from "react-router-dom";

export default function ItemCard({ item, favorites, cart }) {
  const isFav = favorites?.has(item.id);

  const handleFavorite = (e) => {
    e.preventDefault();
    if (isFav) {
      favorites.remove(item.id);
    } else {
      favorites.add(item.id);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    cart.add(item.id);
  };

  return (
    <div className="item-card">
      <Link to={`/items/${item.id}`} className="item-card-link">
        <div className="item-card-image-box">
          <img src={item.image} alt={item.name} loading="lazy" />
          {item.status === "soldout" && (
            <span className="item-card-badge">SOLD OUT</span>
          )}
          <button
            type="button"
            className={`item-card-fav-btn ${isFav ? "is-active" : ""}`}
            onClick={handleFavorite}
            aria-label="お気に入り"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill={isFav ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>
        <div className="item-card-body">
          <h3 className="item-card-title">{item.name}</h3>
          <p className="item-card-price">¥{item.price?.toLocaleString()}</p>
        </div>
      </Link>
      <button
        type="button"
        className="item-card-add-btn"
        onClick={handleAddToCart}
        disabled={item.status === "soldout"}
      >
        {item.status === "soldout" ? "SOLD OUT" : "ADD TO CART"}
      </button>
    </div>
  );
}

