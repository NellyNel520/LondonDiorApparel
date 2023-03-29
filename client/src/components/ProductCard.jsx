import Rating from './Rating';

const ProductCard = (props) => {

	return (
		<div className="container-grid">
		<div className="card product-card" key={props.key} onClick={props.onClick}>
			<div className="img-wrapper">
				<img alt="product img" src={props.image} />
			</div>
			<div className="info-wrapper flex-col">
				<h4>{props.name}</h4>
        <Rating rating={props.rating} numReviews={props.numReviews} />
				<h5>${props.price}</h5>
			</div>
			
		</div>
		</div>
	);
};
// onclick => view more details

export default ProductCard;
