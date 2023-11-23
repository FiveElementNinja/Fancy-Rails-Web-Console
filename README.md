
# Fancy Rails Web Console

A userscript that enhances the [Rails Web Console](https://github.com/rails/web-console) so it can be minimized.

On page load the web console is minimized down to a small button on the bottom right of the screen. Clicking it brings the console back.

&nbsp;  
![GIF demonstrating Fancy Rails Web Console being minimized and restored](https://github.com/FiveElementNinja/Fancy-Rails-Web-Console/blob/7e1b3c2441304246a8c30f0a8f202ac65977f3c3/demo.gif)

## Requirements

 - [Greasemonkey](https://www.greasespot.net), [Tampermonkey](https://www.tampermonkey.net), or [Voilentmonkey](https://violentmonkey.github.io) &mdash; Loads the userscript on localhost:3000
 - The [Rails Web Console](https://github.com/rails/web-console) &mdash; This script was built specifically to enhance the web console

## Installation
Assuming you meet the requirements above, simply visit https://github.com/FiveElementNinja/Fancy-Rails-Web-Console/raw/main/fancy-rails-web-console.user.js and you should get prompted by Greasemonkey/Tampermonkey/Voilentmonkey to install the script. Once it's installed, it should load on localhost:3000 and start working automatically.

## Notes

 - This hasn't been tested thoroughly across Rails projects. I built it to work with my current project. I have no idea if it'll work on yours.
 -  If you run into any issues or errors, shoot me a message me on [Mastodon](https://mastodon.social/@FiveElementNinja). I'll try to help if I can.
- **This script is auto-updating. You should only install auto-updating scripts from sources you trust. If you are not comfortable with that, don't install this script. Alternatively, you can modify the script yourself to not be auto-updating.**
