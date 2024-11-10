import 'react-tabs/style/react-tabs.css';
import Props from './tabs/Props/Props.jsx';
import FeedBack from './tabs/FeedBack/FeedBack.jsx';
import { Points } from './tabs/Points/Points.jsx';
import { Tasks } from './tabs/Tasks/Tasks.jsx';
import { PhoneNumbers } from './tabs/PhoneNumbers/PhoneNumbers.jsx';
import { Photos } from './tabs/Photos/Photos.jsx';
import { PixabeyPicturesFormSearch } from './tabs/PixabeyPicturesFormSearch/PixabeyPicturesFormSearch.jsx';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Navigation } from './components/Navigation/Navigation.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { Countries } from './pages/Countries.jsx';
import { CountryInfo } from './pages/CountryInfo.jsx';
import { SearchCountries } from './components/SearchCountries/SearchCountries.jsx';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pixabey" element={<PixabeyPicturesFormSearch />} />
        <Route path="photos" element={<Photos />} />
        <Route path="phoneNumbers" element={<PhoneNumbers />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="feedBack" element={<FeedBack />} />
        <Route path="points" element={<Points />} />
        <Route path="props" element={<Props />} />
        <Route path="countries" element={<Countries />} />
        <Route path="searchCountries" element={<SearchCountries />} />
        <Route path="countries/:countryId" element={<CountryInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
