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
      <div className="container mx-auto text-center" aria-hidden={true}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "728px", height: "90px" }}
          data-ad-client="ca-pub-8741589583961176"
          data-ad-slot="9073979933"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
}
export const MyadUnit = () => {
  const router = useRouter();
  const [mode] = useThemeSwitch();
  console.log("mode", mode);
  return <InFeedAdBlack router={router} />;
  /*  return mode === "light" ? (
    <InFeedAdWhite router={router} />
  ) : (
    <InFeedAdBlack router={router} />
  ); */
};

export const MyadUnitrow = () => {
  const router = useRouter();
  return <InFeedRow router={router} />;
};
{
  /* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8741589583961176"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-8741589583961176"
     data-ad-slot="2123426769"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> */
}
