# Next + Netlify Markdown Blog for [I am Jeremie](https://iamjeremie.me)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a8ab965c-dffc-40ea-9772-353cb25392e8/deploy-status)](https://app.netlify.com/sites/iamjeremie/deploys)

It uses a lightweight Next.js (v9.5+) Markdown Blog, configured so you can one-click install a blog and deploy it to [Netlify](https://url.netlify.com/r1j6ybSYU)!

Get started by clicking here (this will clone the repo and deploy the site):

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-netlify-blog-starter&utm_source=github&utm_medium=blogstarter-cs&utm_campaign=devex)

Or, if you'd like to build it yourself, here's a [tutorial blog post](https://url.netlify.com/ByVW0bCF8) that should get you on the right track!

## The nitty gritty

If you'd like to work with this project locally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you'd like to write a new blog post, write it in Markdown in the `posts` directory.

### Installation options

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-netlify-blog-starter&utm_source=github&utm_medium=blogstarter-cs&utm_campaign=devex)

**Option two:** Manual clone

1. Clone this repo: `git clone https://github.com/cassidoo/next-netlify-blog-starter`
2. Navigate to the directory and run `npm run dev`
3. Make your changes
4. Connect to [Netlify](https://url.netlify.com/r1j6ybSYU) manually (the `netlify.toml` file is the one you'll need to make sure stays intact to make sure the export is done and pointed to the right stuff)

### Styling

Included are some basic styles with [styled-jsx](https://github.com/zeit/styled-jsx), which is included out of the box with Next.js. Because this uses Next.js 9.3, there's also built-in Sass support and CSS Module support, if you'd prefer to use those.

The font used is [Inter](https://fonts.google.com/specimen/Inter).

### Hero images

You may include an optional hero image in your posts. Put the images in `public/static/`, and then include in your blog .md file like so:

```md
---
title: 'Post title'
author: 'Post author'
date: '2020-04-27'
hero_image: ../static/example.jpg
---
```

See `demo-post-1.md` for an example of this.

### Dependencies

- [gray-matter](https://www.npmjs.com/package/gray-matter)
- [next](https://www.npmjs.com/package/next)
- [raw-loader](https://www.npmjs.com/package/raw-loader)
- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-markdown](https://www.npmjs.com/package/react-markdown)
