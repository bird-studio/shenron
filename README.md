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

### Step.0

```bash
brew install f2
```

### Step.1

Create a file like this one.

`./tpl/fruits/fruits.html`

```html
<p> This is red fruits </p>
<p> This is green fruits </p>
```

`./generation.ts`

```
import { generate } from "https://deno.land/x/shenron/mod.ts";

generate({
  dir: {
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

## Notes

Please use alphabetic letters for `replacements` as much as possible.
