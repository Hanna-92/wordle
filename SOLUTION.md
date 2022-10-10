# Wordle Scores Solution


## What I did
The jist of the solution I came up with here was to basically follow through the existing code and make the minimal changes possible where appropriate for the background sync mechanism.
I wanted to avoid changing too much there as the code seemed to already be working really well, as such I 

1. Updated the [background.ts](public/background.ts) sync process to have an infinite loop which polls for changes every 4 seconds.
2. Updated the [index.ts](public/index.tsx) render to wait for messages from the background sync process and run the refetch function on receipt of a message to rerender the UI
3. Added a function to fetch the latest real results from the API in the [real-responses.ts](public/real-responses.ts) file

I also added an additional commit towards the end of the process to play around with some styling, I made a few components ([wordle-item.tsx](public/components/wordle-item.tsx), [wordle-row.tsx](public/components/wordle-row.tsx) and [wordle-char.tsx](public/components/wordle-char.tsx)) to render the puzzle attempts in a more Wordle-y fashion. Then finally I got a bit carried away with doing a few silly animations etc. for the header because I was having fun ^^;

## What I'd do in future
There are a few things here that I think would be important to change in the future

1. The fetch function requires an API key to run which is bad if this is going to be in clientside js used by any untrusted users. To deal with this I'd make a basic lambda function or something like that on AWS, Azure etc. to act as a proxy and which required no auth (but maybe could do some IP based rate limiting). That way we wouldn't need to expose the API key in our clientside code.

2. The code currently polls for new API results every 4 seconds which is kinda not amazing. If we had a serverside function to fetch these results as described above, we could probably also extend it to use SSE to push updates to the client, rather than the client polling. To do this we might store the last results for a user on the serverside and then poll every so often and compare with the previous results as we currently do in the clientside, if the results were different we could notify the client via SSE. This'd save some network load on the client and we could also potentially remove a bit of the logic around the redrawing

3. This code is also currently not super accessible. It's very much only usable if you can see the page. It would be nice to update all of the components to use more relevant HTML elements (e.g. currently the wordle attempts are all just differently coloured &lt;div&gt; tags, and they are under a &lt;ul&gt; tag). In addition, it would be good to add the appropriate aria values to each of them as well as aria alerts when new data is received from the API

4. There's also way more styling I'd like to do but I decided to stop so I could go eat dinner 🍽️