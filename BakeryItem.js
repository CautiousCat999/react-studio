// TODO: create a component that displays a single bakery item
export default function BakeryItem({name, desc, price, image, onClick}) {
	return (
		<div className="BakeryItem">
      <p><b>{name}</b></p>
      <p><i>{desc}</i></p>
      <p><img src = {image} height = "200"></img></p>
      <p>{price}</p>
      <button onClick={() => onClick(name)}>
        Add to Cart
      </button>
		</div>
	);
}
