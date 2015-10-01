TO RUN:

`grunt watch`

OR I have included the compiled app for production so you can just open that without having to run anything. Open the index file within the `bin` directory.

* DO NOT `npm install` or `bower install`. I have included the dependencies in the repo instead of having to install them based on the package.json and bower.json. Normally I would do this properly, but I wanted to ensure no issues with conflict dependency version and what not.*


Is both responsive and compatible back to IE9.

Started with an Angular boilerplate skeleton.

Broke each section down into directives.

Used fontsquirrel to convert the font to web formats.

Opened the logo from Photoshop in Illustrator: Object > Path > Outline Stroke, and on the fonts, Type > Create Outlines.

Sprite sheet SVG with PNG fallback. Outline Stroke on all vectors and Create Outlines on all fonts.

I wanted to show an example of some CSS bluring on the image, in the event that the image might be dynamic. I used Google's reverse image lookup to find the original photo.

I'm storing the brand colors and specs in variables. I like to use mixins for properties that have multiple selectors depending on which browser you're using.

My only use of Bootstrap is for some of their directives already built for Angular. Otherwise, I'm writing my own markup.

Demonstrating some 2-way binding and custom filtering between the search field within the ssHeader directive and HomeCtrl.

Example of form validation on the Settings page.
