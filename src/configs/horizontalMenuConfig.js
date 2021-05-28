import React from "react"
import * as Icon from "react-feather"
let horizontalMenuConfig  = [
    {
      id: "analyticsDash",
      title: "Dashboard",
      type: "item",
      icon: <Icon.Home size={16} />,
      navLink: "/Dashboard",
      permissions: ["admin", "editor"]
    }
   
  ]


export default horizontalMenuConfig
