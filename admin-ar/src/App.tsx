import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./CompositeComponents/Layout/Layout";
import AddModelPage from "./Pages/AddModelPage/AddModelPage";
import {Promo} from "./Pages/Promo/Promo";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={"/addModel"} element={<AddModelPage />} />
                    <Route path={"*"} element={<Promo />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
