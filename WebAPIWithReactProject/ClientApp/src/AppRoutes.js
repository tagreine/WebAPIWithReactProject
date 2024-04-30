import { Home } from "./components/Home";
import FetchEmployee from "./components/FetchEmployee";
import WanderersList from "./components/WanderersList";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/fetch-employees',
    element: <FetchEmployee />
  },
  {
    path: '/scroll-of-noteworthy-wanderers',
    element: <WanderersList />
  },
  {
    /*
    path: '/counter',
    element: <Counter />
    */
  },
  {
    /*
    path: '/fetch-data',
    element: <FetchData />
    */
  }
];

export default AppRoutes;
