import { useEffect } from "react";

const TopBarAd = () => {
  useEffect(() => {
    try {
      const adsbygoogle = (window as any).adsbygoogle;
      adsbygoogle.push({});
    } catch (e) {
      console.log("Failed to push ad", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "inline-block",
        width: 620,
        height: 128,
      }}
      data-ad-client="ca-pub-7322439099058988"
      data-ad-slot="4221413788"
    ></ins>
  );
};

export default TopBarAd;
