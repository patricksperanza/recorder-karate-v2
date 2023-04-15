import { useState } from "react"
import { Outlet } from "react-router-dom"

const Root = () => {
  const [sidebar, setSidebar] = useState(false)

  return (
    <div>
      <Outlet context={[sidebar, setSidebar]} />
    </div>
  )
}

export default Root
