var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Ad = (function () {
    function Ad(t, o, cn, p, a, i, c) {
        this.title = t;
        this.owner = o;
        this.contact_num = cn;
        this.price = p;
        this.area = a;
        this.img = i;
        this.category = c;
    }
    return Ad;
}());
var Vehicle = (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle(t, o, cn, p, a, i, c, b, m, kms, f) {
        _super.call(this, t, o, cn, p, a, i, c);
        this.brand = b;
        this.model = m;
        this.kms_driven = kms;
        this.features = f;
    }
    return Vehicle;
}(Ad));
var Mob_Tab = (function (_super) {
    __extends(Mob_Tab, _super);
    function Mob_Tab(t, o, cn, p, a, i, c, b, w, ac, d) {
        _super.call(this, t, o, cn, p, a, i, c);
        this.brand = b;
        this.warrenty = w;
        this.accessories = ac;
        this.details = d;
    }
    return Mob_Tab;
}(Ad));
var Home_Applicances = (function (_super) {
    __extends(Home_Applicances, _super);
    function Home_Applicances(t, o, cn, p, a, i, c, ty, cd) {
        _super.call(this, t, o, cn, p, a, i, c);
        this.type = ty;
        this.condition_details = cd;
    }
    return Home_Applicances;
}(Ad));
var ad_arr = []; //array of ads
//objects of Different adds
var v1 = new Vehicle("Vitz 2006 for Sale!", "QMZ", 3475929, 8000000, "Karachi", "img/c4.png", "vehicle", "Vitz", 2006, 90000, "In new Condition!");
var v2 = new Vehicle("Silver Toyota 2003", "Amjad", 13278291, 650000, "Lahore", "img/c1.png", "vehicle", "Toyota", 2004, 800000, "Excellent Working Condition! Only serious buyers contact please.");
var v3 = new Vehicle("Civic 2013 Brand New Condition", "Mahtab", 37892611, 1050000, "Faislabad", "img/c2.png", "vehicle", "Honda", 2013, 50000, "Brand new condition. Price is negotiable.");
var v4 = new Vehicle("Classic Red Nissan ", "Raheel", 13278291, 650000, "Lahore", "img/c3.png", "vehicle", "Toyota", 2004, 800000, "Urgent for sale. Only serious buyers contact please.");
var v5 = new Vehicle("Cab 10-Seater", "Arslan", 13278291, 650000, "Karachi", "img/c5.png", "vehicle", "Toyota", 2004, 800000, "Excellent Condition! Urgent for sale. Only serious buyers contact please. ");
var mt1 = new Mob_Tab("Samsung Galaxy S1", "Arslan", 13278291, 15000, "Karachi", "img/m1.png", "Mobile&Tablets", "Samsung", "8 months warrenty", "With Box, ear-phones, charger, 8GB-memory card", "Price Negotiable. In new Condition!");
var mt2 = new Mob_Tab("Noir i2", "Sajid", 13278291, 7000, "Lahore", "img/m2.png", "Mobile&Tablets", "Q-Mobile", "3 months warrenty", "With Box, ear-phones and charger", "In excellent Condition! Only serious buyers contact please.");
var mt3 = new Mob_Tab("Samsung Tablet", "Amjad", 13278291, 17000, "Faisalabad", "img/m3.png", "Mobile&Tablets", "Samsung", "No warrenty", "With Box and charger", "Urgent for Sale.");
var mt4 = new Mob_Tab("Sony Noir-i5 ", "Raheel", 13278291, 12000, "Abbotabad", "img/m4.png", "Mobile&Tablets", "Sony Ericcson", "12 months warrenty", "With complete accessories!", "Only 3 months used! In brand new Condition!");
var mt5 = new Mob_Tab("Q-Mobile qN-174", "Arslan", 13278291, 5000, "Karachi", "img/m5.png", "Mobile&Tablets", "Q-Mobile", "No warrenty", "Box, ear-phones and charger available", "In new Condition!");
var h1 = new Home_Applicances("Microwave Oven", "Arslan", 13278291, 1500, "Karachi", "img/a1.png", "HomeApps", "Microwave", "In Excellent working conditions!");
var h2 = new Home_Applicances("5-in-1 Cooking and Baking Oven", "Sajid", 13278291, 3000, "Lahore", "img/a2.png", "HomeApps", "Oven", "Brand New Oven, only used for 2 years. Price Negotiable.");
var h3 = new Home_Applicances("Set of Two Washing Machines", "Amjad", 13278291, 17000, "Faisalabad", "img/a3.png", "HomeApps", "Washing Machine", "Available for whole-Sale.");
var h4 = new Home_Applicances("King Size Bed", "Raheel", 13278291, 12000, "Abbotabad", "img/a4.png", "HomeApps", "Furniture", "Excellent conditions!");
var h5 = new Home_Applicances("Food Factory-Complete Set", "Arslan", 13278291, 2500, "Karachi", "img/a5.png", "HomeApps", "Sofa", "Un-used Pack. Available for Sale.");
ad_arr = [v1, v2, v3, v4, v5, mt1, mt2, mt3, mt4, mt5, h1, h2, h3, h4, h5];
//console.log(ad_arr[0]);  //to print whole object
console.log(ad_arr[0].brand); //to print object's particular property!!
var e;
var c = 0;
//DISPLAYING ALL ADS:
for (var i = 0; i < ad_arr.length; i++) {
    if (ad_arr[i].category == "vehicle") {
        e = '<div class="panel panel-default">' +
            '<div class="panel-heading row">' +
            '<img src="' + ad_arr[i].img + '"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>'
            +
                '<div class="panel-title row" style=" font-size: 23px;">' +
            '&nbsp <strong>' + ad_arr[i].title + '</strong>' +
            '<br>' +
            '&nbsp <strong style="font-size: 15px;"> Price: ' + ad_arr[i].price + '</strong>&nbsp&nbsp' +
            '&nbsp <strong style="font-size: 15px;">Location: ' + ad_arr[i].area + '</strong><br>' +
            '<div id="collapse' + c + '" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">' +
            '<div class="panel-body">' +
            '<strong>' +
            "Owner: " + ad_arr[i].owner +
            "<br> Contact Number:&nbsp " + ad_arr[i].contact_num + '<br>' +
            "Brand: " + ad_arr[i].brand +
            "<br> Model: " + ad_arr[i].model + '<br>' +
            "Kms Driven: " + ad_arr[i].kms_driven +
            "<br> Features: " + ad_arr[i].features + '<br>' +
            '</div>' +
            '</div>' +
            '<button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" href="#collapse' + c + '">Details</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        document.getElementById("allAds").innerHTML += e;
    }
    else if (ad_arr[i].category == "Mobile&Tablets") {
        e = '<div class="panel panel-default">' +
            '<div class="panel-heading row">' +
            '<img src="' + ad_arr[i].img + '"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>'
            +
                '<div class="panel-title row" style=" font-size: 23px;">' +
            '&nbsp <strong>' + ad_arr[i].title + '</strong>' +
            '<br>' +
            '&nbsp <strong style="font-size: 15px;"> Price: ' + ad_arr[i].price + '</strong>&nbsp&nbsp' +
            '&nbsp <strong style="font-size: 15px;">Location: ' + ad_arr[i].area + '</strong><br>' +
            '<div id="collapse' + c + '" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">' +
            '<div class="panel-body">' +
            '<strong>' +
            "Owner: " + ad_arr[i].owner +
            "<br> Contact Number:&nbsp " + ad_arr[i].contact_num + '<br>' +
            "Brand: " + ad_arr[i].brand +
            "<br> Warrenty: " + ad_arr[i].warrenty + '<br>' +
            "Accessories: " + ad_arr[i].accessories +
            "<br> Details: " + ad_arr[i].details + '<br>' +
            '</div>' +
            '</div>' +
            '<button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" href="#collapse' + c + '">Details</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        document.getElementById("allAds").innerHTML += e;
    }
    else if (ad_arr[i].category == "HomeApps") {
        e = '<div class="panel panel-default">' +
            '<div class="panel-heading row">' +
            '<img src="' + ad_arr[i].img + '"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>'
            +
                '<div class="panel-title row" style=" font-size: 23px;">' +
            '&nbsp <strong>' + ad_arr[i].title + '</strong>' +
            '<br>' +
            '&nbsp <strong style="font-size: 15px;"> Price: ' + ad_arr[i].price + '</strong>&nbsp&nbsp' +
            '&nbsp <strong style="font-size: 15px;">Location: ' + ad_arr[i].area + '</strong><br>' +
            '<div id="collapse' + c + '" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">' +
            '<div class="panel-body">' +
            '<strong>' +
            "Owner: " + ad_arr[i].owner +
            "<br> Contact Number:&nbsp " + ad_arr[i].contact_num + '<br>' +
            "Type: " + ad_arr[i].type +
            "<br> Condition Details: " + ad_arr[i].condition_details + '<br>' +
            '</div>' +
            '</div>' +
            '<button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" href="#collapse' + c + '">Details</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        document.getElementById("allAds").innerHTML += e;
    }
    c++;
}
//DISPLAYING ONLY VEHICLES
for (var i_1 = 0; i_1 <= ad_arr.length; i_1++) {
    if (ad_arr[i_1].category == "vehicle") {
        e = '<div class="panel panel-default">' +
            '<div class="panel-heading row">' +
            '<img src="' + ad_arr[i_1].img + '"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>'
            +
                '<div class="panel-title row" style=" font-size: 23px;">' +
            '&nbsp <strong>' + ad_arr[i_1].title + '</strong>' +
            '<br>' +
            '&nbsp <strong style="font-size: 15px;"> Price: ' + ad_arr[i_1].price + '</strong>&nbsp&nbsp' +
            '&nbsp <strong style="font-size: 15px;">Location: ' + ad_arr[i_1].area + '</strong><br>' +
            '<div id="collapse' + c + '" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">' +
            '<div class="panel-body">' +
            '<strong>' +
            "Owner: " + ad_arr[i_1].owner +
            "<br> Contact Number:&nbsp " + ad_arr[i_1].contact_num + '<br>' +
            "Brand: " + ad_arr[i_1].brand +
            "<br> Model: " + ad_arr[i_1].model + '<br>' +
            "Kms Driven: " + ad_arr[i_1].kms_driven +
            "<br> Features: " + ad_arr[i_1].features + '<br>' +
            '</div>' +
            '</div>' +
            '<button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" href="#collapse' + c + '">Details</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        document.getElementById("v").innerHTML += e;
    }
    else if (ad_arr[i_1].category == "Mobile&Tablets") {
        e = '<div class="panel panel-default">' +
            '<div class="panel-heading row">' +
            '<img src="' + ad_arr[i_1].img + '"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>'
            +
                '<div class="panel-title row" style=" font-size: 23px;">' +
            '&nbsp <strong>' + ad_arr[i_1].title + '</strong>' +
            '<br>' +
            '&nbsp <strong style="font-size: 15px;"> Price: ' + ad_arr[i_1].price + '</strong>&nbsp&nbsp' +
            '&nbsp <strong style="font-size: 15px;">Location: ' + ad_arr[i_1].area + '</strong><br>' +
            '<div id="collapse' + c + '" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">' +
            '<div class="panel-body">' +
            '<strong>' +
            "Owner: " + ad_arr[i_1].owner +
            "<br> Contact Number:&nbsp " + ad_arr[i_1].contact_num + '<br>' +
            "Brand: " + ad_arr[i_1].brand +
            "<br> Warrenty: " + ad_arr[i_1].warrenty + '<br>' +
            "Accessories: " + ad_arr[i_1].accessories +
            "<br> Details: " + ad_arr[i_1].details + '<br>' +
            '</div>' +
            '</div>' +
            '<button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" href="#collapse' + c + '">Details</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        document.getElementById("mm").innerHTML += e;
    }
    else if (ad_arr[i_1].category == "HomeApps") {
        e = '<div class="panel panel-default">' +
            '<div class="panel-heading row">' +
            '<img src="' + ad_arr[i_1].img + '"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>'
            +
                '<div class="panel-title row" style=" font-size: 23px;">' +
            '&nbsp <strong>' + ad_arr[i_1].title + '</strong>' +
            '<br>' +
            '&nbsp <strong style="font-size: 15px;"> Price: ' + ad_arr[i_1].price + '</strong>&nbsp&nbsp' +
            '&nbsp <strong style="font-size: 15px;">Location: ' + ad_arr[i_1].area + '</strong><br>' +
            '<div id="collapse' + c + '" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">' +
            '<div class="panel-body">' +
            '<strong>' +
            "Owner: " + ad_arr[i_1].owner +
            "<br> Contact Number:&nbsp " + ad_arr[i_1].contact_num + '<br>' +
            "Type: " + ad_arr[i_1].type +
            "<br> Condition Details: " + ad_arr[i_1].condition_details + '<br>' +
            '</div>' +
            '</div>' +
            '<button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" href="#collapse' + c + '">Details</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        document.getElementById("hh").innerHTML += e;
    }
    c++;
}
