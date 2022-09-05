import { Route, Routes, Navigate } from "react-router-dom";
import Soda from './Soda'
import Chips from './Chips'
import Sardines from './Sardines'
import VendingMachine from './VendingMachine'

function RoutesList() {
    return (
        <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/soda" element={<Soda />} />
            <Route path="/chips" element={<Chips />} />
            <Route path="/sardines" element={<Sardines />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default RoutesList;