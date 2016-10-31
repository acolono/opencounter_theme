<h1>About this styleguide</h1>

This styleguide is done by acolono GmbH for acolono.com

All components follow a mobile first, content driven approach.

The application is built using SCSS to create modular components with BEM syntax. These components are generic enough to be reusable.

Please note that <strong>the styleguide itself is best viewed in Chrome</strong>. However, the underlying component CSS will support at least the following browsers:

<ul>
<li>Internet Explorer 10+</li>
<li>chrome 43</li>
<li>chrome/android 28</li>
<li>safari 7</li>
<li>firefox 38</li>
</ul>


<h2>How to adopt the Styleguide</h2>

The styleguide is done with SC5-styleguide on top of KSS: https://github.com/SC5/sc5-styleguide

KSS is a methodology for documenting CSS and generating styleguides.

Generate styleguide manually using gulp:
<div class="kss-markup"><pre><code>$ gulp styleguide</code></pre></div>

To work on the styleguide you can watch your modifications and update automatically:
<div class="kss-markup"><pre><code>$ gulp watch-styleguide</code></pre></div>


More information and usage: https://github.com/SC5/sc5-styleguide

<h2>Theme Documentation</h2>

<strong>File structure</strong><br />
The main scss files are in the sass/main folder.
We use a folder structure similar to SMACCS: https://smacss.com/

<strong>CSS naming conventions</strong><br />
We follow the conventions described here http://sass-guidelin.es/ and Drupal 8 Coding standards.

<strong>Layout</strong><br />
We use Susy 2 for semantic grids: http://susy.oddbird.net/