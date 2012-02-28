/* cl_version: 3 */$(document).ready(function(){$('#catAbb, input.min, input.max').attr('disabled','');$('#showImgs').css('display','inline');if(checkCookie()=='show'){showImgs();}else{hideImgs();}
$('input.min').DefaultValue('min');$('input.max').DefaultValue('max');$('form').submit(function(){if(catAbb&&($('#catAbb').val()==catAbb)){$('#catAbb').attr('disabled','disabled');}});$('#neighborhood, #nh').hide().attr('disabled','');newSel=$('#nh').clone();newSel.find('#all').remove();$('#nh').replaceWith(newSel);$('#hoodtogon, #hoodtitle').show();$('#hoodtitle').click(toggleHoods);countHoods();$('body').click(function(e){if(!$(e.target).parents('#hoodpicker').length){$('#hoodtogon').show();$('#hoodtogoff').hide();$('#neighborhood, #nh').slideUp(100);}});});function toggleHoods(){$('#hoodtogon, #hoodtogoff').toggle();$('#neighborhood, #nh').slideToggle(100);$('select#neighborhood, select#nh').toChecklist({addScrollBar:false,showSelectedItems:true,submitDataAsArray:false});$('#neighborhood, #nh').click(countHoods);countHoods();}
function countHoods(){var hoodcount=$('#neighborhood :checked').length||$('#nh :checked').length||$('#neighborhood :selected').length||$('#nh :selected').length||'all';$('span#hoodcount').text(hoodcount);}
function showImgs(){if(!window.tocpix)return;$('span.ih').removeClass('ih').addClass('i')
.each(function(){if($(this).attr('id')){var iP=$(this).attr('id').split(':');thumbURL='http://'+iP[0]+'.craigslist.org/thumb/'+iP[1];postURL=$(this).siblings('a').attr('href');$(this).html('<a href="'+postURL+'"><img alt="" src="'+thumbURL+'"></a>')
.mouseover(function(){var iP=$(this).attr('id').split(':');fullURL='http://'+iP[0]+'.craigslist.org/'+iP[1];$('#floater').html('<img src="'+fullURL+'">').show();})
.mouseout(function(){$('#floater').hide();})
.mousemove(function(e){$('#floater').css({'left':e.pageX+15+'px','top':e.pageY+15+'px'});})}})
$('#showImgs').hide();$('#hideImgs').css('display','inline');var date=new Date();date.setTime(date.getTime()+(365*24*60*60*1000));document.cookie="cl_img=show; domain=craigslist.org; expires="+date.toGMTString()+"; path=/";}
function hideImgs(){$('span.i').removeClass('i').addClass('ih');$('#showImgs').css('display','inline');$('#hideImgs').hide();document.cookie='cl_img=null; domain=craigslist.org; expires=Fri, 27 Jul 2001 02:47:11 UTC; path=/';}
function checkCookie(){var C=document.cookie.split(';');for(i=0;i<C.length;i++){var c=$.trim(C[i]);if(c.indexOf('cl_img=')==0)return c.substring(7);}
return null;}