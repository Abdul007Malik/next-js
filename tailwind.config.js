module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {}, // color palette, font stacks, type scale, border sizes, breakpoints, etc.
    },
    variants: { extend: {} }, //Using utilities to style elements on hover, focus, and more
    plugins: [], //to register third-party plugins with Tailwind
};
