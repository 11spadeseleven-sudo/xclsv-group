# XCLSV — pre-deployment state

This update intentionally stops before deployment.

## Completed
- Demo reviews removed.
- Approved Supabase reviews only.
- Page-specific SEO titles/descriptions/canonicals.
- Open Graph + Twitter metadata.
- Organization structured data.
- Favicon + web app manifest.
- robots.txt + sitemap.xml.
- /admin marked noindex.
- Real 404 page.
- Vercel SPA rewrite config so direct URLs such as /contact work after deployment.
- Security-oriented response headers in vercel.json.

## Before deploying
1. Confirm the latest project still contains `src/supabaseClient.js`.
2. Confirm `.env` exists locally and is NOT committed to Git.
3. Run `npm run build`.
4. Test the production preview if desired with `npm run preview`.
5. On Vercel add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
6. Deploy.
7. Connect `xclsvgroup.co.za` once the domain is available.
8. Test `/`, `/contact`, `/admin`, `/privacy`, `/terms`, all four maintenance pages and a deliberately incorrect URL.
9. Resend/email notifications remain intentionally deferred until after the base deployment.
