webBoilerplate
==============

Features
--------
- A nice frontend web boiler plate
- Stack : scss, requirejs, bootstrap, fontawesome
- Build : install, build, watch, grunt, bower

Install requirements
--------------------
- Install NodeJS : http://nodejs.org/download
- `sudo gem install compass`
- `sudo npm install bower -g`
- `sudo npm install grunt-cli -g`
- `sudo npm install grunt -g`
- `sudo gem install sass`
- `sudo gem install --pre sass-css-importer`

Install
-------
- `cd _build && npm install`
- Possible to add custom install commands in `config->installCommands`

Build
-----
- modify ```_build/config.json``` if needed
- ```cd _build && grunt build```

Sync
----
- ```cd _build```
- ```grunt sync```

RequireJS
---------
- Debug mode : 
    - Launch `ndex-debug.html` instead
    - `index-debug.html` loads the non compiled version

Bower
-----
- Add a requirejs module from bower :
    - `cd _build && bower install the_module --save`
    - Then, add path to `_dev/js/libs/vendor/the_module/path/to/jsFile` in `_dev/main.js` in path section and include module name in the `requirejs` call
- Add a css from bower : 
    - `cd _build && bower install the_module --save`
    - Then edit `_dev/scss/main.scss` and add @import `"CSS:../js/libs/vendor/the_module/the_css_path/the_css_file_without_extension";`
- Add a public resource from bower : 
    - `cd _build && bower install the_module --save`
    - Then edit `build/config.json` and update the `copyFiles` value so the files from the vendor path are copyied in the public `assets` folder