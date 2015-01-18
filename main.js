/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */
define(function (require, exports, module) {
    "use strict";
    //brackets Modules
   	var CommandManager = brackets.getModule("command/CommandManager"),
        Menus          = brackets.getModule("command/Menus"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        Dialogs         = brackets.getModule("widgets/Dialogs"),
        DefaultDialogs  = brackets.getModule("widgets/DefaultDialogs"),
        AppInit        = brackets.getModule("utils/AppInit"),
        HTMLUtils       = brackets.getModule("language/HTMLUtils"),
        MainViewManager = brackets.getModule("view/MainViewManager");

    function handleStayrioImg() {
    	var editor = EditorManager.getCurrentFullEditor(),
    		currentSelection = editor.getSelection(),
    		currentPosition;
    		
    	console.log(editor.getCursorPos());
    	console.log(HTMLUtils.getTagInfo(editor, editor.getCursorPos()));
    	console.log(currentSelection);
    	console.log(editor.getSelectedText());

    	var	currentPositionTagInfo = HTMLUtils.getTagInfo(editor, editor.getCursorPos());
    	
    	if(currentSelection.start.line === currentSelection.end.line &&  currentSelection.start.ch === currentSelection.end.ch){
    		console.log("no Selection");
    	} else { 
    		console.log("yes Selection");
    	}
    	
    	
    }

    AppInit.appReady(function () {
	    
	    //register a command
	    var MY_COMMAND_ID = "mzografski.img.satyrio-img";   // package-style naming to avoid collisions
	    CommandManager.register("Add Satyrio Image...", MY_COMMAND_ID, handleStayrioImg);

	    //create a menu item bound to the command
	    var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
	    menu.addMenuItem(MY_COMMAND_ID);

	    //key binding - if needed
	    //menu.addMenuItem(MY_COMMAND_ID, "Ctrl-Alt-H");
	    // (Note: "Ctrl" is automatically mapped to "Cmd" on Mac)
    });
});