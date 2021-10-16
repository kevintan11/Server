
var OS = {OS:document.getElementById('OS').value};
var Cost={Cost:document.getElementById('Cost').value};
var CostPerHour={CostPerHour:document.getElementById('CostPerHour').value};

function passvalue(){

  
    //saving to localStorage
    localStorage.setItem("OS", OS);
    localStorage.setItem('CostPerHour', JSON.stringify(CostPerHour));
    localStorage.setItem('Cost', JSON.stringify(Cost));
    

}


    

 
 
