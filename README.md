# shenron

## What is this?

Code generator.

This is a [repository](https://github.com/akira-toriyama/shenron-demo) for
operation confirmation.

## Features

There are many libraries that generate code using `handlebars.js` and `ejs`.
However, readability is low. It is not possible to directly test or confirm
operation.

Below is an example of Ract, but it is difficult to read because of the many
tags. Syntax highlighting is also disabled.

It is difficult to produce because it is not possible to check directly.

```ejs
import React from 'react'

type Props = {

}

export const <%= h.changeCase.pascal(name) %>: React.FC<Props> = ({}) => {
  return (
    <>
        <h1><%= h.changeCase.pascal(name) %></h1>
    </>
  )
}
```

## Use

### Step.1

Create a file like this one.

`./tpl/fruits/fruits.html`

```html
<p> This is red fruits </p>
<p> This is green fruits </p>
```

`./generation.ts`

```ts
import { generation } from "https://deno.land/x/shenron/mod.ts";

await generation({
  path: {
    output: "./output",
    template: "./tpl/fruits",
  },
  replacements: [{
    before: "fruits",
    after: "apple",
  }],
});
```

### Step.2

Execute.

```bash
deno run --allow-run --allow-read --allow-write --allow-env --allow-sys ./generation.ts
```

### Finish

`./output/apple/apple.html`

```html
<p> This is red apple </p>
<p> This is green apple </p>
```

### furthermore

Another fruit can be used.

`after: "orange",`

```ts
import { generation } from "https://deno.land/x/shenron/mod.ts";

await generation({
  path: {
    output: "./output",
    template: "./tpl/fruits",
  },
  replacements: [{
    before: "fruits",
    after: "orange", // Change
  }],
});
```

## Notes

Please use alphabetic letters for `replacements` as much as possible.
