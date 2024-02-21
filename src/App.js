import Nav from "./components/Nav";
import Home from "./pages/Home";
import DugsiDayz from "./pages/DugsiDayz";
import ThatOldBlackMagic from "./pages/ThatOldBlackMagic";
import BluebeardIII from "./pages/BluebeardIII";
import AMidsummerNightsDreamHome from "./pages/AMidsummerNightsDreamHome";
import Endurance from "./pages/Endurance";
import AMidsummerNightsDreamHope from "./pages/AMidsummerNightsDreamHope";
import DemTimes from "./pages/DemTimes";
import MunaKnowsItAll from "./pages/MunaKnowsItAll";
import HomeProduction from "./pages/HomeProduction";
import Arawelo from "./pages/Arawelo";
import WildCherries from "./pages/WildCherries";
import TheLaramieProject from "./pages/TheLaramieProject";
import MysteriousBruises from "./pages/MysteriousBruises";
import DeathOfAHunter from "./pages/DeathOfAHunter";
import TheThreepennyOpera from "./pages/TheThreepennyOpera";
import Ongoing from "./pages/Ongoing";
import Kula from "./pages/Kula";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/dugsidayz" element={<DugsiDayz />} />
          <Route path="/thatoldblackmagic" element={<ThatOldBlackMagic />} />
          <Route path="/bluebeardiii" element={<BluebeardIII />} />
          <Route
            path="/amidsummernightsdreamhome"
            element={<AMidsummerNightsDreamHome />}
          />
          <Route path="/endurance" element={<Endurance />} />
          <Route
            path="/amidsummernightsdreamhope"
            element={<AMidsummerNightsDreamHope />}
          />
          <Route path="/demtimes" element={<DemTimes />} />
          <Route path="/munaknowsitall" element={<MunaKnowsItAll />} />
          <Route path="/homeproduction" element={<HomeProduction />} />
          <Route path="/arawelo" element={<Arawelo />} />
          <Route path="/wildcherries" element={<WildCherries />} />
          <Route path="/thelaramieproject" element={<TheLaramieProject />} />
          <Route path="/mysteriousbruises" element={<MysteriousBruises />} />
          <Route path="/deathofahunter" element={<DeathOfAHunter />} />
          <Route path="/thethreepennyopera" element={<TheThreepennyOpera />} />
          <Route path="/kula" element={<Kula />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </>
  );
};

export default App;
