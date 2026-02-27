// ========== МАТЕМАТИКА (1–50) ==========
function add_numbers(){let a=+prompt("Enter first number:");let b=+prompt("Enter second number:");alert("Sum = "+(a+b));}
function subtract_numbers(){let a=+prompt("Enter first number:");let b=+prompt("Enter second number:");alert("Difference = "+(a-b));}
function multiply_numbers(){let a=+prompt("Enter first number:");let b=+prompt("Enter second number:");alert("Product = "+(a*b));}
function divide_numbers(){let a=+prompt("Enter numerator:");let b=+prompt("Enter denominator:");alert("Quotient = "+(a/b));}
function mod_numbers(){let a=+prompt("Enter first number:");let b=+prompt("Enter second number:");alert("Remainder = "+(a%b));}
function power_number(){let base=+prompt("Enter base:");let exp=+prompt("Enter exponent:");alert("Result = "+(base**exp));}
function sqrt_number(){let a=+prompt("Enter number:");alert("Square root = "+Math.sqrt(a));}
function average_two(){let a=+prompt("Enter first number:");let b=+prompt("Enter second number:");alert("Average = "+((a+b)/2));}
function perimeter_square(){let side=+prompt("Enter side length:");alert("Perimeter = "+(4*side));}
function area_square(){let side=+prompt("Enter side length:");alert("Area = "+(side*side));}

function perimeter_rectangle(){let l=+prompt("Enter length:");let w=+prompt("Enter width:");alert("Perimeter = "+(2*(l+w)));}
function area_rectangle(){let l=+prompt("Enter length:");let w=+prompt("Enter width:");alert("Area = "+(l*w));}
function perimeter_triangle(){let a=+prompt("Side A:");let b=+prompt("Side B:");let c=+prompt("Side C:");alert("Perimeter = "+(a+b+c));}
function area_triangle(){let b=+prompt("Base:");let h=+prompt("Height:");alert("Area = "+(0.5*b*h));}
function circle_area(){let r=+prompt("Radius:");alert("Area = "+(Math.PI*r*r).toFixed(2));}
function circle_circumference(){let r=+prompt("Radius:");alert("Circumference = "+(2*Math.PI*r).toFixed(2));}
function max_of_two(){let a=+prompt("First number:");let b=+prompt("Second number:");alert("Max = "+Math.max(a,b));}
function min_of_two(){let a=+prompt("First number:");let b=+prompt("Second number:");alert("Min = "+Math.min(a,b));}
function abs_number(){let a=+prompt("Enter number:");alert("Absolute = "+Math.abs(a));}
function round_number(){let a=+prompt("Enter number:");alert("Rounded = "+Math.round(a));}

function floor_number(){let a=+prompt("Enter number:");alert("Floor = "+Math.floor(a));}
function ceil_number(){let a=+prompt("Enter number:");alert("Ceil = "+Math.ceil(a));}
function random_number(){alert("Random (0–1) = "+Math.random());}
function factorial_number(){let n=+prompt("Enter n:");let f=1;for(let i=1;i<=n;i++)f*=i;alert("Factorial = "+f);}
function sum_to_n(){let n=+prompt("Enter n:");let s=0;for(let i=1;i<=n;i++)s+=i;alert("Sum 1..n = "+s);}
function even_or_odd(){let n=+prompt("Enter number:");alert(n%2==0?"Even":"Odd");}
function multiply_three(){let a=+prompt("A:");let b=+prompt("B:");let c=+prompt("C:");alert("Result = "+(a*b*c));}
function average_three(){let a=+prompt("A:");let b=+prompt("B:");let c=+prompt("C:");alert("Average = "+((a+b+c)/3));}
function square_number(){let a=+prompt("Enter number:");alert("Square = "+(a*a));}
function cube_number(){let a=+prompt("Enter number:");alert("Cube = "+(a*a*a));}

function pythagoras(){let a=+prompt("Side A:");let b=+prompt("Side B:");alert("Hypotenuse = "+Math.sqrt(a*a+b*b));}
function percent_value(){let total=+prompt("Total:");let perc=+prompt("Percent:");alert("Value = "+(total*perc/100));}
function compound_interest(){let p=+prompt("Principal:");let r=+prompt("Rate %:");let t=+prompt("Years:");alert("CI = "+(p*(1+r/100)**t).toFixed(2));}
function simple_interest(){let p=+prompt("Principal:");let r=+prompt("Rate %:");let t=+prompt("Years:");alert("SI = "+((p*r*t)/100).toFixed(2));}
function speed_calc(){let d=+prompt("Distance:");let t=+prompt("Time:");alert("Speed = "+(d/t));}
function time_calc(){let d=+prompt("Distance:");let s=+prompt("Speed:");alert("Time = "+(d/s));}
function distance_calc(){let s=+prompt("Speed:");let t=+prompt("Time:");alert("Distance = "+(s*t));}
function temperature_c_to_f(){let c=+prompt("Celsius:");alert("Fahrenheit = "+((c*9/5)+32));}
function temperature_f_to_c(){let f=+prompt("Fahrenheit:");alert("Celsius = "+(((f-32)*5)/9));}
function kg_to_pound(){let kg=+prompt("Kg:");alert("Pounds = "+(kg*2.20462));}

function pound_to_kg(){let p=+prompt("Pounds:");alert("Kg = "+(p/2.20462));}
function m_to_km(){let m=+prompt("Meters:");alert("Kilometers = "+(m/1000));}
function km_to_m(){let km=+prompt("Km:");alert("Meters = "+(km*1000));}
function cm_to_m(){let cm=+prompt("Cm:");alert("Meters = "+(cm/100));}
function m_to_cm(){let m=+prompt("Meters:");alert("Centimeters = "+(m*100));}

// ========== ВАЛЮТЫ (51–100) ==========
function euro_to_dollar(){let eur=+prompt("EUR:");alert("USD = "+(eur*1.1));}
function dollar_to_euro(){let usd=+prompt("USD:");alert("EUR = "+(usd/1.1));}
function pound_to_dollar(){let gbp=+prompt("GBP:");alert("USD = "+(gbp*1.25));}
function dollar_to_pound(){let usd=+prompt("USD:");alert("GBP = "+(usd/1.25));}
function yen_to_dollar(){let jpy=+prompt("JPY:");alert("USD = "+(jpy*0.0068));}
function dollar_to_yen(){let usd=+prompt("USD:");alert("JPY = "+(usd/0.0068));}
function yuan_to_dollar(){let cny=+prompt("CNY:");alert("USD = "+(cny*0.14));}
function dollar_to_yuan(){let usd=+prompt("USD:");alert("CNY = "+(usd/0.14));}
function rupee_to_dollar(){let inr=+prompt("INR:");alert("USD = "+(inr*0.012));}
function dollar_to_rupee(){let usd=+prompt("USD:");alert("INR = "+(usd/0.012));}

function cad_to_usd(){let cad=+prompt("CAD:");alert("USD = "+(cad*0.74));}
function usd_to_cad(){let usd=+prompt("USD:");alert("CAD = "+(usd/0.74));}
function aud_to_usd(){let aud=+prompt("AUD:");alert("USD = "+(aud*0.67));}
function usd_to_aud(){let usd=+prompt("USD:");alert("AUD = "+(usd/0.67));}
function chf_to_usd(){let chf=+prompt("CHF:");alert("USD = "+(chf*1.12));}
function usd_to_chf(){let usd=+prompt("USD:");alert("CHF = "+(usd/1.12));}
function rub_to_usd(){let rub=+prompt("RUB:");alert("USD = "+(rub*0.011));}
function usd_to_rub(){let usd=+prompt("USD:");alert("RUB = "+(usd/0.011));}
function uzs_to_usd(){let uzs=+prompt("UZS:");alert("USD = "+(uzs*0.000083));}
function usd_to_uzs(){let usd=+prompt("USD:");alert("UZS = "+(usd/0.000083));}

function brl_to_usd(){let brl=+prompt("BRL:");alert("USD = "+(brl*0.20));}
function usd_to_brl(){let usd=+prompt("USD:");alert("BRL = "+(usd/0.20));}
function mxn_to_usd(){let mxn=+prompt("MXN:");alert("USD = "+(mxn*0.058));}
function usd_to_mxn(){let usd=+prompt("USD:");alert("MXN = "+(usd/0.058));}
function zar_to_usd(){let zar=+prompt("ZAR:");alert("USD = "+(zar*0.055));}
function usd_to_zar(){let usd=+prompt("USD:");alert("ZAR = "+(usd/0.055));}
function krw_to_usd(){let krw=+prompt("KRW:");alert("USD = "+(krw*0.00075));}
function usd_to_krw(){let usd=+prompt("USD:");alert("KRW = "+(usd/0.00075));}
function try_to_usd(){let tr=+prompt("TRY:");alert("USD = "+(tr*0.037));}
function usd_to_try(){let usd=+prompt("USD:");alert("TRY = "+(usd/0.037));}

function sek_to_usd(){let sek=+prompt("SEK:");alert("USD = "+(sek*0.095));}
function usd_to_sek(){let usd=+prompt("USD:");alert("SEK = "+(usd/0.095));}
function nok_to_usd(){let nok=+prompt("NOK:");alert("USD = "+(nok*0.094));}
function usd_to_nok(){let usd=+prompt("USD:");alert("NOK = "+(usd/0.094));}
function dkk_to_usd(){let dkk=+prompt("DKK:");alert("USD = "+(dkk*0.15));}
function usd_to_dkk(){let usd=+prompt("USD:");alert("DKK = "+(usd/0.15));}
function pln_to_usd(){let pln=+prompt("PLN:");alert("USD = "+(pln*0.25));}
function usd_to_pln(){let usd=+prompt("USD:");alert("PLN = "+(usd/0.25));}
function huf_to_usd(){let huf=+prompt("HUF:");alert("USD = "+(huf*0.0028));}
function usd_to_huf(){let usd=+prompt("USD:");alert("HUF = "+(usd/0.0028));}
function czk_to_usd(){let czk=+prompt("CZK:");alert("USD = "+(czk*0.045));}
function usd_to_czk(){let usd=+prompt("USD:");alert("CZK = "+(usd/0.045));}
function ars_to_usd(){let ars=+prompt("ARS:");alert("USD = "+(ars*0.0012));}
function usd_to_ars(){let usd=+prompt("USD:");alert("ARS = "+(usd/0.0012));}
function egp_to_usd(){let egp=+prompt("EGP:");alert("USD = "+(egp*0.021));}
function usd_to_egp(){let usd=+prompt("USD:");alert("EGP = "+(usd/0.021));}
function thb_to_usd(){let thb=+prompt("THB:");alert("USD = "+(thb*0.028));}
function usd_to_thb(){let usd=+prompt("USD:");alert("THB = "+(usd/0.028));}
function vnd_to_usd(){let vnd=+prompt("VND:");alert("USD = "+(vnd*0.000041));}
function usd_to_vnd(){let usd=+prompt("USD:");alert("VND = "+(usd/0.000041));}

// ========== Создаём кнопки автоматически ==========
const mathFunctions=[
"add_numbers","subtract_numbers","multiply_numbers","divide_numbers","mod_numbers","power_number","sqrt_number","average_two","perimeter_square","area_square",
"perimeter_rectangle","area_rectangle","perimeter_triangle","area_triangle","circle_area","circle_circumference","max_of_two","min_of_two","abs_number","round_number",
"floor_number","ceil_number","random_number","factorial_number","sum_to_n","even_or_odd","multiply_three","average_three","square_number","cube_number",
"pythagoras","percent_value","compound_interest","simple_interest","speed_calc","time_calc","distance_calc","temperature_c_to_f","temperature_f_to_c","kg_to_pound",
"pound_to_kg","m_to_km","km_to_m","cm_to_m","m_to_cm"
];

const currencyFunctions=[
"euro_to_dollar","dollar_to_euro","pound_to_dollar","dollar_to_pound","yen_to_dollar","dollar_to_yen","yuan_to_dollar","dollar_to_yuan","rupee_to_dollar","dollar_to_rupee",
"cad_to_usd","usd_to_cad","aud_to_usd","usd_to_aud","chf_to_usd","usd_to_chf","rub_to_usd","usd_to_rub","uzs_to_usd","usd_to_uzs",
"brl_to_usd","usd_to_brl","mxn_to_usd","usd_to_mxn","zar_to_usd","usd_to_zar","krw_to_usd","usd_to_krw","try_to_usd","usd_to_try",
"sek_to_usd","usd_to_sek","nok_to_usd","usd_to_nok","dkk_to_usd","usd_to_dkk","pln_to_usd","usd_to_pln","huf_to_usd","usd_to_huf",
"czk_to_usd","usd_to_czk","ars_to_usd","usd_to_ars","egp_to_usd","usd_to_egp","thb_to_usd","usd_to_thb","vnd_to_usd","usd_to_vnd"
];

function makeButtons(divId, list){
  let div=document.getElementById(divId);
  list.forEach(f=>{
    let btn=document.createElement("button");
    btn.innerText=f;
    btn.onclick=()=>window[f]();
    div.appendChild(btn);
  });
}

makeButtons("math-buttons",mathFunctions);
makeButtons("currency-buttons",currencyFunctions);