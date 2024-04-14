"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
class InFeedAdBlack extends React.Component {
  renderAds() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  componentDidMount() {
    this.renderAds();
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.asPath !== prevProps.router.asPath) {
      this.renderAds();
    }
  }

  render() {
    return (
      <div className="container mx-auto text-center" aria-hidden={true}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", textAlign: "center" }}
          data-ad-client="ca-pub-8741589583961176"
          data-ad-slot="6776486639"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
}
class InFeedAdWhite extends React.Component {
  renderAds() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  componentDidMount() {
    this.renderAds();
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.asPath !== prevProps.router.asPath) {
      this.renderAds();
    }
  }

  render() {
    return (
      <div className="container mx-auto text-center" aria-hidden={true}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", textAlign: "center" }}
          data-ad-client="ca-pub-8741589583961176"
          data-ad-slot="3743129188"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
}

const MyadUnit = () => {
  const router = useRouter();
  const [mode, setMode] = useThemeSwitch();

  return mode === "dark" ? (
    <InFeedAdBlack router={router} />
  ) : (
    <InFeedAdWhite router={router} />
  );
};

export default MyadUnit;
