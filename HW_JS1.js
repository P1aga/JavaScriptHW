let item_1 = 5 
let item_2 = 3
let item_3 = item_1 + item_2
//console.log (item_3)
let item_4 ="Yolochka"
//console.log("Yolochka")
let item_5 = item_3
//console.log(item_5)
let item_6 = 15
let item_6_type = typeof(item_6)
//console.log ("item_6 ==",typeof(item_6), "/item_6_type ——" , typeof(item_6_type))
let item_7 = item_6 + ""
//console.log ("item_7 ==",typeof(item_7))
let item_7_type = typeof(item_7)
//console.log ("item_7 ==",typeof(item_7), "/item_7_type ——" , typeof(item_7_type))



let age_1
let age_2
let age_3
age_1 = 10
age_2 = 18
age_3 = 60
let ban = " “You don’t have access cause your age is ” + age + “ It’s less then 18” " ;
let bon = "Welcome !"
let bin = "Keep calm and look Culture channel"
let ben = "Technical work"
let bep = 'Неверный тип данных'
if (age_1 < age_2) {
  //  console.log(ban);
} else if (age_1 >= age_2 && age_1 < age_3)
{console.log(bon) }
 else if (age_1 > age_3) {console.log(bin) }
else {console.log(ben) }
 
   const checkAge = function(age) {
    if(isNaN(age) || !age){
    console.log(bep)}
     else if (age < 18) 
     {console.log(ban)
     }else if (age >= 18 && age < 60) 
     {console.log(bon) }
      else if (age >= 60) 
     {console.log(bin) }
     else   
     {console.log(ben)}
 }
     checkAge(17)
     checkAge(18)
     checkAge(61)
     checkAge("zzc")
     checkAge("23")