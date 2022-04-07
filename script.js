try {
let y = new Tooltip();
	y.CreateHint("helloPPP", "bottom", true);
y.error("hfhgkhfgrhuehfu<br>jrgThhfhgkhfgrhuehfu<br>jrgThhfhgkhfgrhuehfu<", "hello", 10);
	y.success("yes", "center", 2);
	document.querySelector("body").onclick = () => {
		y.warn("oops...", "center", 2);
	}
	y.CreateHint("hello", "top", true);
	setTimeout(function () {
		y.DeleteHint();
	}, 1300);
} catch(o) {alert(o);}