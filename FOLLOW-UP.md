# General

### Q) If you had more time, what further improvements or new features would you add?

- Improve UI, testing

### Q) Which parts (JS/TS) are you most proud of?

- This Qs isn't clear for me enough, I can answer it better in an interview.

### Q) Do you have experience with docker?

- not really, but I can pick it up.

### Q) Do you have experience with unit testing and end-to-end testing?

- Yes, used puppeteer before with an Electron app to test it.

### Q) What is the output of the next code, and why?

```javascript
for (var i = 0; i < 5; i++) {
 setTimeout(function() { console.log(i); }, 1000 );
}
```

Output will be 
```javascript
5
5
5
5
5
```

The Why :
<ol>
  <li>Our engine comes across our for loop. We declare and initialize a global variable named <code>i</code> equal to 0</li>
  <li>Each iteration of loop passes <code>setTimeout()</code> to a web API and into the event loop. Therefore, our
    <code>for loop</code> finishes very quickly, since there is no other code inside of it to run. In fact, the only
    thing our loop does is change the value of <code>i</code> to five.</li>
  <li>At this point, the loop is over, our <code>setTimeout()</code> functions are still counting down.</li>
  <li>Fast forward a bit, and the <code>setTimeout()</code> functions have finished, and the <code>console.log(i)</code>
    statements go into the event queue... and the call stack is empty.</li>
  <li>Since the call stack is empty, the five<code>console.log(i)</code> statements get passed from the event queue into the call stack.</li>
  <li>Remember, <code>i</code> is now equal to five, and that’s why we see five 5's printed to the screen.</li>
</ol>




### Q) Iit possible to run mutli task in the same time in javascript? and why?

- JavaScript is Single-Threaded language, and that cannot be changed, BUT...
- You can perform CPU-intensive tasks using ```Worker threads``` or  ```Web Workers```
  background processing ... which is a way of running a task with input that could use whatever amount of CPU and time it needs to return a result back to the main application.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them

- Test was good Clear instructions ✅

# YouTube link
<a href="https://www.youtube.com/watch?v=9s_TDOMO0Gs" title="Demo link">
  <p align="center">
    <img width="75%" src="https://img.youtube.com/vi/9s_TDOMO0Gs/maxresdefault.jpg" alt="test demo link"/>
  </p>
</a>
