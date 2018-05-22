const numAds = 3;
const outerDiv = 'class="item"';
const outerDivActive = 'class="item active"';
const innerDiv = 'class="carousel-caption"';

arrImg = ["assets/img/Mason-oh.jpg", "assets/img/Mason-oh.jpg", "assets/img/Mason-oh.jpg"];
arrAlt = ["Afidence", "Comey & Sheperd – Jessica Mills", "Eco Development Group"];
arrHeader = arrAlt;
arrDescription = ["Providing unbiased, real-time business and IT solutions.", "Brokering fine home since 1946.", "Delivering efficient, sustainable energy related solutions nation-wide."];

if (arrImg.length == arrAlt.length && arrAlt.length == arrDescription.length) {
    for (var i = 0; i < numAds; i++) {
        document.write("<div " + ((i == 0) ? outerDivActive : outerDiv) + ">");
        document.write('<img src="' + arrImg[i] + '"' + ' alt = "' + arrAlt[i] + '">');
        document.write("<div " + innerDiv + ">");
        document.write("<h3>" + arrHeader[i] + "</h3>");
        document.write("<p>" + arrDescription[i] + "</p>");
        document.write("</div>");
        document.write("</div>");
    }   
}
else {
    console.error("Ads will not be printed as the arrays don't match in length.");
}

