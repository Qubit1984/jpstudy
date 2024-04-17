"use client";
import React from "react";
import { useRouter } from "next/navigation";

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
      <div
        className="container mx-auto my-auto w-full h-auto text-center"
        aria-hidden={true}
      >
        {adCode}
      </div>
    );
  }
}

class InFeedlgonly extends React.Component {
  renderAds() {
    if (window.innerWidth >= 1081) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
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
      typeof window !== "undefined" &&
      window.innerWidth >= 1081 && (
        <div
          className="container mx-auto my-auto w-full h-auto text-center"
          aria-hidden={true}
        >
          {adCode}
        </div>
      )
    );
  }
}
class InFeedsmonly extends React.Component {
  renderAds() {
    if (window.innerWidth >= 640) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
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
    if (typeof window === "undefined" || window.innerWidth < 640) {
      return <></>;
    }

    return (
      <div
        className="container mx-auto my-auto w-full h-auto text-center"
        aria-hidden={true}
      >
        {adCode}
      </div>
    );
  }
}
/* 
    return (
      typeof window !== "undefined" &&
      window.innerWidth >= 640 && (
        <div
          className="container mx-auto my-auto w-full h-full text-center"
          aria-hidden={true}
        >
          {adCode}
        </div>
      ) 
    );
  }
}*/
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
      height: "200px",
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
      height: "160px",
      textAlign: "center",
    }}
    data-ad-client="ca-pub-8741589583961176"
    data-ad-slot="1636141910"
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
      width: "auto",
      height: "auto",
      textAlign: "center",
    }}
    data-ad-format="fluid"
    data-ad-layout-key="-5h+dg-1i-2y+mc"
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
    data-ad-layout-key="-55+dg-1i-2y+mc"
    data-ad-client="ca-pub-8741589583961176"
    data-ad-slot="5730465444"
    data-full-width-responsive="true"
  />
);
const adrow = (
  <ins
    className="adsbygoogle"
    style={{ display: "block", width: "100%", height: "100%" }}
    data-ad-format="autorelaxed"
    data-ad-client="ca-pub-8741589583961176"
    data-ad-slot="6025144768"
    data-matched-content-rows-num="1"
    data-matched-content-columns-num="2"
    data-matched-content-ui-type="image_card_stacked"
    data-full-width-responsive="true"
  ></ins>
);
const ad1 = (
  <ins
    className="adsbygoogle ad1"
    style={{ width: "100%", height: "100%" }}
    data-ad-client="ca-pub-8741589583961176"
    data-ad-slot="9549456803"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
);
const adcol = (
  <ins
    className="adsbygoogle adslot_col"
    style={{ display: "block", width: "100%", height: "auto" }}
    data-ad-client="ca-pub-8741589583961176"
    data-ad-slot="2625989642"
    data-ad-format="autorelaxed"
    data-matched-content-ui-type="image_stacked"
    data-matched-content-rows-num="4"
    data-matched-content-columns-num="1"
    data-full-width-responsive="true"
  ></ins>
);
const adfang = (
  <ins
    className="adsbygoogle"
    style={{
      display: "block",
      width: "100%",
      height: "auto",
      textAlign: "center",
    }}
    data-ad-client="ca-pub-8741589583961176"
    data-ad-slot="7269077708"
    data-ad-format="auto"
    data-full-width-responsive="true"
  />
);
const adsider = (
  <ins
    className="adsbygoogle adsider"
    style={{
      width: "100%",
      height: "auto",
      textAlign: "center",
    }}
    data-ad-client="ca-pub-8741589583961176"
    data-ad-slot="4058291124"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
);
const adsider2 = (
  <ins
    className="adsbygoogle adsider"
    style={{
      width: "100%",
      height: "auto",
      textAlign: "center",
    }}
    data-ad-client="ca-pub-8741589583961176"
    data-ad-slot="9537315680"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
);
const adsider3 = (
  <ins
    className="adsbygoogle adsider"
    style={{
      width: "100%",
      height: "auto",
      textAlign: "center",
    }}
    data-ad-client="ca-pub-8741589583961176"
    data-ad-slot="2634863976"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
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
export const Myadrow = () => {
  const router = useRouter();
  return <InFeed adCode={adrow} router={router} />;
};
export const Myadtext = () => {
  const router = useRouter();
  return <InFeed adCode={adCodetext} router={router} />;
};
export const Myad1 = () => {
  const router = useRouter();
  return <InFeedsmonly adCode={ad1} router={router} />;
};
export const Myadfang = () => {
  const router = useRouter();
  return <InFeed adCode={adfang} router={router} />;
};

export const MyadUnitside = () => {
  const router = useRouter();
  return <InFeedlgonly adCode={adsider} router={router} />;
};
export const Myadsider2 = () => {
  const router = useRouter();
  return <InFeedlgonly adCode={adsider2} router={router} />;
};
export const Myadsider3 = () => {
  const router = useRouter();
  return <InFeedlgonly adCode={adsider3} router={router} />;
};
export const MyadUnitcol = () => {
  const router = useRouter();
  //return <InFeedAdBlack router={router} />;
  return <InFeed adCode={adcol} router={router} />;
};
