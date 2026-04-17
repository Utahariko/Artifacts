# Who Is Thinking? Prototype

This folder contains the first playable HTML scaffold for the semester simulator.

## Open the prototype

Because the prototype uses plain script tags rather than a build system, you can open it directly in a browser:

- [index.html](/Users/utahariko/Documents/Vibe%20Coding/6338_Individual/prototype/index.html)

If you prefer a local server, from `/Users/utahariko/Documents/Vibe Coding` you can run:

```bash
python3 -m http.server 8123 --directory "/Users/utahariko/Documents/Vibe Coding/6338_Individual/prototype"
```

Then open:

- `http://localhost:8123`

## Current structure

- [index.html](/Users/utahariko/Documents/Vibe%20Coding/6338_Individual/prototype/index.html): main UI shell
- [styles.css](/Users/utahariko/Documents/Vibe%20Coding/6338_Individual/prototype/styles.css): layout and visual system
- [data/state-model.js](/Users/utahariko/Documents/Vibe%20Coding/6338_Individual/prototype/data/state-model.js): metrics, chapter profiles, endings
- [data/game-data.js](/Users/utahariko/Documents/Vibe%20Coding/6338_Individual/prototype/data/game-data.js): chapter and screen content
- [app.js](/Users/utahariko/Documents/Vibe%20Coding/6338_Individual/prototype/app.js): rendering and interaction logic

## What is already playable

- Chapter 0 through Chapter 5
- chapter summaries
- ending interpretation
- learning-state meters
