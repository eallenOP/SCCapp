(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 320,
	height: 460,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.SCCappTest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{uniform:26,knots:25,menu:24,splash:0});

	// timeline functions:
	this.frame_24 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.stop();
		this.button_k.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop('knots');
		}
		
		this.button_u.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop('uniform');
		}
	}
	this.frame_25 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_b.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop('menu');
		}
	}
	this.frame_26 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_b.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop('menu');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1));

	// Uniform
	this.text = new cjs.Text("Uniform", "19px 'Times New Roman'", "#0000FF");
	this.text.lineHeight = 21;
	this.text.lineWidth = 100;
	this.text.setTransform(31,126.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AvWP3QABgtgCgTIAAr5QghA1gKApQgKAqgTApQgZA0gcAeQgPgFgDgDQgIgHAAgQQAAgOAMgvQAQg8AUg0QAqhmAzghQACgpAWAWIAGAGQAMgEANABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQADABgBAPIgKAPQAGAMAEAOIAAMTQAKAeAAAqQAAAagCAWQgDAAgHADIgMAFQgggQgCgmgAMrICQg4lXAAhIQgBiqBbHNQBaHPAABcIgBAVIgCANIgIAEQgJAEgGACQglhwg9lrgAhWCwQgPAJABAJQgGAFg5AAQh5AAgfgxQgLgQABgTIABgRQAAhiBVAAQAZAAA8ATQjxkKhgiYQgqhChginQguhQiIg8QhAgagYgLQgYgMgMgJQgJAYhiCYQhvDEgSCSQgYDOitE7IgSgGQgIgFAAgRQABgKA9hzQA/h2AGgZIAVh+QAPhVANgzQAyixBEiOQBYi5BGAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAQACABAAAHQAYADAWAEQgFgGAAgOQAAgMAngbQAvggBEgaQDAhLDlAOQAWgOAkgSQAwgYAOABIF5AAQA1ASAkAXQAoAZAMAFQA9AYEMgFQAUACAYAlIANAVQATgEAAAbIgLAMQAAAJgCgHIgCAEIgBABQFJCtCbEpQA7B0A2CwQAfBiA5DAIgEAHQgGAGgPAAQgOAAhXjcQgfhRhdj6Qg2iQjTjDQh9hpg8g1QjDDrhmCJQgUAbgZBLIgsCMQg7CwhKAAIgNgBQgIANgMANQg2A6gOAgIAAAFQBqgbAaAZQAJAJAAASQABAKgBASQAABphRAAIh3gcQgMAAgHAEQAVAZAVApQALATAqBaQAgBEAVAfQgCAEgCAJQgFAHgQAAQgHAAhViSQghg9gcgrQgCARACAUQABAnAcB4QAcCAACANIgGAHQgFAGgOAAQhGAAgQmTgABYBrIhFAWIgEACIA5ANQAnAKAOAAQAkAAAFgYIgCgdIAAgHIgIgBQgUAAgwAOgAkLA4QgHAHABAkQAAASADAHQALAUAmAAIBXAAQAFgLAVgLQAYgMALgGQhQgEhXgnQgOgHgHAAQgEAAgCACgAtes+QClAlBiB4QAlAuAtBTQAxBYATAbQAUAaC6DbQByCHAqBbQBIAYARAFQAgg/Aug/QA8hUAngPIABABIAIgNQA0hTAjhQQgCgvAig7QAwhIAbgvQBYh6BVhlIAug0QiAAOhJALQiGAWhGAqQhcA3ABBlQAAAVAGBMQAGBTAIA0IAADSQgDAAgHAFIgQAIQgphSgFiLIABjqIABgTIgPAEIh2ADQh5AEgJADIh0AAQBuCLAADdQABAZgDgDIgDAEQgEAEgQAAIg0idQg6ipgbgvQgHgLgIgKIgFgCQgFgEgCgJQhAhHiPhBQhLgjicgzIgBgIIgUAIgAnfvAQi+AlgYAKIhSAqIg5AcQE2A7CZCRIC0gFQAAgDAdgBQAwgBCYAAQAGACAKACIAEADQAIgsAXgfQAjgyBOggQBGgcCAgXQBMgOC0gYIgHgMIgGgIIACACIgMgTQkLAFg0gQQgUgHgfgVQgogdgogUImFAAIkTA1gAL8AxQB5AVBhCBQA2BIBFCRIgGAHQgFAGgPAAQjskHhPh1g");
	this.shape.setTransform(163,323.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.text}]},26).wait(1));

	// Knots
	this.text_1 = new cjs.Text("KNOTS", "19px 'Times New Roman'", "#0000FF");
	this.text_1.lineHeight = 21;
	this.text_1.lineWidth = 100;
	this.text_1.setTransform(31,122.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("APFHeQgegZiViHIgigfQhVA2hhAAQiTAAh/hCQg4gkgkgTIhBAjQlMCyiNAcIi+AAQhWgigbh2QgEgWgDghIhFAfIicBLQhYAqg4ATIhGAAIgSgGQgIgFAAgQQAAgMBKgZIDCg8QBmggBdghQgDgrAAg6QABiTBrh7IibhlIlWjcQgBgQACgJIABgFQC0A9FFDvIAWARQAkgjAtghQBTg+BggmQBWgiA2AAQA5AADcCfIBHA0QC0hVBqg6IBkAAIBeA/IBbhcQDPjTA6gDIACAEQACAEAAAOQAAAij+D2IgwAtQA/AtAeAeQBQBNAABRQgBARgYAvQgeA4grAxQgXAagYAWIAzArQAoAjBTBQQBPBNA0AsIgFAQQgEAJgQAAQggAAhYhJgAkYCLQhuA3giAAQg+AAhkAkIAIAgQAbBiAyAuIC0AAQDUhDDDhrIA/gjQgzgLh4g1Qh1gxgeAAIhvA3gAD4DEIAWAIQDfBSBNAAQBKAABFghQjFiphHAAQhcA3hpA5gAHxAxQCYBPB5BcIAWgQQBrhTAAhdQABhNihh1QilCchNA7gAoWhXQhABXAACFQgBAkAJArQC+hGCYhJIAUgIIkYi0QgPAQgLAQgAh0AzQDEBQBtArQBWgzCJhUQhKglhkhMIgcgXQkVB9gxAXgAi9kwQi7BDhkBYQBxBRApAbQBkA+AxAAIEEhzIBRglIhehLQhZhHg3gYQgmgQgfAAQgbAAgXANgAEciCQBwBVA7A4QBGg5BphrIA0g1QgigWgngYIhNgCQhBAni3BVg");
	this.shape_1.setTransform(142.5,278.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.text_1}]},25).to({state:[]},1).wait(1));

	// Menu
	this.button_u = new lib.uniform();
	this.button_u.setTransform(152,246);
	new cjs.ButtonHelper(this.button_u, 0, 1, 1);

	this.text_2 = new cjs.Text("Sea Cadet Menu", "28px 'Times New Roman'", "#0066CC");
	this.text_2.lineHeight = 30;
	this.text_2.lineWidth = 208;
	this.text_2.setTransform(56,10.1);

	this.button_k = new lib.knots();
	this.button_k.setTransform(165.5,143.6);
	new cjs.ButtonHelper(this.button_k, 0, 1, 1);

	this.button_b = new lib.back();
	this.button_b.setTransform(159,37);
	new cjs.ButtonHelper(this.button_b, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_k},{t:this.text_2},{t:this.button_u}]},24).to({state:[{t:this.button_b}]},1).wait(2));

	// Splash
	this.text_3 = new cjs.Text("Sea Cadet App", "12px 'Times New Roman'", "#0066CC");
	this.text_3.lineHeight = 14;
	this.text_3.lineWidth = 100;
	this.text_3.setTransform(58,77.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AgIKsIh5AAQhZgojfhyQjThsh3gzIgCgPQBcADDRBlICyBYQBqA1BIAcIBoAAIAIh/QAIiaAAgNQAAi6gckoIgTilQgxAEgQAFIiDAAIgSgGQgGgFgBgQQABgQAIgEQAFgCALgBQBSgDA1gEIA3gFIgEgvIAAgWIgKABQhlAAgohIQgMgXgFgcIgCgYQAAgwAsgkQAogiA3gEQA7gFAkAgQArAlABBMQgBAXgqAzQgVAcgUAOQAFANAGAUIALArIAOgBQAugCCSAAQAHADAKACQAJADAAAQQAAAQgJAFQgCACgPADQh4ADhLAEQATBfAMB7QAGBeAHCnQAHCTAAAcQgBCPgBAcQgDAtgNBLIB1AAQBDgTEMiHQCGhEB6g/QAZAAgBAFQAAAAABABQAAAAAAAAQAAABABAAQAAAAABABQACABABAPQAAAxknCGQjxBuhPAXIiFAAIgCAPIgPAFIgSgUgAhSqHQghAIgcAVQgcAVAAARQAAAWASAeQAZArAoAAQAhAAA7hXQAAhOg5AAQgNAAgQADg");
	this.shape_2.setTransform(152,219.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.text_3}]}).to({state:[]},24).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(218,307.3,171.5,213.1);


// symbols:
(lib.uniform = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Uniform", "19px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 21;
	this.text.lineWidth = 97;
	this.text.setTransform(-40,-14.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AsBEhIAApBIYDAAIAAJBg");
	this.shape.setTransform(9,-3);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-32,154,58);


(lib.knots = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Knots", "19px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 21;
	this.text.lineWidth = 54;
	this.text.setTransform(-33,-12.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("ApIDqIAAnTISQAAIAAHTg");
	this.shape.setTransform(-1.5,-1.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-25,117,47);


(lib.back = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Back to menu", "19px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 21;
	this.text.lineWidth = 148;
	this.text.setTransform(-53,-11.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("Az+EIIAAoPMAn9AAAIAAIPg");
	this.shape.setTransform(8,0.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120,-26,256,62.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;