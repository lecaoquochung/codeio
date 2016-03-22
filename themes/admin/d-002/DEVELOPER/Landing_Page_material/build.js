
// This script is optional. You can directly compile less file into css with long typing of path name as shown in the 
// below `exec()` command.
// Require nodejs and less compiler installed. (see lesscss.org on how to install less compiler)
var childp = require("child_process");

// Compile all less files into css. Generate two css file `bootstrap.css` and `main.css` in `css/` folder.
// Execute with `node [thisfilename]`. (eg: node build).
childp.exec("lessc less/bootstrap-custom/bootstrap.less > css/bootstrap.css", function(error, stdout, stderr) {
	if(error != null) {
		console.log("exec error: " + error);
	}
});

// This will compile `main.less` into `main.css`. 
childp.exec("lessc less/main.less > css/main.css", function(error, stdout, stderr) {
	if(error != null) {
		console.log("exec error: " + error);
	}
});



