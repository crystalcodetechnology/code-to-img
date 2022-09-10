import { atom } from "jotai";

export type ExprotSettings = {
  showWaterMark: boolean;
  renderScale: string;
  renderFormat: string;
};

export const initExportSettings: ExprotSettings = {
  showWaterMark: true,
  renderScale: "1x",
  renderFormat: "png",
};
export const exportSettingsAtom = atom<ExprotSettings>(initExportSettings);
