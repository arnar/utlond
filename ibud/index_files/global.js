/**************************************************
 global.js
**************************************************/

var _posx = 0;
var _posy = 0;

var loginError = false;

/* ajax functions */
function SendMailForgottenPassword(mailHeader, mailBody, callBackFunction)
{
	//get value of form
	var emailField = getElementByPartialId("txtForgottenPasswordEmail");
	var email = emailField.value;
	//email = "jrg1";
	DefaultFramework.ServerSideSendMailForgottenPassword(email, mailHeader, mailBody, callBackFunction);
}

function ServerSideSendMailForgottenPassword_CallBack(response)
{		
	var formDiv = getElementByPartialId("forgotten-password-form");
	var errorDiv = getElementByPartialId("forgotten-password-error");	
	var confirmDiv = getElementByPartialId("forgotten-password-confirmation");
	
	if (response.error != null || response.value == "false")
	{
		errorDiv.style.display = "block";	
		return;
	}		
	errorDiv.style.display = "none";	
	formDiv.style.display = "none";
	confirmDiv.style.display = "block";	
}

function topNavMouseOver()
{
	this.className = "selected";	
}
function topNavMouseOut()
{
	this.className = "";
}
function helpBoxMouseOver()
{
	this.src="/upload/Images/Global/questionmark_anim.gif";
}
function helpBoxMouseOut()
{
	this.src="/upload/Images/Global/questionmark.gif";
}

function toggleVis(sender, obj, position, setAbsolutePos)
{	
	var theObj = document.getElementById(obj);	
	theObj.style.display = (theObj.style.display == "block")?"none":"block";
		
	if(setAbsolutePos == "setAbsolutePos")
	{			
		theObj.style.position = "absolute";
		theObj.style.zIndex = 1000;
	}
			
	//for absolute positioning	
	if(position != "")
	{				
		switch(position)
		{
			case "left":						
				theObj.style.left = (_posx - theObj.clientWidth) + "px"; 
				theObj.style.top = _posy + "px";
				break;
			case "right":				
				theObj.style.left = _posx + "px"; 
				theObj.style.top = _posy + "px";
				break;
			case "login":				
				//get the position of the loginbox, and display the loginbox right friggin there
				var loginDiv = document.getElementById("login");
				var coords = getPageCoords(loginDiv);								
				theObj.style.left = coords.x + "px"; 
				theObj.style.top = (coords.y + 50) + "px";
				break;
			default:				
				theObj.style.left = _posx + "px"; 
				theObj.style.top = _posy + "px";	
		}				
	}	
}

function getPageCoords (element) {
	var coords = { x: 0, y: 0 };
	while (element) {
		coords.x += element.offsetLeft;
		coords.y += element.offsetTop;
		element = element.offsetParent;
	}
	return coords;
}

function initTopNavBehaviour()
{
	// get the topnav
	var navUlColl = document.getElementsByTagName("UL");
	var navUl = null;
	for(i=0; i<navUlColl.length; i++)
	{
		if(navUlColl[i].className == "topnav")
			navUl = navUlColl[i];
	}		
	//assign mouseover and mouseout handlers to the topnav li items
	if(navUl != null)
	{		
		for (var i=0; i<navUl.childNodes.length; i++) 
		{				
			if(navUl.childNodes[i].nodeName == "LI");
			{
				var object = navUl.childNodes[i];
				if(object.className.indexOf("selected") == -1)
				{
					EventManager.Add(object, "mouseover", topNavMouseOver);		
					EventManager.Add(object, "mouseout", topNavMouseOut);
				}					
			}
		}
	}
}

function initHelpBoxes()
{
	var helpBoxesColl = document.getElementsByTagName("IMG");
	var helpBoxes = new Array();
	for(i=0; i<helpBoxesColl.length; i++)
	{
		if(helpBoxesColl[i].className == "helpbox")
			helpBoxes[helpBoxes.length] = helpBoxesColl[i];
	}		
	//assign mouseover and mouseout handlers to the images
	if(helpBoxes.length>0)
	{			
		for (var i=0; i<helpBoxes.length; i++) 
		{				
			EventManager.Add(helpBoxes[i], "mouseover", helpBoxMouseOver);		
			EventManager.Add(helpBoxes[i], "mouseout", helpBoxMouseOut);			
		}
	}
}


function registerMouseUp(e)
{
	// posx and posy contain the mouse position relative to the document	
	// extracted from http://www.quirksmode.org/js/events_properties.html#position
	if (!e) var e = window.event;
	if (e.pageX || e.pageY)
	{
		_posx = e.pageX;
		_posy = e.pageY;
	}
	else if (e.clientX || e.clientY)
	{
		_posx = e.clientX + document.body.scrollLeft;
		_posy = e.clientY + document.body.scrollTop;
	}
	//debug
	//window.status = "x:" + _posx + " y:" + _posy;
	
}

// http://www.sitepoint.com/examples/hr/
function fancyRules() { 	
	if (!document.getElementsByTagName) return; 
		var hr = document.getElementsByTagName("hr");
	for (var i=0; i<hr.length; i++) { 
		var newhr = hr[i]; 
		var wrapdiv = document.createElement('div');
		wrapdiv.className = 'line';  
		newhr.parentNode.replaceChild(wrapdiv, newhr);  
		wrapdiv.appendChild(newhr);  
	} 
} 

function showLoginBox()
{	
	toggleVis(null, 'login-box', 'login', 'setAbsolutePos');
}

// util functions
function getElementByPartialId(strPartialId, tagName)
{
	if(typeof strPartialId != "string") 
		return null;
	var tagName = tagName || "*";
	var coll = document.getElementsByTagName(tagName);
	for(i=0; i<coll.length; i++)
	{
		if(coll[i].id.indexOf(strPartialId) > -1)	
			return coll[i];
	}
	return null;
}

function getElementsByPartialId(strPartialId, tagName)
{
	var ary = [];
	if(typeof strPartialId != "string") 
		return ary;
	var items = 0;	
	var tagName = tagName || "*";
	var coll = document.getElementsByTagName(tagName);
	for(i=0; i<coll.length; i++)
	{
		if(coll[i].id.indexOf(strPartialId) > -1)
		{
			ary[items] = coll[i];
			items++;
		}
	}
	return ary;
}
function trim(str){
	return str.replace(/^\s+/,'').replace(/\s+$/,'')
} 
function isEmail(str)
{		
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (filter.test(str))
		return true;
	else
		return false
}

// init function
function initPage() {
	fancyRules();
	//initTopNavBehaviour();
	initHelpBoxes();	
	document.onmouseup = registerMouseUp;
	if(loginError)
		showLoginBox();
}
EventManager.Add(window, "load", initPage);	