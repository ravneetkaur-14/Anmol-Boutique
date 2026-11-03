# React migration plan

1. **Scaffold target package** — add Vite, React Router, package scripts, and target entry point. Source evidence: no existing package.json. Validation: `npm run build`. Status: complete.
2. **Preserve shared presentation** — port the shared stylesheet and original images into the Vite public directory, correcting only the existing banner extension mismatch. Validation: build and route probes. Status: complete.
3. **Migrate shared layout** — implement `Navbar` and `Footer`, preserving labels, links, sticky behavior, and footer copy. Validation: route tests. Status: complete.
4. **Migrate public page family** — convert index, gallery, prices, and contact templates into JSX pages and preserve all text, sections, cards, table rows, and form fields. Validation: route tests and runtime probes. Status: complete.
5. **Connect backend contract** — post contact form fields to Flask `/contact` through the development `/api` proxy; preserve Flask backend and database. Validation: form request wiring review; live POST requires Flask running separately. Status: complete.
6. **Keep admin backend authoritative** — retain Flask `/admin`; expose a React route without inventing a new database API. Validation: unchanged `app.py`. Status: complete.
7. **Target validation and handoff** — run standalone runtime validation, then provide commands for React and Flask. Status: complete; 6/6 assertions passed.
