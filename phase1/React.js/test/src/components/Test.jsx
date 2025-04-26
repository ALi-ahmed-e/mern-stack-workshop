import React, { useEffect } from 'react'

const Test = (data) => {



  return (
    <div>
      {data.arr.map((el, i) => <div className='el-div' key={i}>
        {el}

      </div>)}

    </div>
  )
}

export default Test