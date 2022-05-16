import { MapView } from "../components/index";
import { BtnMyLocation, ReactLogo, SearchBar } from "../components/";

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <div>
        <BtnMyLocation />
        <SearchBar />
      </div>
      <ReactLogo />
    </div>
  );
};
