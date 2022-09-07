import { useEffect } from "react";

const RightAdUnit = () => {
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
        width: 220,
        height: 300,
      }}
      data-ad-client="ca-pub-7322439099058988"
      data-ad-slot="6932133763"
    ></ins>
  );
};

export default RightAdUnit;
