import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { DataContextProvider } from '../context/dataContext';
import Home from '../pages/Home';

export const RoutesContent = () => (
    <BrowserRouter>
        {/* <DataContextProvider> */}
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
        {/* </DataContextProvider> */}
    </BrowserRouter>
);
