import React from 'react'
import "./index.css";

const ValuePairCard = (props) => {
    const { label,value } =props
  return (
      <div className={`value-pair-wrapper`}>
          <h4 className={`label-color`}>{label}</h4>
          <h3 className={`value-color`}>{value}</h3>
    </div>
  )
}

export default ValuePairCard