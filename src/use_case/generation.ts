import * as commands from "../external_interface/commands.ts";

type Generation = (
  p:
    & Parameters<typeof commands.duplicateTpl>[0]
    & Parameters<typeof commands.replaceContents>[0],
) => Promise<void>;
export const generation: Generation = async (p) => {
  await commands.duplicateTpl(p);
  await commands.replaceContents(p);
  await commands.renameDir(p);
};

// どのテンプレートを使いますか？
// What template will you use?

// どこに作りますか？
// Where do you want to make it?
