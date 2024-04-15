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
class Siderad extends React.Component {
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
          data-ad-slot="4058291124"
          data-ad-format="auto"
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
          data-matched-content-ui-type="image_stacked"
          data-matched-content-rows-num="4"
          data-matched-content-columns-num="1"
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
}

/* class InFeedRow extends React.Component {
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
} */

/* export const MyadUnit = () => {
  const router = useRouter();
  const [mode] = useThemeSwitch();
  return mode === "dark" ? (
    <InFeedAdBlack router={router} />
  ) : (
    <InFeedAdWhite router={router} />
  );
}; */

export const MyadUnitcol = () => {
  const router = useRouter();
  //return <InFeedAdBlack router={router} />;
  return <InFeedColwhite router={router} />;
};

/* export const MyadUnitrow = () => {
  const router = useRouter();
  return <InFeedRow router={router} />;
}; */
export const MyadUnitside = () => {
  const router = useRouter();
  return <Siderad router={router} />;
};

class InFeed extends React.Component {
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
    const { adCode } = this.props;

    return (
      <div className="container mx-auto my-auto text-center" aria-hidden={true}>
        {adCode}
      </div>
    );
  }
}
const adCode0 = (
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
  />
);
const adCode1 = (
  <ins
    className="adsbygoogle"
    style={{
      display: "block",
      width: "100%",
      height: "auto",
      textAlign: "center",
    }}
    data-ad-client="ca-pub-8741589583961176"
    data-ad-slot="3679017176"
    data-ad-layout="in-article"
    data-ad-format="fluid"
    data-full-width-responsive="true"
  />
);
const adCode2 = (
  <ins
    className="adsbygoogle"
    style={{
      display: "block",
      width: "100%",
      height: "auto",
      textAlign: "center",
    }}
    data-ad-client="ca-pub-8741589583961176"
    data-ad-slot="5632578317"
    data-ad-layout="in-article"
    data-ad-format="fluid"
    data-full-width-responsive="true"
  />
);
const adCode3 = (
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
  />
);
const adCodetext = (
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
  />
);
const adstream0 = (
  <ins
    className="adsbygoogle"
    style={{
      display: "block",
      width: "100%",
      height: "auto",
      textAlign: "center",
    }}
    data-ad-format="fluid"
    data-ad-layout-key="-6a+dg-1i-2y+mc"
    data-ad-client="ca-pub-8741589583961176"
    data-ad-slot="8231338416"
    data-full-width-responsive="true"
  />
);
const adstream = (
  <ins
    className="adsbygoogle"
    style={{
      display: "block",
      width: "100%",
      height: "auto",
      textAlign: "center",
    }}
    data-ad-format="fluid"
    data-ad-layout-key="-62+dg-1i-2y+mc"
    data-ad-client="ca-pub-8741589583961176"
    data-ad-slot="5730465444"
    data-full-width-responsive="true"
  />
);

export const MyadUnit = () => {
  const router = useRouter();
  return <InFeed adCode={adCode0} router={router} />;
};
export const MyadUnit1 = () => {
  const router = useRouter();
  return <InFeed adCode={adCode1} router={router} />;
};
export const MyadUnit2 = () => {
  const router = useRouter();
  return <InFeed adCode={adCode2} router={router} />;
};
export const Myadstream = () => {
  const router = useRouter();
  return <InFeed adCode={adstream} router={router} />;
};
export const Myadstream0 = () => {
  const router = useRouter();
  return <InFeed adCode={adstream0} router={router} />;
};
export const MyadUnittext = () => {
  const router = useRouter();
  return <InFeed adCode={adCode0} router={router} />;
};
