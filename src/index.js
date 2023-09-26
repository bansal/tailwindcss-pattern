import plugin from "tailwindcss/plugin";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const pattern = plugin(
  function ({ matchUtilities, theme }) {
    const sizes = theme("pattern.sizes");
    const colors = flattenColorPalette(theme("colors"));

    const color = "var(--tw-pattern-color, currentColor)";
    const size = "var(--tw-pattern-size)";

    const patternSizes = {
      "pattern-checks": (value) => ({
        "--tw-pattern-size": value,
        backgroundImage: `repeating-linear-gradient(45deg, ${color} 25%, transparent 25%, transparent 75%, ${color} 75%, ${color}), repeating-linear-gradient(45deg, ${color} 25%, transparent 25%, transparent 75%, ${color} 75%, ${color})`,
        backgroundPosition: `0 0, ${size} ${size}`,
        backgroundSize: `calc(2 * ${size}) calc(2 * ${size})`,
      }),
      "pattern-grid": (value) => ({
        "--tw-pattern-size": value,
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(to right, ${color} 1px, transparent 1px)`,
        backgroundSize: `${size} ${size}`,
      }),
      "pattern-dots": (value) => ({
        "--tw-pattern-size": value,
        "--tw-pattern-size-image": `calc(${value} / 20)`,
        backgroundImage: `radial-gradient(${color} var(--tw-pattern-size-image), transparent var(--tw-pattern-size-image))`,
        backgroundSize: `calc(0.5 * ${size}) calc(0.5 * ${size})`,
      }),
      "pattern-cross-dots": (value) => ({
        "--tw-pattern-size": value,
        "--tw-pattern-size-image": `calc(${value} / 20)`,
        backgroundImage: `radial-gradient(${color} var(--tw-pattern-size-image), transparent var(--tw-pattern-size-image)), radial-gradient(${color} var(--tw-pattern-size-image), transparent var(--tw-pattern-size-image))`,
        backgroundSize: `${size} ${size}`,
        backgroundPosition: `0 0, calc(0.5 * ${size}) calc(0.5 * ${size})`,
      }),
      "pattern-vertical-lines": (value) => ({
        "--tw-pattern-size": value,
        backgroundImage: `repeating-linear-gradient(to right, ${color}, ${color} 1px, transparent 1px, transparent)`,
        backgroundSize: `${size} ${size}`,
      }),
      "pattern-horizontal-lines": (value) => ({
        "--tw-pattern-size": value,
        backgroundImage: `repeating-linear-gradient(0deg, ${color}, ${color} 1px, transparent 1px, transparent)`,
        backgroundSize: `${size} ${size}`,
      }),
      "pattern-diagonal-lines": (value) => ({
        "--tw-pattern-size": value,
        backgroundImage: `repeating-linear-gradient(45deg, ${color} 0, ${color} 1px, transparent 0, transparent 50%)`,
        backgroundSize: `${size} ${size}`,
      }),
      "pattern-vertical-stripes": (value) => ({
        "--tw-pattern-size": value,
        backgroundImage: `linear-gradient(90deg, transparent 50%, ${color} 50%)`,
        backgroundSize: `${size} ${size}`,
      }),
      "pattern-horizontal-stripes": (value) => ({
        "--tw-pattern-size": value,
        backgroundImage: `linear-gradient(0deg, transparent 50%, ${color} 50%)`,
        backgroundSize: `${size} ${size}`,
      }),
      "pattern-diagonal-stripes": (value) => ({
        "--tw-pattern-size": value,
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent ${size}, ${color} ${size}, ${color} calc(2 * ${size}))`,
      }),
      "pattern-triangles": (value) => ({
        "--tw-pattern-size": value,
        backgroundImage: `linear-gradient(45deg, ${color} 50%, transparent 50%)`,
        backgroundSize: `${size} ${size}`,
      }),
    };
    const patternColors = {
      "pattern-color": (value) => ({
        "--tw-pattern-color": `${value}`,
      }),
    };

    matchUtilities(patternSizes, { values: sizes });
    matchUtilities(patternColors, { values: colors });
  },
  {
    theme: {
      pattern: {
        sizes: {
          sm: "0.5rem",
          DEFAULT: "0.75rem",
          md: "1.5rem",
          lg: "3rem",
          xl: "5rem",
        },
      },
    },
    variants: {
      pattern: ["responsive"],
    },
  }
);

export default pattern;
