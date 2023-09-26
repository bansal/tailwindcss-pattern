# tailwindcss-pattern

Tailwindcss plugin to add beautiful background patterns.

![Tailwindcss Patterns](https://i.ibb.co/Gt1yr58/preview.png)

## Features

- 11 background patterns.
- Use existing tailwind colors and extend with new colors.
- Change pattern on hover.
- responsive variants.
- dark mode support.

## Installation

```bash
npm install -D tailwindcss-pattern
```

Add the plugin to your tailwind.config.js file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-pattern'),
    // ...
    ],
};
```

## Usage

Minimal example:

```html
<div class="pattern-grid"></div>
```

Example with tailwind colors:

```html
<div class="bg-red-300 pattern-grid pattern-color-red-500"></div>
```

Change pattern size:
Predefined sizes: are `sm` `md` `lg` and `xl` and you can use custom sizes like `2rem` `12px` etc.

```html
<div class="pattern-grid-lg"></div>
<div class="pattern-checks-[2rem]"></div>
<div class="pattern-dots-[12px]"></div>
```

Try on Playground: [Tailwindcss Patterns Playground](https://links.bansal.io/patterns-playground)

## Pattern Classes

| Class |
|--- |
|pattern-checks|
|pattern-grid|
|pattern-dots|
|pattern-cross-dots|
|pattern-diagonal-lines|
|pattern-horizontal-lines|
|pattern-vertical-lines|
|pattern-diagonal-stripes|
|pattern-horizontal-stripes|
|pattern-vertical-stripes|
|pattern-triangles|
|pattern-zigzag|

## LICENSE

MIT
