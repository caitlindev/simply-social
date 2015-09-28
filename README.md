Broke each section down into directives.

Used fontsquirrel to convert the font to web formats.

Opened the logo from Photoshop in Illustrator: Object > Path > Outline Stroke, and on the fonts, Type > Create Outlines.

Sprite sheet SVG with PNG fallback. Outline Stroke on all vectors and Create Outlines on all fonts.

I wanted to show an example of some CSS bluring on the image, in the event that the image might be dynamic. I used Google's reverse image lookup to find the original photo.

I'm storing the brand colors and specs in variables. I like to use mixins for properties that have multiple selectors depending on which browser you're using.

My only use of Bootstrap is for some of their directives already built for Angular. Otherwise, I'm writing my own markup.

Demonstrating some 2-way binding and custom filtering between the search field within the ssHeader directive and HomeCtrl.