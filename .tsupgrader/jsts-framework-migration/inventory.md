# Anmol Boutique frontend inventory

## Source and target

- Source: Flask/Jinja templates rendered by `app.py`.
- Target: React 19, React Router DOM 7, Vite, JSX, and CSS.
- Package directory: repository root.
- Backend: retained in `app.py`, with SQLite persistence in `boutique.db`.

## Source topology

| Area | Evidence | Units |
|---|---|---:|
| Public pages | `templates/index.html`, `gallery.html`, `prices.html`, `contact.html` | 4 |
| Admin page | `templates/admin.html`, `/admin` route | 1 |
| Shared styles | `static/css/style.css` | 1 |
| Image assets | `static/images` | 16 |
| Backend routes | `app.py` | 5 |

The source has no frontend JavaScript or test suite. Navigation is server-side link navigation, and the contact form posts `name`, `phone`, and `message` to Flask `/contact`.

## Baseline state

The source application is a Flask server and did not have a JavaScript package or runtime-validation plan before migration. The target baseline is therefore a standalone React runtime validation after scaffolding, with source behavior captured from the templates and route declarations above.

## Contract changes

| contract | source value | target value | why required | alternatives considered | validation evidence | approval status |
|---|---|---|---|---|---|---|
| Public routes | `/`, `/gallery`, `/prices`, `/contact` | Same paths via React Router | Preserve bookmarks and navigation | Hash routes would change URLs | Runtime route probes and route tests | preserved |
| Contact submission | Flask form POST `/contact` | Browser `fetch` POST `/contact` through Vite `/api` proxy; optional `VITE_API_BASE_URL` | Keep backend separate while allowing Vite development | Rewriting Flask or adding CORS was out of scope | Form action and Vite proxy configuration | preserved |
| Assets | Flask `/static/images/*` | Vite `/images/*` copied from originals | React public assets need a static path | Importing each asset would require moving source assets | Build and image path assertions | approved change |
| Development command | Flask `python app.py` | React `npm run dev` | Target frontend needs Vite | Serving built files from Flask would not provide Vite workflow | Runtime validation | approved change |
| Admin view | Flask-rendered database table | React placeholder route; Flask `/admin` remains authoritative | No admin API contract exists | Modifying backend to add an API was out of scope | Backend retained unchanged | approved change |
