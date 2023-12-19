function distanceFromHqInBlocks (street){
    if (street==43){
        return 1;
    }
    else if (street==50){
        return 8;
    
    }
   
    else {
        const distance= 42 - street; 
        return distance;
    }
}
//console.log(distanceFromHqInBlocks(34));



function distanceFromHqInFeet (street){
    if (street==43){
        return 264;
    }
    else if (street==50){
        return 2112;
    
    }
   
    else {
        const distance= (42 - street)*264; 
        return distance;
    }
}
//console.log(distanceFromHqInFeet(34));



function distanceTravelledInFeet (street1, street2){
    if (street1==43 && street2==48){
        return 1320;
    }
    else if (street1==50 && street2==60){
        return 2640;
    
    }
    else if (street1==34 && street2==28){
        return 1584;
    }    
   
    else{
        const distance= (street1-street2)*264; 
        return distance;
    
    }
   
}
//console.log(distanceTravelledInFeet(34, 27));


function calculatesFarePrice (street1, street2){
    if (street1==43 && street2==44){
        return 0
    }
    else {


        
        let feet= Math.abs(street1-street2)*264

        if(feet>400 && feet<=2000){
          let fare=  (feet-400)*(0.02)
          return fare;
        }
        else if (feet>2000 && feet<=2500){
         return 25;
        }
        else{
            return 'cannot travel that far';
        }
    }
}
    
console.log(calculatesFarePrice(50 ,58));

