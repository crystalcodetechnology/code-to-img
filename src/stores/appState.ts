import { atom } from "jotai";
import { gradients } from "../data/gradients";

export type AppState = {
  filename: string;
  title: string;
  code: string;
  darkMode: boolean;
  dropShadow: boolean;
  showTitle: boolean;
  bgBlur: boolean;
  showWaterMark: boolean;
  fontSize: string;
  padding: string;
  language: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundThumb?: string;
  showLineNumber: boolean;
  renderScale: string;
  renderFormat: string;
};

const DEFAULT_JS_VALUE = `function hello() {
  console.log("Hello, World!");
}

hello();`;

export const initAppState: AppState = {
  filename: "Untitled",
  darkMode: true,
  dropShadow: true,
  showTitle: false,
  showLineNumber: true,
  showWaterMark: true,
  bgBlur: true,
  fontSize: "16px",
  language: "javascript",
  padding: "36px",
  title: "Title Text",
  code: DEFAULT_JS_VALUE,
  backgroundImage: gradients[0].gradient,
  backgroundThumb: gradients[0].gradient,
  backgroundColor: gradients[0].color,
  renderScale: "1x",
  renderFormat: "png",
};

export const appStateAtom = atom<AppState>(initAppState);
