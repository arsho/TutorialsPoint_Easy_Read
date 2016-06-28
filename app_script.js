/*
App Details
================
Name: TutorialsPoint_Easy_Read
Desciption: Read tutorials from TutorialsPoint easily.

Author Details
================
Name: Ahmedur Rahman Shovon
Website: http://datamate.ws/ 
Github: https://github.com/arsho
*/

/*Hide the header, footer, right sidebar, header ad, footer ad*/
$("header").hide();
$(".footer-copyright").hide();
$(".col-md-3").hide();
$(".topgooglead").hide();
$(".bottomgooglead").hide();

/*Wide the middle column which contents the tutorial*/
$(".middle-col").removeClass("col-md-7");
$(".middle-col").addClass("col-md-9");	

/*Variable to check toggling the sidebar*/
var $checkSidebar = 1;

/*Button to toggle the sidebar*/
var $input = $('<button onClick="toggleSidebar()" id="sidebarControlButton" style="float: left;font-size: 12px;" class="btn-primary">Hide Sidebar</button>');
$input.appendTo($(".middle-col>h1:first"));

/*
Function to handle the toggling event
*/
function toggleSidebar(){
	$(".col-md-2").toggle();
	if($checkSidebar == 1){
		$(".middle-col").removeClass("col-md-9");
		$checkSidebar = 0;
		$("#sidebarControlButton").html("Show Sidebar");
	}
	else{
		$(".middle-col").addClass("col-md-9");
		$checkSidebar = 1;
		$("#sidebarControlButton").html("Hide Sidebar");
	}
}

