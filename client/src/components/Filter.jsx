import React from 'react'

const Filter = (props) => {
	return (
		<div>
			<div>{props.countInStock}</div>
			<div className="filter-sort">
				Order{" "}
				<select value={props.sort} onChange={props.sortProducts}>
          <option>Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
			</div>
      <div className='filter-size'>
        Filter{" "}
        <select value={props.sizes} onChange={props.filterProducts}>
          <option value={""}>ALL</option>
          <option value={"XS"}></option>
          <option value={"S"}></option>
          <option value={"M"}></option>
          <option value={"L"}></option>
          <option value={"XL"}></option>
          <option value={"XXL"}></option>
        </select>
      </div>
		</div>
	)
}

export default Filter
