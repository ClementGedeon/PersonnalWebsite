# clementgedeon.com

Plain HTML/CSS, no build step. Hosted free on GitHub Pages, domain at Cloudflare.

## Pages
| Address | File |
|---|---|
| clementgedeon.com | `index.html` |
| clementgedeon.com/publications/ | `publications/index.html` |
| clementgedeon.com/conferences/ | `conferences/index.html` |
| clementgedeon.com/conferences/cemsupra2026/ | `conferences/cemsupra2026/index.html` ← QR code points here |
| clementgedeon.com/cv/ | `cv/index.html` |

`style.css` holds all styling. `photo.jpg` is your portrait. Leave `CNAME`, `404.html` and `.nojekyll` as they are.

## Put it online (about 20 minutes)
1. Create a free account at github.com with your personal email and turn on two-factor authentication.
2. New repository → name `website` → Public → Create.
3. Click "uploading an existing file" and drag in **everything in this folder, including the subfolders** → Commit.
   (Tip: `.nojekyll` is hidden on Mac/Linux. If it doesn't upload, create it on GitHub: Add file → Create new file → name `.nojekyll`, leave empty → Commit.)
4. **Settings → Pages** → Source "Deploy from a branch", branch `main`, folder `/ (root)` → Save.
5. Same page, **Custom domain**: `clementgedeon.com` → Save.

## Connect the domain in Cloudflare
Dashboard → clementgedeon.com → **DNS → Records**, add:

| Type  | Name | Content                  | Proxy status |
|-------|------|--------------------------|--------------|
| A     | @    | 185.199.108.153          | DNS only     |
| A     | @    | 185.199.109.153          | DNS only     |
| A     | @    | 185.199.110.153          | DNS only     |
| A     | @    | 185.199.111.153          | DNS only     |
| CNAME | www  | YOURGITHUBNAME.github.io | DNS only     |

Wait 10–60 minutes, then tick **Enforce HTTPS** in GitHub Settings → Pages. Test the QR code before printing.

## Adding paper PDFs
1. Create a folder `papers` and upload the PDF there, e.g. `papers/Lassagne2018_Molecules.pdf`.
2. In `publications/index.html`, find the paper's `doi:...` line and add after it:
   `<a href="../papers/Lassagne2018_Molecules.pdf">PDF</a>`
   (inside the same `<p class="pub-actions">`). Or send the PDFs to Claude and it will do it.

## Adding slides and poster after the talk
Upload `slides.pdf` and `poster.pdf` into `conferences/cemsupra2026/`, then in its `index.html` replace
`<span class="status">Available after the talk</span>` with `<a href="slides.pdf">Download</a>` (same for the poster).

## Adding a new conference
Copy the `cemsupra2026` folder, rename it (e.g. `chirality2027`), edit the text, and add a line to `conferences/index.html`.

## Editing later
Open any file on GitHub, click the pencil icon, edit, Commit. The site updates within a minute.
