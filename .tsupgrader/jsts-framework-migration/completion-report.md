# Migration complete

## Completed

- React/Vite frontend added under `src/`.
- All four requested public pages converted to JSX.
- Original images copied to `public/images/`.
- Original visual rules preserved in `src/styles/global.css`, with the broken price-banner extension corrected.
- React Router routes added for `/`, `/gallery`, `/prices`, `/contact`, and `/admin`.
- Flask backend and SQLite database were not modified.

## Validation

The fresh standalone `typescript_validate_runtime` result passed all 6 assertions: production build, 2 route tests, and HTTP probes for `/`, `/gallery`, `/prices`, and `/contact`.

## Contract changes

| contract | final status |
|---|---|
| Public routes | preserved |
| Contact POST contract | preserved |
| Asset URL root | approved change |
| React development command | approved change |
| Admin data source | approved change; Flask remains authoritative |

## Run locally

```powershell
npm run dev
```

Run Flask separately when submitting contact messages:

```powershell
python app.py
```

For a separately hosted backend, set `VITE_API_BASE_URL` to the Flask API origin before building.
