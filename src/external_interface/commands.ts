import { zx } from "../../deps.ts";

export const prepare = (p: {
  dir: {
    template: string;
  };
}) => {
  const workingDir = zx.tmpdir();
  zx.$.sync`cp -r ${p.dir.template} ${workingDir}`;
  zx.cd(workingDir);
};

type Replacement = {
  before: string;
  after: string;
};
export const replace = (p: {
  replacements: [Replacement, ...Replacement[]];
}) => {
  p.replacements.forEach((v) => {
    zx.$
      .sync`f2 -f '${v.before}' -r '${v.after}' --recursive --include-dir --exec`;

    p.replacements.forEach((v) =>
      zx.$
        .sync`find ./ -type f | LC_ALL=C xargs sed -i "" "s/${v.before}/${v.after}/g"`
    );
  });
};

export const output = (p: {
  dir: {
    output: string;
  };
}) => {
  zx.$.sync`mkdir -p ${p.dir.output}`;
  zx.$.sync`cp -r . ${p.dir.output}`;
};
