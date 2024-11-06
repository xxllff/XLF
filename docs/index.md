---
layout: home

hero:
  name: 晨光红茶的博客
  text: tech-the-world.
  tagline: Welcome to my blog 🚀
  image:
    src: /public/portfolio.jpg
    alt: logo
  actions:
    - theme: brand
      text: Get Started
      link: /bigFrontEnd/html/
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>