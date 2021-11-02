//Component3


import React from "react"; 

function Component3() {
    let date = new Date()
  return (
    <div>
      <p  >Asma hamad alnaser</p>
       <p>{date.toLocaleDateString()}</p>
    </div>
  )
}
export default Component3