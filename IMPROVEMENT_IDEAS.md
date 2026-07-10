# Coffee Shop Project — Improvement Roadmap

Current state: a client-side demo. Products, orders, cart, and admin session all live in
`localStorage` — nothing is shared across users/devices, and nothing survives a cleared cache.
Below is a priority-ordered set of improvements to make it a real-world usable store.

## 1. Real backend + database (biggest structural fix)
Replace `data.js`'s localStorage functions with API calls to a proper backend
(Node/Express, or a BaaS like Supabase/Firebase) backed by a real database (Postgres/MongoDB).
This is the prerequisite for everything else — multi-user carts, persistent orders, and real
admin control all depend on it.

## 2. Secure the admin side
Right now `isAdminLoggedIn` is just a client-set flag in localStorage — anyone can set it in
devtools and get admin access. Move admin auth to the same Cognito flow used for customers
(or a server-issued JWT) with role-based checks enforced server-side, not just hidden UI.

## 3. Real payments
Checkout currently just records an order object locally. Integrating a real payment gateway
(Razorpay/Stripe) turns this into an actual store instead of an order-simulation.

## 4. Image hosting
Product images are hotlinked to random Google/Wikipedia/Starbucks URLs — fragile and could
break at any time. Move to actual uploads (S3, Cloudinary, or a local `/images` folder with an
admin upload UI).

## 5. Order lifecycle & notifications
Add email/SMS confirmation on order placement, and make status updates
(Preparing → Ready → Delivered) visible to the customer, not just the admin dashboard.

## 6. Nice-to-haves (once the above is solid)
- Inventory/stock counts per product
- Product reviews and ratings from real customers
- Search/filter/sort on the shop page
- Mobile-responsive polish / PWA support
- Deployment to a real domain with HTTPS
- SEO basics (meta tags, sitemap)

## Suggested starting point
Start with **#1 (backend/database)** since nearly everything else depends on it — e.g. a
lightweight Node/Express + MongoDB (or Postgres) API that replaces the localStorage functions
in `data.js` with equivalent HTTP calls.
