# tooltip
**Set of tooltips, errors, warnings**

With the help of this project, any programmer can easily create and connect different pop-up windows:
  1. warning window
  2. window-error
  3. window-of-success
  4. Help window

# How to connect?
[https://Libtooltip.volodya-bot-developer.repl.co](https://Libtooltip.volodya-bot-developer.repl.co)

```html 
<script src="https://googleapis.volodya-bot-developer.repl.co/libs/tooltip.min.js"></script>
```

#How to use?

Methods:

```
new Tooltip()


1. window-of-success: .access(text, position, time, shadows);
2. window-error: .error(text, position, time, shadows);
3. warning window: .warn(text, position, time, shadows);
4. Help window:
               a. .CreateHint(text, position, shadows);
               b. .DeleteHint();
```
text — message text for windows, max length: 50 characters;

position — window location, there are 3 options: "top", "bottom", "center"

time — the time after which the window will disappear in seconds, for example: 3

shadows — the presence of a shadow true or false

The method .CreateHint(...) creates a hint window

.DeleteHint() removes the hint window

# For example:

```js
let tltp = new Tooltip();

// warning window

tltp.warn("Warning!!!", "top", 4, true);

// window-error

tltp.error("Error", "bottom", 2, false);

// window-of-success

tltp.success("Success :)", "center", 1, true);

// creating Help window

document.querySelector("#txt").onclick = () => {

  tltp.CreateHint("the hint", "top", true);

  setTimeout(function() {

    // deleting are all Help-windows

    tltp.DeleteHint();

  }, 3000);

}
```

# Contact

voloda20042020@gmail.com



