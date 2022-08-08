import { BrowserRouter as Router } from "react-router-dom";
import ApplicationRoutes from "./Routes/ApplicationRoutes";

function App() {
  return (
    <Router>
      <ApplicationRoutes />
    </Router>
  );
}

export default App;
