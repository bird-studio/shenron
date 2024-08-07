// deno run --allow-run --allow-read --allow-write --allow-env --allow-sys ./demo/generation.ts
import { generate } from "../mod.ts";

generate({
  dir: {
    output: `${Deno.cwd()}/output`,
    template: `${Deno.cwd()}/demo/tpl/fruits`,
  },
  replacements: [{
    before: "fruits",
    after: "apple",
  }, {
    before: "Fruits",
    after: "Apple",
  }],
});
