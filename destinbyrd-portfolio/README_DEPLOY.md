## Deploy to Vercel and connect destinbyrd.com

### 1) Prepare repository
You can make this folder the repo root for simplicity.

```bash
cd /workspace/destinbyrd-portfolio
git init -b main
git add -A
git commit -m "chore: bootstrap portfolio"
# Create a GitHub repo named "destinbyrd-portfolio" and copy its HTTPS URL, then:
git remote add origin https://github.com/<your-username>/destinbyrd-portfolio.git
git push -u origin main
```

### 2) Create Vercel project
- Go to https://vercel.com/new
- Import the GitHub repo you just pushed
- Framework preset: Vite (auto-detected)
- Build Command: `npm run build` (default)
- Output Directory: `dist` (default)
- Root Directory: repository root (do not select a subfolder)
- Deploy. First build should succeed in ~1 minute.

Note: `vercel.json` is included to ensure SPA rewrites so future client-side routes work.

### 3) Add custom domain
In your Vercel project → Settings → Domains → Add:
- `destinbyrd.com`
- `www.destinbyrd.com`

Choose one of the DNS options below.

#### Option A: Keep your current DNS provider
Create these records at your DNS provider:
- Apex (root): A record
  - Name/Host: `@`
  - Type: `A`
  - Value: `76.76.21.21` (Vercel Anycast)
  - TTL: Automatic/Default
- `www` subdomain: CNAME record
  - Name/Host: `www`
  - Type: `CNAME`
  - Value: `cname.vercel-dns.com`
  - TTL: Automatic/Default

Then, in Vercel domain settings, set `destinbyrd.com` as the primary domain and enable redirect from `www` → root.

#### Option B: Move DNS to Vercel (nameserver change)
- In Vercel domain settings, choose "Transfer DNS to Vercel" and follow the instructions
- Update your domain registrar to use the nameservers Vercel provides
- Vercel will auto-create DNS records for the project

Propagation typically completes within minutes but can take up to 24h.

### 4) HTTPS and redirects
- Vercel will auto-issue SSL certs after DNS is verified
- In Vercel → Domains, set primary domain and ensure `www` redirects to apex (or vice versa)

### 5) Continuous deployment
- Every push to `main` triggers a Production deploy
- Pull Requests will get Preview URLs automatically

### 6) Optional local deploy via CLI
If you prefer using Vercel CLI:
```bash
npm i -g vercel
cd /workspace/destinbyrd-portfolio
vercel   # link the project, creates .vercel/ and a preview deploy
vercel --prod  # production deploy
```

### 7) Environment variables
- Not required for this static portfolio
- Add in Vercel → Settings → Environment Variables if needed later

### 8) Where to edit content
- Page layout: `src/App.tsx`
- Global styles: `src/index.css`
- HTML head/meta: `index.html`

After editing, commit and push to `main` to redeploy automatically.