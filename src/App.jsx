import Home from "./pages/Home"
import Root from "./components/Root"
import WhiteBelt from "./pages/WhiteBelt"
import YellowBelt from "./pages/YellowBelt"
import OrangeBelt from "./pages/OrangeBelt"
import GreenBelt from "./pages/GreenBelt"
import PurpleBelt from "./pages/PurpleBelt"
import BlueBelt from "./pages/BlueBelt"
import RedBelt from "./pages/RedBelt"
import BrownBelt from "./pages/BrownBelt"
import BlackBelt from "./pages/BlackBelt"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/white" element={<WhiteBelt />} />
      <Route path="/yellow" element={<YellowBelt />} />
      <Route path="/orange" element={<OrangeBelt />} />
      <Route path="/green" element={<GreenBelt />} />
      <Route path="/purple" element={<PurpleBelt />} />
      <Route path="/blue" element={<BlueBelt />} />
      <Route path="/red" element={<RedBelt />} />
      <Route path="/brown" element={<BrownBelt />} />
      <Route path="/black" element={<BlackBelt />} />
    </Route>
  )
)
const App = () => {
  return <RouterProvider router={router} />
}

export default App
