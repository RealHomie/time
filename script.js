var str = +prompt('How old are you ?')

str = Number(str)

if (str > 0 && str <= 18 ){
    alert('You are young, You need to study');
}else if (str > 18 && str <= 50){
    alert('You need to work');
}else if (str > 50  && str <= 59) {
    alert('Soon you are goin to retire');
}else if (str > 59 && str <= 100){
    alert('You are certified pensioner');
}else{
    alert('Something went wrong');
}

var time = +prompt('Insert any number from 0 to 23')

time = Number(time)

switch (time) {
    case 0 : 
    case 1 :
    case 2 :
    case 3 :
    case 4 :
    case 5 :
    case 6 : alert('2 pm at midnight'); break;
    case 7 : 
    case 8 :
    case 9 :
    case 10 : alert('10 am in the morning'); break;
    case 11 :
    case 12 :
    case 13 :
    case 14 :
    case 15 :
    case 16 :
    case 17 : alert('3 am in the morning'); break;
    case 18 : 
    case 19 : 
    case 20 :    
    case 21 :    
    case 22 :    
    case 23 : alert('8 pm midnight'); break; 

    default:
    alert('Something went wrong');
        break;
}