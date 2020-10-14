This repo is my current working directory for a portfolio I am creating to showcase my work. I am creating this project using React on the front-end, node.js with express, along with a simple firebase database to store my current resume. This repo is currently a work in progress. I will edit with challenges faced along the way.

Challenges:

1 - The infinite scrolling marquee effect:
    - This was actually a little more involved than I had anticipated. There is a little trick to make it work right...
    - You need to create 2 copies of the list you want to animate, svg's in my case.
    - Use this list to do a transform(translate()) on the svg's with keyframe animation
    - The tricky part is the timing. Timing is dependent on the width of your list based on the duration of animation.
        - For me this calculated to using 0 to -1300% X translation on a 30 second duration
    - Apply some :before and :after with a linear gradient with faded opacity to achieve a nice fading in and out effect
    - Enjoy the beautiful seamlessly infinite scrolling marquee of (insert whatever you used here)!
