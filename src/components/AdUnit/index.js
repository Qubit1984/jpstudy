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
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            textAlign: "center",
          }}
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
      <div className="container mx-auto my-auto text-center" aria-hidden={true}>
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            textAlign: "center",
          }}
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
/* class InFeedColblack extends React.Component {
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
      <div className="container mx-auto my-auto text-center" aria-hidden={true}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "auto" }}
          data-ad-client="ca-pub-8741589583961176"
          data-ad-slot="2123426769"
          data-ad-format="autorelaxed"
          data-matched-content-rows-num="5"
          data-matched-content-columns-num="1"
          data-matched-content-ui-type="image_stacked"
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
} */
class InFeedColwhite extends React.Component {
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
      <div className="container mx-auto my-auto text-center" aria-hidden={true}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "auto" }}
          data-ad-client="ca-pub-8741589583961176"
          data-ad-slot="2625989642"
          data-ad-format="autorelaxed"
          //  data-matched-content-rows-num="5"
          //  data-matched-content-columns-num="1"
          //  data-matched-content-ui-type="image_stacked"
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
}

class InFeedRow extends React.Component {
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
      <div className="container mx-auto h-full text-center" aria-hidden={true}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "100%" }}
          data-ad-format="autorelaxed"
          data-ad-client="ca-pub-8741589583961176"
          data-ad-slot="6025144768"
          data-matched-content-rows-num="2,2"
          data-matched-content-columns-num="1,3"
          data-matched-content-ui-type="image_stacked,image_stacked"
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
}

export const MyadUnit = () => {
  const router = useRouter();
  const [mode] = useThemeSwitch();
  return mode === "dark" ? (
    <InFeedAdBlack router={router} />
  ) : (
    <InFeedAdWhite router={router} />
  );
};

export const MyadUnitcol = () => {
  const router = useRouter();
  //return <InFeedAdBlack router={router} />;
  return <InFeedColwhite router={router} />;
};

export const MyadUnitrow = () => {
  const router = useRouter();
  return <InFeedRow router={router} />;
};
