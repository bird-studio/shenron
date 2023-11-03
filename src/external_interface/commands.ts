// ```bash
// mkdir -p ./some/foo/bar
// cp -r ./xxx ./some/foo/bar/.

// find ./some/foo/bar -type f | LC_ALL=C xargs sed -i "" 's/__target__/new/g;s/__Target__/New/g'
// find ./some/foo/bar -depth -iname '*__target__*' -execdir sh -c 'mv -n "$1" $(echo "$1" | sed "s/__target__/new/;s/__Target__/New/;")' -- {} \;
// ```

import { $ } from "npm:zx";

export const duplicateTpl = (p: {
  path: {
    output: string;
    template: string;
  };
}) => $`mkdir -p ${p.path.output} && cp -r ${p.path.template} ${p.path.output}`;

export const replaceContents = (p: {
  path: {
    output: string;
  };
  replacements: Array<{
    before: string;
    after: string;
  }>;
}) =>
  Promise.all(
    p.replacements.map((v) =>
      $`find ${p.path.output} -type f | LC_ALL=C xargs sed -i "" 's/${v.before}/${v.after}/g'`
    ),
  );

export const renameDir = (p: {
  path: {
    output: string;
  };
  replacements: Array<{
    before: string;
    after: string;
  }>;
}) =>
  Promise.all(
    p.replacements.map((v) =>
      // TODO 大文字 小文字
      $`find ${p.path.output} -depth -iname '*${v.before}*' -execdir sh -c 'mv -n "$1" $(echo "$1" | sed "s/${v.before}/${v.after}/;")' -- {} \\;`
    ),
  );
