// deno run --allow-run --allow-read --allow-write --allow-env --allow-sys "https://deno.land/x/shenron/demo/generation.ts?source"
// deno run --allow-run --allow-read --allow-write --allow-env --allow-sys ./demo/generation.ts

import { generation } from "../mod.ts";

generation({
  path: {
    output: "./output",
    template: "./demo/tpl/fruits",
  },
  replacements: [{
    before: "fruits",
    after: "apple",
  }, {
    before: "Fruits",
    after: "Apple",
  }],
});

// どのテンプレートを使いますか？
// What template will you use?

// どこに作りますか？
// Where do you want to make it?
//

// rm -rf output && deno run --allow-run --allow-read --allow-write --allow-env --allow-sys ./demo/generation.ts
// tree output/ && find ./output -name "*.html" | xargs cat
// find ./output -name "*.html" | xargs cat

// myTpl が邪魔
