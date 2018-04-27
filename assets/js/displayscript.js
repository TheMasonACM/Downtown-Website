var arrAll = [`A Violin Makers Workshop` ,`Afidence*` ,`Air Authority Heating & Air Conditioning*` ,`All Smiles Family Dental` ,`AL’s Heating & Cooling Services Inc.` ,`American Legion` ,`American National Insurance Co. – Jane Eggerding*` ,`Andrea N. Hicks – Attorney at Law` ,`Angilo’s Pizza Mason*` ,`Aponte’s Pizzeria & Family Restaurant` ,`The Auto Medic` ,`Banana Leaf Modern Thai` ,`Barnes’s Towing & Auto Services` ,`Batche & Batche Law Office` ,`Baysore’s Flower Shop*` ,`Best Mattress Shop` ,`Bon Ton` ,`Boomerang Design Group` ,`Butcher Bill’s` ,`Chet Mastalerz Insurance Agency*` ,`Children’s Theater of Mason` ,`The Christ Hospital Testing Center` ,`Clean Clothes Company` ,`Comets Pizzeria` ,`Comey & Sheperd – Jessica Mills*` ,`Cunningham School of Dance` ,`Dixie Union Station` ,`Domino’s Pizza` ,`Dowrey Stover Insurance Agency` ,`The Drapery Shoppe*` ,`Dupriest Antiques & The Unusual` ,`East Main Salon & Spa*` ,`Eco Development Group*` ,`Farmers Insurance – Daniel Brinck` ,`Fifth Third Bank` ,`Gary’s Barber Shop` ,`Grace Chapel` ,`Healthy Smiles Dental Care` ,`Heritage Awards & Engraving` ,`HiFive Development Group*` ,`Journey Well LLC*` ,`Kidd Coffee & Wine Bar` ,`Little Rascals Photography` ,`Main Street Sweets` ,`Main Street Yarns` ,`Malhotra Group Inc` ,`Marathon Gas` ,`Martha’s Heirlooms` ,`Mason Beer Drive Thru` ,`Mason Dance Center*` ,`Mason Deerfield Chamber*` ,`Mason Food Pantry` ,`Mason Grill` ,`Mason Public Library*` ,`Mason Vision Center` ,`Mims Off Main*` ,`Muennich Car Care LLC*` ,`Nationwide Insurance – David B. Holliday` ,`New China` ,`OM Oil` ,`Papa John’s Pizza` ,`Peoples First Savings Bank*` ,`Phantom Sound & Theater` ,`The Pilates Club` ,`Pitrelli’s Italian Ristorante` ,`Pop Revolution Gallery & Framing` ,`Premier Granite & Stone` ,`Quatman’s Café` ,`Quik Tax` ,`Radiant Dental Care*` ,`R & M Foreign Automotive` ,`Servatti Pastry Shop & Deli` ,`Shorten & Ryan Funeral Home Inc.*` ,`Springdale Cleaners*` ,`St. Susanna Catholic Church` ,`State Farm – Andy McMahon*` ,`Steppin’ Up Dancewear` ,`Subway` ,`This ‘N’ That Consignment` ,`Thomas Shackleford Law Offices` ,`Trinity Salon & Spa` ,`Troy’s Café Mason*` ,`Two Cities Pizza Co.` ,`Tucker’s Whippy Dip*` ,`United Dairy Farmers` ,`Uniquely You Hair Design` ,`Vernon-Bell Insurance Agency` ,`Veterans of Foreign Wars` ,`Voorhis, Slone, Welsh, & Crossland – Architects, Inc.*` ,`Wags & Whiskers` ,`WallDogs – The Mason Sign Company` ,`Webb Law Offices LLC` ,`Western Union` ,`Wildflower Café*` ,`Yost Pharmacy*`];
var arrBusinesses = [];
var arrMembers = [];
for (var i = 0; i < arrAll.length; i++) {
    console.log(arrAll[i]);
    if (arrAll[i].includes("*")) {
        arrMembers.push(arrAll[i].substring(0, arrAll[i].length - 1));
    }
    else {
        arrBusinesses.push(arrAll[i]);
    }
}
function containsSpecial(mString) {
    return mString.includes("*");
}
function removeEnding(eString) {
    return eString.substring(0, eString.length - 1);
}
function emptyFunc(eString) {
    return eString;
}
var allMaker = new ArrayWriter(arrAll);
allMaker.writeArrayConditionalModifiable("<li style=\"color:#FF6B00;\">","</li>","<li style=\"color:#00A131;\">","</li>",containsSpecial,removeEnding,emptyFunc);
