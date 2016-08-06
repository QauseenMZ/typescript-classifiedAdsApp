abstract class Ad{
    
    title: string;
    owner: string;
    contact_num: number;
    price: number;
    area: string;
    img: string;
    category: string; 
    
    constructor(t:string, o: string, cn: number, p:number, a:string, i:string, c:string){
        this.title= t;
        this.owner=o;
        this.contact_num= cn;
        this.price=p;
        this.area=a;
        this.img=i;
        this.category=c;
    }
}

class Vehicle extends Ad{
    brand: string;
    model: number;
    kms_driven: number;
    features: string;
    
    constructor(t:string, o: string, cn: number, p:number, a:string, i:string, c:string, b:string, m:number, kms:number,f:string){
        super(t,o,cn,p,a,i,c);
        this.brand=b;
        this.model=m;
        this.kms_driven=kms;
        this.features=f;    
    }
}

class Mob_Tab extends Ad{
    brand: string;
    warrenty: string;
    accessories: string;
    details: string;
    
    constructor(t:string, o: string, cn: number, p:number, a:string, i:string, c:string, b:string, w:string, ac:string, d:string){
        super(t,o,cn,p,a,i,c);
        this.brand=b;
        this.warrenty=w;
        this.accessories=ac;
        this.details=d;    
    }
}

class Home_Applicances extends Ad{
    type: string;
    condition_details: string;
    
    constructor(t:string, o: string, cn: number, p:number, a:string, i:string, c:string, ty:string, cd:string){
        super(t,o,cn,p,a,i,c);
        this.type=ty;
        this.condition_details=cd;
    }
}

let ad_arr: any= []; //array of ads

//objects of Different adds
let v1: Vehicle= new Vehicle("Vitz 2006 for Sale!","QMZ",3475929,8000000,"Karachi","img/c4.png","vehicle","Vitz",2006,90000,"In new Condition!");
let v2: Vehicle= new Vehicle("Silver Toyota 2003","Amjad",13278291,650000,"Lahore","img/c1.png","vehicle","Toyota",2004,800000,"Excellent Working Condition! Only serious buyers contact please.");
let v3: Vehicle= new Vehicle("Civic 2013 Brand New Condition","Mahtab",37892611,1050000,"Faislabad","img/c2.png","vehicle","Honda",2013,50000,"Brand new condition. Price is negotiable.");
let v4: Vehicle= new Vehicle("Classic Red Nissan ","Raheel",13278291,650000,"Lahore","img/c3.png","vehicle","Toyota",2004,800000,"Urgent for sale. Only serious buyers contact please.");
let v5: Vehicle= new Vehicle("Cab 10-Seater","Arslan",13278291,650000,"Karachi","img/c5.png","vehicle","Toyota",2004,800000,"Excellent Condition! Urgent for sale. Only serious buyers contact please. ");

let mt1: Mob_Tab= new Mob_Tab("Samsung Galaxy S1","Arslan",13278291,15000,"Karachi","img/m1.png","Mobile&Tablets","Samsung","8 months warrenty","With Box, ear-phones, charger, 8GB-memory card","Price Negotiable. In new Condition!");
let mt2: Mob_Tab= new Mob_Tab("Noir i2","Sajid",13278291,7000,"Lahore","img/m2.png","Mobile&Tablets","Q-Mobile","3 months warrenty","With Box, ear-phones and charger","In excellent Condition! Only serious buyers contact please.");
let mt3: Mob_Tab= new Mob_Tab("Samsung Tablet","Amjad",13278291,17000,"Faisalabad","img/m3.png","Mobile&Tablets","Samsung","No warrenty","With Box and charger","Urgent for Sale.");
let mt4: Mob_Tab= new Mob_Tab("Sony Noir-i5 ","Raheel",13278291,12000,"Abbotabad","img/m4.png","Mobile&Tablets","Sony Ericcson","12 months warrenty","With complete accessories!","Only 3 months used! In brand new Condition!");
let mt5: Mob_Tab= new Mob_Tab("Q-Mobile qN-174","Arslan",13278291,5000,"Karachi","img/m5.png","Mobile&Tablets","Q-Mobile","No warrenty","Box, ear-phones and charger available","In new Condition!");

let h1: Home_Applicances= new Home_Applicances("Microwave Oven","Arslan",13278291,1500,"Karachi","img/a1.png","HomeApps","Microwave","In Excellent working conditions!");
let h2: Home_Applicances= new Home_Applicances("5-in-1 Cooking and Baking Oven","Sajid",13278291,3000,"Lahore","img/a2.png","HomeApps","Oven","Brand New Oven, only used for 2 years. Price Negotiable.");
let h3: Home_Applicances= new Home_Applicances("Set of Two Washing Machines","Amjad",13278291,17000,"Faisalabad","img/a3.png","HomeApps","Washing Machine","Available for whole-Sale.");
let h4: Home_Applicances= new Home_Applicances("King Size Bed","Raheel",13278291,12000,"Abbotabad","img/a4.png","HomeApps","Furniture","Excellent conditions!");
let h5: Home_Applicances= new Home_Applicances("Food Factory-Complete Set","Arslan",13278291,2500,"Karachi","img/a5.png","HomeApps","Sofa","Un-used Pack. Available for Sale.");

ad_arr= [v1,v2,v3,v4,v5,mt1,mt2,mt3,mt4,mt5,h1,h2,h3,h4,h5];

//console.log(ad_arr[0]);  //to print whole object
console.log(ad_arr[0].brand); //to print object's particular property!!

let e: string;
let c: number=0;

//DISPLAYING ALL ADS:

for (var i = 0; i < ad_arr.length; i++) {
    
    if (ad_arr[i].category == "vehicle") {
    
        e= '<div class="panel panel-default">'+
                            '<div class="panel-heading row">'+
                                '<img src="'+ad_arr[i].img+'"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>'
                                +
                                '<div class="panel-title row" style=" font-size: 23px;">'+
                                '&nbsp <strong>'+ad_arr[i].title+'</strong>'+ //tittle                                
                                '<br>'+
                                '&nbsp <strong style="font-size: 15px;"> Price: ' +ad_arr[i].price+'</strong>&nbsp&nbsp'+
                                '&nbsp <strong style="font-size: 15px;">Location: ' +ad_arr[i].area+'</strong><br>'+
                                
                                '<div id="collapse'+c+'" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">'+
                            '<div class="panel-body">'+
                            '<strong>'+
                                    "Owner: " +ad_arr[i].owner+ //inner part
                                    "<br> Contact Number:&nbsp " +ad_arr[i].contact_num+'<br>'+
                                    "Brand: " +ad_arr[i].brand+
                                    "<br> Model: " +ad_arr[i].model+'<br>'+
                                    "Kms Driven: " +ad_arr[i].kms_driven+
                                    "<br> Features: " +ad_arr[i].features+'<br>'+
                                    '</div>' + 
                                    '</div>'+
                                    
                                '<button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" href="#collapse'+c+'">Details</button>'+
                                
                                    '</div>'+
                            '</div>'+
                        '</div>';
        document.getElementById("allAds").innerHTML += e;
    }
    
    else if (ad_arr[i].category == "Mobile&Tablets") {
    
        e= '<div class="panel panel-default">'+
                            '<div class="panel-heading row">'+
                                '<img src="'+ad_arr[i].img+'"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>'
                                +
                                '<div class="panel-title row" style=" font-size: 23px;">'+
                                '&nbsp <strong>'+ad_arr[i].title+'</strong>'+ //tittle                                
                                '<br>'+
                                '&nbsp <strong style="font-size: 15px;"> Price: ' +ad_arr[i].price+'</strong>&nbsp&nbsp'+
                                '&nbsp <strong style="font-size: 15px;">Location: ' +ad_arr[i].area+'</strong><br>'+
                                
                                '<div id="collapse'+c+'" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">'+
                            '<div class="panel-body">'+
                            '<strong>'+
                                    "Owner: " +ad_arr[i].owner+ //inner part
                                    "<br> Contact Number:&nbsp " +ad_arr[i].contact_num+'<br>'+
                                    "Brand: " +ad_arr[i].brand+
                                    "<br> Warrenty: " +ad_arr[i].warrenty+'<br>'+
                                    "Accessories: " +ad_arr[i].accessories+
                                    "<br> Details: " +ad_arr[i].details+'<br>'+
                                    '</div>' + 
                                    '</div>'+
                                    
                                '<button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" href="#collapse'+c+'">Details</button>'+
                                
                                    '</div>'+
                            '</div>'+
                        '</div>';
        document.getElementById("allAds").innerHTML += e;
    }
    
    
    else if (ad_arr[i].category == "HomeApps") {
    
        e= '<div class="panel panel-default">'+
                            '<div class="panel-heading row">'+
                                '<img src="'+ad_arr[i].img+'"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>'
                                +
                                '<div class="panel-title row" style=" font-size: 23px;">'+
                                '&nbsp <strong>'+ad_arr[i].title+'</strong>'+ //tittle                                
                                '<br>'+
                                '&nbsp <strong style="font-size: 15px;"> Price: ' +ad_arr[i].price+'</strong>&nbsp&nbsp'+
                                '&nbsp <strong style="font-size: 15px;">Location: ' +ad_arr[i].area+'</strong><br>'+
                                
                                '<div id="collapse'+c+'" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">'+
                            '<div class="panel-body">'+
                            '<strong>'+
                                    "Owner: " +ad_arr[i].owner+ //inner part
                                    "<br> Contact Number:&nbsp " +ad_arr[i].contact_num+'<br>'+
                                    "Type: " +ad_arr[i].type+
                                    "<br> Condition Details: " +ad_arr[i].condition_details+'<br>'+
                                    '</div>' + 
                                    '</div>'+
                                    
                                '<button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" href="#collapse'+c+'">Details</button>'+
                                
                                    '</div>'+
                            '</div>'+
                        '</div>';
        document.getElementById("allAds").innerHTML += e;
    }
    c++;
}

//DISPLAYING ONLY VEHICLES

for (let i = 0; i <= ad_arr.length; i++) {
    
    if (ad_arr[i].category == "vehicle") {
  
        e= '<div class="panel panel-default">'+
                            '<div class="panel-heading row">'+
                                '<img src="'+ad_arr[i].img+'"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>'
                                +
                                '<div class="panel-title row" style=" font-size: 23px;">'+
                                '&nbsp <strong>'+ad_arr[i].title+'</strong>'+ //tittle                                
                                '<br>'+
                                '&nbsp <strong style="font-size: 15px;"> Price: ' +ad_arr[i].price+'</strong>&nbsp&nbsp'+
                                '&nbsp <strong style="font-size: 15px;">Location: ' +ad_arr[i].area+'</strong><br>'+
                                
                                '<div id="collapse'+c+'" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">'+
                            '<div class="panel-body">'+
                            '<strong>'+
                                    "Owner: " +ad_arr[i].owner+ //inner part
                                    "<br> Contact Number:&nbsp " +ad_arr[i].contact_num+'<br>'+
                                    "Brand: " +ad_arr[i].brand+
                                    "<br> Model: " +ad_arr[i].model+'<br>'+
                                    "Kms Driven: " +ad_arr[i].kms_driven+
                                    "<br> Features: " +ad_arr[i].features+'<br>'+
                                    '</div>' + 
                                    '</div>'+
                                    
                                '<button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" href="#collapse'+c+'">Details</button>'+
                                
                                    '</div>'+
                            '</div>'+
                        '</div>';
        document.getElementById("v").innerHTML += e;
      
    }
    
    else if (ad_arr[i].category == "Mobile&Tablets") {
    
       e= '<div class="panel panel-default">'+
                            '<div class="panel-heading row">'+
                                '<img src="'+ad_arr[i].img+'"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>'
                                +
                                '<div class="panel-title row" style=" font-size: 23px;">'+
                                '&nbsp <strong>'+ad_arr[i].title+'</strong>'+ //tittle                                
                                '<br>'+
                                '&nbsp <strong style="font-size: 15px;"> Price: ' +ad_arr[i].price+'</strong>&nbsp&nbsp'+
                                '&nbsp <strong style="font-size: 15px;">Location: ' +ad_arr[i].area+'</strong><br>'+
                                
                                '<div id="collapse'+c+'" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">'+
                            '<div class="panel-body">'+
                            '<strong>'+
                                    "Owner: " +ad_arr[i].owner+ //inner part
                                    "<br> Contact Number:&nbsp " +ad_arr[i].contact_num+'<br>'+
                                    "Brand: " +ad_arr[i].brand+
                                    "<br> Warrenty: " +ad_arr[i].warrenty+'<br>'+
                                    "Accessories: " +ad_arr[i].accessories+
                                    "<br> Details: " +ad_arr[i].details+'<br>'+
                                    '</div>' + 
                                    '</div>'+
                                    
                                '<button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" href="#collapse'+c+'">Details</button>'+
                                
                                    '</div>'+
                            '</div>'+
                        '</div>';
        document.getElementById("mm").innerHTML += e;
    }
    
    else if (ad_arr[i].category == "HomeApps") {
    
        e= '<div class="panel panel-default">'+
                            '<div class="panel-heading row">'+
                                '<img src="'+ad_arr[i].img+'"  width="130" style=" max-height=30px;" class="img-responsive pull-right" alt="Cinque Terre"/>'
                                +
                                '<div class="panel-title row" style=" font-size: 23px;">'+
                                '&nbsp <strong>'+ad_arr[i].title+'</strong>'+ //tittle                                
                                '<br>'+
                                '&nbsp <strong style="font-size: 15px;"> Price: ' +ad_arr[i].price+'</strong>&nbsp&nbsp'+
                                '&nbsp <strong style="font-size: 15px;">Location: ' +ad_arr[i].area+'</strong><br>'+
                                
                                '<div id="collapse'+c+'" class="panel-collapse collapse" style="list-style:none; font-size: 15px;">'+
                            '<div class="panel-body">'+
                            '<strong>'+
                                    "Owner: " +ad_arr[i].owner+ //inner part
                                    "<br> Contact Number:&nbsp " +ad_arr[i].contact_num+'<br>'+
                                    "Type: " +ad_arr[i].type+
                                    "<br> Condition Details: " +ad_arr[i].condition_details+'<br>'+
                                    '</div>' + 
                                    '</div>'+
                                    
                                '<button type="button" style="margin-left:10px;" class="btn btn-info" data-toggle="collapse" href="#collapse'+c+'">Details</button>'+
                                
                                    '</div>'+
                            '</div>'+
                        '</div>';
        document.getElementById("hh").innerHTML += e;
    }
      c++;
}
