import * as commands from "../external_interface/commands.ts";

type GenerateP =
  & Parameters<typeof commands.prepare>[0]
  & Parameters<typeof commands.replace>[0]
  & Parameters<typeof commands.output>[0];

type Generate = (
  p: GenerateP,
) => Promise<void>;
export const generate: Generate = async (p) => {
  await commands.prepare(p);
  await commands.replace(p);
  await commands.output(p);
};
