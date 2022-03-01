import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../components';
import { Homepage } from '../../pages';
import Detailspage from '../../pages/details-page';

const AppRouter = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/details/:{id}" element={<Detailspage />} />
    </Routes>
  </Router>
);

export default AppRouter;
