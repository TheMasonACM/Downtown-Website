const numAds = 3;
const outerDiv = 'class="item"';
const outerDivActive = 'class="item active"';
const innerDiv = 'class="carousel-caption"';

arrImg = ["assets/img/Mason-oh.jpg", "assets/img/Mason-oh.jpg", "assets/img/Mason-oh.jpg"];
arrAlt = ["Afidence", "Comey & Sheperd – Jessica Mills", "Eco Development Group"];
arrHeader = arrAlt;
arrDescription = ["Providing unbiased, real-time business and IT solutions.", "Brokering fine home since 1946.", "Delivering efficient, sustainable energy related solutions nation-wide."];

for (var i = 1; i < numAds; i++) {
    document.write("<div " + outerDiv + ">");
    document.write('<img src="' + arrImg[i] + '"' + ' alt = "' + arrAlt[i] + '">');
    document.write("<div " + innerDiv + ">");
    document.write("<h3>" + arrHeader[i] + "</h3>");
    document.write("<p>" + arrDescription[i] + "</p>");
    document.write("</div>");
    document.write("</div>");
}
