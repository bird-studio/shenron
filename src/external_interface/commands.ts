import { zx } from "../../deps.ts";

export const duplicateTpl = (p: {
  path: {
    output: string;
    template: string;
  };
}) =>
  zx`mkdir -p ${p.path.output} && cp -r ${p.path.template} ${p.path.output}`;

export const replaceContents = async (p: {
  path: {
    output: string;
  };
  replacements: Array<{
    before: string;
    after: string;
  }>;
}) => {
  for (const v of p.replacements) {
    await zx`find ${p.path.output} -type f | LC_ALL=C xargs sed -i "" "s/${v.before}/${v.after}/g"`;
  }
  return Promise.resolve();
};

export const renameDir = async (p: {
  path: {
    output: string;
  };
  replacements: Array<{
    before: string;
    after: string;
  }>;
}) => {
  for (const v of p.replacements) {
    await zx`find ${p.path.output} -depth -name '*${v.before}*' -execdir sh -c 'mv -n "$1" $(echo "$1" | sed "s/${v.before}/${v.after}/;")' -- {} \\;`;
  }
  return Promise.resolve();
};
