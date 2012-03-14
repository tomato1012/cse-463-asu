/* cookies.js
 * Created By: Robert Sanders
 * Purpose: to provide functions for getting and setting cookies on the clients side
 */

var expire_days = 30;

function setCookie(cookie_name,cookie_value)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + expire_days);
	var c_value=escape(cookie_value) + ((expire_days==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=cookie_name + "=" + c_value;
}

function getCookie(cookie_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==cookie_name)
	    return unescape(y);    
	}
	return null;
}