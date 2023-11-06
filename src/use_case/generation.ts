import * as commands from "../external_interface/commands.ts";

type Generate = (
  p:
    & Parameters<typeof commands.duplicateTpl>[0]
    & Parameters<typeof commands.replaceContents>[0],
) => Promise<void>;
export const generate: Generate = async (p) => {
  await commands.duplicateTpl(p);
  await commands.replaceContents(p);
  await commands.renameDir(p);
};
