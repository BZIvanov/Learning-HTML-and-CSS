# Transition with transform

## Performance info

🧠 **Why `transition` + `transform` is better for performance?**

When you animate properties like `transform` or `opacity`, **the browser can offload the work to the GPU** (graphics card), which makes the animation **much smoother and faster**.

These are called **composite-only properties**, because:

- They don’t trigger layout recalculations (reflow).
- They don’t trigger repainting of pixels.
- They only affect how things are drawn, not where they are in the document flow.

🚫 **On the Other Hand: Animating `margin`, `top`, `left`...**

These trigger **layout recalculations** (also known as **reflow**), which means:

1. The browser has to **recalculate the position and size of everything** affected.
2. Then it has to **repaint** the screen.
3. This process is **slow**, especially when many elements are involved.
