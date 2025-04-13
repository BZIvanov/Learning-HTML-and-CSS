# Box Model

## box-sizing

`box-sizing` controls how the total width and height of an element are calculated.

By default, when you set `width` and `height` on an element, those only apply to the **content box**, and **padding** and **border** are added on top of that. This is called the content-box model.

With `border-box`, **padding and border are included inside the width and height** you set.

Read more [here](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing).

## display

### Quick comparison table

| Property       | New Line? | Width/Height? | Can Sit Inline? |
| -------------- | --------- | ------------- | --------------- |
| `block`        | ✅ Yes    | ✅ Yes        | ❌ No           |
| `inline`       | ❌ No     | ❌ No         | ✅ Yes          |
| `inline-block` | ❌ No     | ✅ Yes        | ✅ Yes          |

Read more [here](https://developer.mozilla.org/en-US/docs/Web/CSS/display).
