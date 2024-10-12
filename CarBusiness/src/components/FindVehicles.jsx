import { SectionTitle } from "./shared/title";

export const FindVehicles = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 39, width: "100%" }}>
          <SectionTitle>Find vehicles near you</SectionTitle>
        </div>
        <img src="Img/map.png" style={{width: "100%"}} alt="..." />
      </div>
    </div>
  );
};
