//init function
checkImage = function()
{		
	
	if(getElementByPartialId("imgPhoto") != null)
	{			
		theImg = getElementByPartialId("imgPhoto");							
		window.resizeTo((theImg.width+80), 650);		
	}
	window.focus();	
}		
EventManager.Add(window, "load", checkImage);
