  ┌───────┐
  │       │
  │  a:o  │  acolono.com
  │       │
  └───────┘

OpenCounter Theme

**Requirements**

In order to run this, you need gulp-cli installed globally

    $ npm install -g gulp-cli

**Installation**
Clone this repository

Go into your project folder

    $ git clone git@github.com:acolono/opencounter_theme.git
    $ cd opencounter_theme
    $ npm install
    $ composer install

For browsersync change the proxy variable in gulp/config.js to your needs.

**Usage**

$ gulp sass: Compile all sass files (gulpfile.js will compile from config.paths.sass.src to config.paths.sass.dest. see config/build.config.json)

**Styleguide**

    $ gulp

for developing styleguide components.

**Copyright**
acolono GmbH

Christian Ziegler
Nico Grienauer
Luis Rosenstrauch