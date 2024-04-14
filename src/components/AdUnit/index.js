"use client";
import GoogleAdUnit from "nextjs13_google_adsense";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
const MyadUnit = () => {
  const [mode, setMode] = useThemeSwitch();
  return (
    <GoogleAdUnit>
      {mode === "dark" ? <InFeedAdBlack /> : <InFeedAdWhite />}
    </GoogleAdUnit>
  );
};
const InFeedAdBlack = () => {
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "100%", textAlign: "center" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-8741589583961176"
      data-ad-slot="3743129188"
    ></ins>
  );
};
const InFeedAdWhite = () => {
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "100%", textAlign: "center" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-8741589583961176"
      data-ad-slot="3743129188"
    ></ins>
  );
};
export default MyadUnit;
