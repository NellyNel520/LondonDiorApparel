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
        <button onClick={props.addToCartHandler} className='justify-center rounded-md bg-[#e57626] py-2 px-3 text-sm font-semibold text-white'>Add to cart</button>
			</div>
			
		</div>
		</div>
	);
};
// onclick => view more details

export default ProductCard;
