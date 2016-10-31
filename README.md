  ┌───────┐
  │       │
  │  a:o  │  acolono.com
  │       │
  └───────┘

a:o starter theme

**Installation**

run $ npm install

For browsersync change the proxy variable in gulp/config.js to your needs.

**Usage**

$ gulp watch: Watch your files and compile automatically.
$ gulp sass: Compile all sass files
$ gulp sass-lint: Run Sass linting.

**Styleguide**

$ gulp styleguide: Run the sc5 styleguide task.
$ gulp watch-styleguide: Watch sass and js files for developing styleguide components.

The styleguide is done with SC5-styleguide on top of KSS: https://github.com/SC5/sc5-styleguide

KSS is a methodology for documenting CSS and generating styleguides

After running $ gulp styleguide the sc5 styleguide is available under localhost:4000.

**Copyright**

Christian Ziegler
Nico Grienauer