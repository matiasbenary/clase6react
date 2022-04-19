import './Card.css';

const Card = ({ product }) => {
  const { title, type, price, rating, img, isAvailable, onSale } = product;
  return (
    <div className="card">
      <div className="card__header">
        <img className="card__img" src={img} alt="" />
      </div>
      <div className="card__body">
        <div className="card__body__left">
          <div className="card__title">
            <h2 className={!isAvailable && 'text--disabled'}>{title}</h2>
            {onSale && <span className="badges">On Sale</span>}
          </div>
          <p className="card__text"> type: {type}</p>
          <p className="card__text"> rating: {rating}</p>
        </div>
        <div className="card__body__right">
          <p className="card__price">${price}</p>
        </div>
      </div>
      <div className="card__footer">
        <button
          type="button"
          className={`btn ${isAvailable || 'btn--disabled'}`}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;
