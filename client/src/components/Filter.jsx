import React from 'react'

const Filter = (props) => {
	return (
		<div className='flex justify-between mt-6 m-5'>
      {/* this works yay! */}
			<div>Products: {props.count}</div>

			<div className="filter-sort">
				Order By:{" "}
				<select value={props.sort} onChange={props.sortProducts}>
          <option>Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
			</div>
      <div className='filter-size'>
        Filter{" "}
        <select value={props.size} onChange={props.filterProducts}>
          <option value={""}>ALL</option>
          <option value={"XS"}>XS</option>
          <option value={"S"}>S</option>
          <option value={"M"}>M</option>
          <option value={"L"}>L</option>
          <option value={"XL"}>XL</option>
          <option value={"XXL"}>XXL</option>
        </select>
      </div>
		</div>
	)
}

export default Filter
