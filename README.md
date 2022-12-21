# HEAT Junior Frontend Assessment

In this assessment you are provided a landing page with various issues (detailed below). Your task is to solve the issues to the best of your ability. You can take as much time as you need, but we recommend completing this assessment in one go.

You can look up documentation to help you with this assessment, however please refrain from pasting code as this will result in immediate disqualification. 

## Recommended tools

This project uses HTML, vanilla JavaScript, and SCSS. We recommend creating a fork of this repo and cloning your fork locally. 

Once you have a local version we recommend using VScode with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass) extensions. Open the `style.scss` file and run the live sass compiler from the bottom right toolbar, then open the `index.html` file and run the live server "Go live" from the bottom right toolbar. This will enable live compilation and hot reloading for your development environment.

Part of our assessment criteria is how you utilize git, so make sure you are making regular sensible commits. Push your finished work to your forked repo when you are done, and send us the link. Make sure the repo is public so we are able to make our assessment.

## What are we looking for?

Amongst other things, we are mainly are assessing your ability to solve typical production issues on the fly using technologies or methods you may not have seen before. We are also interested in your ability to write clear and maintainable code, and we are also assessing your use of git e.g. how you name commit messages and when you choose to make a commit. 

## Issues to solve

1. The company have recently changed their brand colour from #7AC3B0 to #7AACC3. Change all instances of the colour to a variable and create a variable for the brand colour so we can change it easier in future.

2. The company currently doesn't sort the pet records in any specific order. Change this to display pet records in order of their name alphabetically, and push featured pets to the front.

3. Update the mobile breakpoint from 600px max width to 767px. 

4. The links in the header change to grey when moused over. Add a transition over 300ms to this effect, and also add a transition to lower the opacity of the link over the same duration to 0.65 when moused over.

5. Currently nothing happens when a 'More Info' button is clicked. Make this pop up a modal window with a close button and a message that says 'Coming soon!'.

6. Some of the records have a 'featured' property that is true. Make any cards for a featured record have a gold border.

7. Add a new record of a family pet or a pet from TV. Give it a special property and make it stand out visually amongst the rest. 