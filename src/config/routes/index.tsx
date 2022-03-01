import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../../App';
import Detailspage from '../../pages/details-page';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/details/:{id}" element={<Detailspage />} />
    </Routes>
  </Router>
);

export default AppRouter;
