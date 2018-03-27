var icon_multi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPbQAAD20Bc0goHgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAClSURBVFiF7daxDYMwEIXhPxEjJIMkLT1jUTACLIPSuwwMAjskTSpsCusuioPeJ9E8ocdJ1smAiIjIoZ2celqg2WQPoLMWV9aCjytQb7LZo/jsUfJNGtCq+AFzl6QFLon8tpP1iXzFYbv3BOBlfELOB4s/Yg1olbskI/BM5HfimyQAU+LdJfObLgbiZRg8ios/Yg1oVfyAXv+DC/EN8ZNtFRER+TNvCXcj4pCX2mYAAAAASUVORK5CYII=";

var icon_qwiic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPbQAAD20Bc0goHgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAG3SURBVFiF7dY9axRRFMbxX6JYBI0ixpdCEDWFgooiKQRBEEFFY6OF2ilo4RcQS/0EWttEAukttbCwUwISQRBfAoEUCSio8QXFl+LOwjB7d52RvdnC+4cDO3POmefhcGbnkslkMplMPxnEOO7hDT4X8RoTOIWBfpkbwzR+/yWe4OBymzuPrzXMteILzi2XuWP40cBcK77jaFOxpvuxFq8wUrn/AZN4WlyP4WJRX2YRo/jYULc2t7RP5iE2RGpH8ChSfzOVuQHMVcReYKhLzxq8rPTMSfRm79M+jbM1+i5E+vakMDgeEVrdoXZ96fdwpO90XdHBBgarC/8NS5G6y5jFyeL6k/AGl1nXQLc2J7RPYmMpvxn3S7l5YZJbI33HUxjcHhG6VsrfieSncD1yf1sKgzBTEVoUJkTYtdmImeoXZyaVObgaMfAWh4v8EfyM1JTjSkqDK/G8g/A07gq718ncs+IZSRnF+y4mOsU77EhtrsVe8X3rFkvY2VRoxT8aXBAOB0PYX/M5q4RT0IMmQr34Jm7CGRzCFsHsvHBQvYQDwp/6DdzGrx5o9oxdeIzd/TaSyWQymf+VP43wyBjODj+xAAAAAElFTkSuQmCC";

var icon_select = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPbQAAD20Bc0goHgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADYSURBVFiF7dMhTgNREADQB6lAIKnpFXoBklpwhCtUNeUGTS9QRz1BcQMSJLUkXIAzVGxTU4cABKt+vtn9P4Q088z+TObPTHZ3CCGEEI7aSY87U8yS2AfmSewB4yT2iKcuzQadRvs1xCSJ7TN5o0zec9dmp10v/LUYsFQMWKrPFudc4rU93+G2jRWr9QaHuMIB31jhokbhmp/4Ewvc46xW0VoDNljiC+fYYFejcK1/8B3r9nzdPl9wU1r4329xDFgqBizVZ4sbvCWxbSZvm8lrevQLIYQQjtkPHBAZGWFKkI8AAAAASUVORK5CYII=";

var icon_x = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPbQAAD20Bc0goHgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFwSURBVFiF7da/Sh1BFIDx3zUSLQIJphFjFJ/ALhaWCVr4CGIsLCxCUollHkIQhYCNiIhFkneIhX8KbQRNcbtYJCgmVpFrUmyUvbMT8SJ3t5kPpjnnwPl2mLMzJBKJRCJxH2ot1j/CmyD2GwtoBPF+TAaxU3xosWfLrONPsN5F6jYjdbPtloNenAWNf+JZruZlRG4PD8oQhLcRgY1/uYc4DHINjJQlBx3YjkhOYD4SXy5T7poXsp3Ji9TxK4h9R08VgrCkuFvhmqlKDh7jW0Tqeu3IjkOlTInLNWTHoHJq2FUUXK1SKs8ALhQFT/CkQq8bPvn/GVyo0AuMuX2CS/9B5+nG10DoSlFyV4lXXJ73EZlFfIzEwxdQ24kNxg88xXPF2+QcfWUKflbcpelcfi6SXytLbjzS/Ivmx28n9iN1r9ot14WjoOklhiO1o4pDcywbrjvT2aLgEFaCWB0HkdotvNb8kIVB2UcmEolEIlECfwGSqKrGAzqdOQAAAABJRU5ErkJggg==";

// Get Google Sheet with address info and sort each entry
$.get( "https://sheets.googleapis.com/v4/spreadsheets/1JuJB09Kt9qEG8Rsj-41MujdvfZbz4X57T_MGdSbImLc/values/'Address List'?key=AIzaSyDckJlbFphrBokw1BnQsyl2dM1IRK_80KE", function( data ) {
  data.values.forEach(function(row) {
  if(row.length == 4){
  	addrSort(row);
  }
});
});

function addrSort(row){

// create a <div> object for each product
	var entry = $( "<div></div>", {
  "class": "listEntry", "data-sku": row[1]}).append("<div class=\"addrTab\"></div>").append("<div class=\"nameWrap\"><a href=\"https://www.sparkfun.com/products/"+row[1].split("-")[1]+"\" class=\"prodName\">"+row[0]+"</a></div>");
  
// if a product has more than one address, split them and store them in the data attributes of that product's <div>  
  
  if(row[2].includes("/")){
  entry.attr("data-addr1", row[2].split("/")[0].trim());
  entry.attr("data-addr2", row[2].split("/")[1].trim());
  }else{
  entry.attr("data-addr1", row[2].trim());
  }

// if the address is user selectable, set a flag and store the details
	if(!row[3].toLowerCase().includes("no")){
  entry.attr("data-alt-addr", row[3]);
  entry.attr("data-selectable", 1);
  }else{
  entry.attr("data-selectable", 0);
  }
  
    //add status icons
  if(row[2].includes("/")){
  entry.append("<div class=\"tooltip\"><img src=\"" + icon_multi + "\" class=\"icon icon_active\"><span class=\"tooltiptext\">There are multiple devices on this board, so this product has more than one address at "+ row[2].split("/")[0].trim() +" and "+ row[2].split("/")[1].trim() +". </span></div>");
  }else{
  entry.append("<img src=\"" + icon_multi + "\" class=\"icon icon_inactive\">");
  }
  
  if(!row[3].toLowerCase().includes("no")){
  entry.append("<div class=\"tooltip\"><img src=\"" + icon_select + "\" class=\"icon icon_active\"><span class=\"tooltiptext\">The address of this device can be changed. Notes: "+ row[3] +"</span></div>");
  }else{
  entry.append("<img src=\"" + icon_select + "\" class=\"icon icon_inactive\">");
  }
  
  if(row[0].toLowerCase().includes("qwiic")){
  entry.append("<div class=\"tooltip\"><img src=\"" + icon_qwiic + "\" class=\"icon icon_active\"><span class=\"tooltiptext\">This board is equipped with Qwiic solderless connectors.</span></div>");
  }else{
  entry.append("<img src=\"" + icon_qwiic + "\" class=\"icon icon_inactive\">");
  }
  
  if(row[1].includes("SPX")){
  entry.append("<div class=\"tooltip\"><img src=\"" + icon_x + "\" class=\"icon icon_active\"><span class=\"tooltiptext\">This is an experimental SparkX product.</span></div>");
  }else{
  entry.append("<img src=\"" + icon_x + "\" class=\"icon icon_inactive\">");
  }

// sort by address
	if(row[2].includes("0x0")){
  $( '#x00' ).append(populateAddr(row, 'x0', entry).clone());
  }
	if(row[2].includes("0x1")){
  $( '#x10' ).append(populateAddr(row, 'x1', entry).clone());
  }
  if(row[2].includes("0x2")){
  $( '#x20' ).append(populateAddr(row, 'x2', entry).clone());
  }
  if(row[2].includes("0x3")){
  $( '#x30' ).append(populateAddr(row, 'x3', entry).clone());
  }
  if(row[2].includes("0x4")){
  $( '#x40' ).append(populateAddr(row, 'x4', entry).clone());
  }
  if(row[2].includes("0x5")){
  $( '#x50' ).append(populateAddr(row, 'x5', entry).clone());
  }
  if(row[2].includes("0x6")){
  $( '#x60' ).append(populateAddr(row, 'x6', entry).clone());
  }
  if(row[2].includes("0x7")){
  $( '#x70' ).append(populateAddr(row, 'x7', entry).clone());
  }
  
  pageSort();

}

function populateAddr(row, prefix, entry){

	if(row[2].includes("/")){
  
  	if(row[2].split("/")[0].includes(prefix)){
    entry.find('.addrTab').html(row[2].split("/")[0]);
    }else{
    entry.find('.addrTab').html(row[2].split("/")[1]);
    }
  
  }else{
  	entry.find('.addrTab').html(row[2]);
  }
  
  return entry;

}

// sort listEntry elements by address
function pageSort(){

	var swap = 1;

	$(".range").each( function(){

		while(swap==1){
    
    swap = 0;
    
		$(this).find('.listEntry').each(function(){
    if(parseInt($(this).next('.listEntry').find('.addrTab').html()) < parseInt($(this).find('.addrTab').html())){
      $(this).insertAfter($(this).next('.listEntry'));
      swap = 1;
      }
      
    });
    
  	}
    
    swap = 1;
  
  });
  
}
