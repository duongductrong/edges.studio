# Plan: Smooth Shadows & Hover Updates

Date: 2026-06-13 (YYMMDD: 260613)

## Objective

Remove the hover translation/scale effects and the shadow on the image inside `ProductCardLarge`. Make the hover shadows of both `ProductCardSmall` and `ProductCardLarge` smoother, softer, and more premium.

## Proposed Changes

### `src/styles.css`

Define a custom multi-layered shadow `--shadow-smooth-hover` in the `@theme inline` block:

```css
--shadow-smooth-hover:
  0 1px 2px rgba(0, 0, 0, 0.015), 0 4px 8px rgba(0, 0, 0, 0.02),
  0 12px 24px rgba(0, 0, 0, 0.03), 0 24px 48px rgba(0, 0, 0, 0.04),
  0 48px 96px rgba(0, 0, 0, 0.05);
```

### `src/components/ui/product-cards.tsx`

- **`ProductCardSmall`**: Update the hover shadow from `hover:shadow-md` to `hover:shadow-smooth-hover` and transitions to a cubic-bezier transition: `transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`.
- **`ProductCardLarge`**: Update hover shadow to `hover:shadow-smooth-hover` with the cubic-bezier transition. Remove image hover scale, translate, and shadow effects.

## Verification

- Lint check: `npm run lint`
- Type check: `npm run check`
