// deno run --allow-run --allow-read --allow-write --allow-env --allow-sys ./demo/generation.ts
import { generation } from "../mod.ts";

generation({
  path: {
    output: "./output",
    template: "./demo/tpl/fruits",
  },
  replacements: [{
    before: "__substitution__",
    after: "cute",
  }, {
    before: "__Substitution__",
    after: "Cute",
  }],
});
