import Home from "./pages/Home"
import Root from "./components/Root"
import WhiteBelt from "./pages/WhiteBelt"
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
    </Route>
  )
)
const App = () => {
  return <RouterProvider router={router} />
}

export default App
