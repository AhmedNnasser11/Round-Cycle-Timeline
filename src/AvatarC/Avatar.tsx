/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react"
import "./style.css"
const Avatar = ({ item}: {item: any,}) => {
  return (
    <div
    className="avatar"
  >
    {item}
  </div>
  )
}
export default Avatar