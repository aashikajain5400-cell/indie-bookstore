# Indie Bookstore

A responsive bookstore landing page with a curated book collection, author and community sections, detailed FAQs, newsletter signup, and a reading-progress indicator.

## Live demo


> Replace `your-project-name` with the URL Vercel gives you after deployment.

## Preview



## Features

- Responsive navigation with an active-section underline
- Featured collection with 12 book slots and wishlist buttons
- Book of the month, genres, events, reviews, and FAQs
- Detailed FAQ section
- Newsletter validation and back-to-top button
- Local image assets and easy-to-replace book covers

## Run locally

Open `index.html` in a browser. No installation or build step is required.

## Book cover images

Place book covers in `assets/books/` using these filenames:

```text
book1.jpg  to  book12.jpg
```

If a newer cover is not present yet, the site uses `assets/placeholder.png` until you add it.

## Project structure

```text
management2/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── hero-book.jpg
    ├── store.jpg
    ├── placeholder.png
    ├── books/
    │   └── book1.jpg ... book12.jpg
    
```

## Deploy on Vercel

1. Upload this folder to a GitHub repository.
2. Import that repository into [Vercel](https://vercel.com/new).
3. Keep the framework setting as **Other** and deploy.
4. Copy the generated `https://...vercel.app` URL into the **Live demo** link above.
