# Project Structure — FSD Pragmatic

> Kiến trúc Feature-Sliced Design biến thể, tối ưu cho TanStack Start + co-location theo domain.

## Tổng quan cấu trúc

```bash
src/
├── routes/                           # ── APP LAYER (TanStack Router) ──
│   ├── __root.tsx                    #    Root shell: HTML, providers, global meta
│   ├── index.tsx                     #    "/" → pages/home
│   ├── privacy.tsx                   #    "/privacy" → pages/privacy + layout
│   └── terms.tsx                     #    "/terms" → pages/terms + layout
│
├── pages/                            # ── PAGES LAYER ──
│   ├── home/
│   │   ├── home-page.tsx             #    Compose: LandingLayout + ProductsSection
│   │   └── index.ts                  #    Barrel export
│   ├── privacy/
│   │   ├── privacy-page.tsx          #    Privacy policy content
│   │   └── index.ts
│   └── terms/
│       ├── terms-page.tsx            #    Terms of service content
│       └── index.ts
│
├── modules/                          # ── DOMAIN LAYER ──
│   ├── product/                      #    Sản phẩm
│   │   ├── ui/
│   │   │   ├── product-cards.tsx     #    ProductCardLarge, ProductCardSmall, badges
│   │   │   └── products-section.tsx  #    Products showcase + filter tabs
│   │   ├── model/
│   │   │   └── types.ts              #    Product types & interfaces
│   │   └── index.ts                  #    Public API
│   │
│   └── layout/                       #    Site layout
│       ├── ui/
│       │   ├── landing-header.tsx    #    Header: logo, nav, login, mobile menu
│       │   ├── landing-footer.tsx    #    Footer: links, copyright
│       │   └── landing-layout.tsx    #    Layout shell: header + main + footer
│       ├── lib/
│       │   └── nav-links.ts         #    NAV_LINKS, FOOTER_LINKS
│       └── index.ts
│
├── shared/                           # ── SHARED LAYER ──
│   ├── ui/                           #    shadcn/ui primitives
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── container.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   └── tooltip.tsx
│   ├── lib/
│   │   ├── utils.ts                  #    cn() — class merging
│   │   └── create-meta.ts            #    seo() — meta tag generator
│   └── config/
│       └── site.ts                   #    Site name, URL, contact, CTA strings
│
├── router.tsx                        # TanStack Start router config
├── routeTree.gen.ts                  # Auto-generated (DO NOT EDIT)
└── styles.css                        # Global styles + Tailwind CSS
```

## 4 Layers — Luồng dependency

```
routes/ ──→ pages/ ──→ modules/ ──→ shared/
```

| Layer      | Vai trò                          | Import từ                 |
| ---------- | -------------------------------- | ------------------------- |
| `routes/`  | Routing + SEO. Thin wrappers.    | pages, modules, shared    |
| `pages/`   | Tổ hợp modules thành trang       | modules, shared           |
| `modules/` | Toàn bộ code 1 domain            | shared                    |
| `shared/`  | UI primitives, utilities, config | (không import layer khác) |

### Quy tắc nghiêm ngặt

- **Import xuống**: Layer trên chỉ import từ layer dưới
- **Cross-module bị cấm**: `modules/X` KHÔNG import `modules/Y`. Cần share → đẩy xuống `shared/`
- **Public API**: Import module qua `index.ts`, không import file internal

## Segments trong mỗi module

| Segment  | Chứa gì                     | Tạo khi            |
| -------- | --------------------------- | ------------------ |
| `ui/`    | React components            | Luôn luôn          |
| `model/` | Types, interfaces, state    | Có types riêng     |
| `lib/`   | Helpers, constants, data    | Có logic/data      |
| `api/`   | API calls, server functions | Có API integration |

## Thêm module mới

```bash
mkdir -p src/modules/<name>/{ui,model,lib}
touch src/modules/<name>/index.ts
```

Ví dụ tương lai: `modules/payment/`, `modules/license/`

## Thêm shadcn/ui component

```bash
pnpm dlx shadcn@latest add <component>
# Output tự động vào src/shared/ui/ (theo components.json)
```

## Naming Conventions

| Loại           | Convention                | Ví dụ                                    |
| -------------- | ------------------------- | ---------------------------------------- |
| Files          | kebab-case                | `product-cards.tsx`                      |
| Components     | PascalCase                | `ProductCardLarge`                       |
| Barrel exports | `index.ts`                | `export { HomePage } from './home-page'` |
| Types          | `types.ts` trong `model/` | `modules/product/model/types.ts`         |

## TanStack Start files (ngoài FSD)

| File               | Vai trò                   | Sửa tay?         |
| ------------------ | ------------------------- | ---------------- |
| `router.tsx`       | Router instance config    | ✅               |
| `routeTree.gen.ts` | Auto-generated route tree | ❌ KHÔNG BAO GIỜ |
| `styles.css`       | Global styles + Tailwind  | ✅               |
