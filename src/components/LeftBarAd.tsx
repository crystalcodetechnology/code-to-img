import { useEffect } from "react";

const LeftBarAd = () => {
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
        width: 136,
        height: 620,
      }}
      data-ad-client="ca-pub-7322439099058988"
      data-ad-slot="5550807320"
    ></ins>
  );
};

export default LeftBarAd;
