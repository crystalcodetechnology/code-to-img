export const GA_TRACKING_ID = "G-DPNQZEQHZ6";

const isProd = process.env.NODE_ENV === "production";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  if (!isProd) return;
  gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (gTagEvent: GTagEvent): void => {
  if (!isProd) return;
  const { action, category, label, value } = gTagEvent;
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
