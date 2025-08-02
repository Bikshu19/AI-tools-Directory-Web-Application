import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cardspage from './pages/cardspage';
import Samplecardpage from './pages/samplecardpage';
import { StoreProvider } from './store';
import Viewdetailpage from './pages/viewdetailpage';
import Ainewspage from './pages/Ainewspage';
import Apispage from './pages/apispage';
import Compareai from './pages/comapreai';

function App() {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/category' element={<Cardspage />} />
                    <Route path='/cat' element={<Samplecardpage />} />
                    <Route path='/detail' element={<Viewdetailpage/>}/>
                    <Route path='/ainews' element={<Ainewspage/>}/>
                    <Route path='/apis' element={<Apispage/>}/>
                    <Route path='/compare' element={<Compareai/>}/>
                </Routes>
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;
