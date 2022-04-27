import React, { Component } from 'react'
import Select from 'react-select'



const MySelect = props => {
  const { options }=props
  return (
    <div className='' style={{ fontSize: 14 }}>
      <Select options={options} theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary50: '#B2D4FF',
          // primary: 'black',
        },
      })} />
    </div>
  )

}

export default MySelect