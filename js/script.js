// This funciton for get Float Number
function getFloatVlue(inputValue){
    const inputNumberValue=parseFloat(inputValue);
    return inputNumberValue;
}



// This funciton for get into id value and convert it float value
function getInputValue(inputId){

    const inputValueSelect=document.getElementById(inputId).value;
    
    if(isNaN(inputValueSelect)){
        return -1;
    }else{
        const Numbervalue=getFloatVlue(inputValueSelect);
        return Numbervalue;
    }
    
}



// This function for set  inner value
function setValue(setValue,setId){
    document.getElementById(setId).innerText=setValue;
}





// This funciton for calculation total expenses and balance
document.getElementById("calculate-btn").addEventListener("click", function(e) {
    const totalIncome=getInputValue("total-income");
    const foodCostValue=getInputValue("food-cost");
    const rentAmountValue=getInputValue("rent-amount");
    const clothesAmountValue=getInputValue("clothes-cost");
    if(totalIncome<1 || foodCostValue<0 || rentAmountValue<0 || clothesAmountValue<0){
        setValue("0","total-expenses");
        setValue("0","toal-balance");
        setValue("String or Negative number Not allow!!","calculate-error");

    }else{
    
    const totalCost=foodCostValue+rentAmountValue+clothesAmountValue;
    const currentbalance=totalIncome-totalCost;
     if((totalIncome<totalCost)){
        setValue("Expense over lap!!","calculate-error");
        setValue("0","total-expenses");
        setValue("0","toal-balance");

    }else if(!totalIncome>0){
        setValue("0","total-expenses");
        setValue("0","toal-balance");
        setValue("Please Enter valid income value","calculate-error");

    
     }else if(  foodCostValue>=0 && rentAmountValue>=0  && clothesAmountValue>=0){
        setValue(totalCost,"total-expenses");
        setValue(currentbalance,"toal-balance");
        setValue("","calculate-error");
    }else{
        setValue("0","total-expenses");
        setValue("0","toal-balance");
        setValue("Plese Enter valid Expenses value!!","calculate-error");
    } 
    }
    
})




// This funciton for calculation saving amount and remaining ammount
document.getElementById("save-btn").addEventListener("click",function(){
    const Balance=document.getElementById("toal-balance").innerText;
    const numericBalance=getFloatVlue(Balance);
    const percentageInputValue=getInputValue("save-money-input");
    const totalIncomeAmount=getInputValue("total-income");
    const percentageAmount=totalIncomeAmount *(percentageInputValue/100);
    const remainBalance=numericBalance-percentageAmount;
  

    if((percentageInputValue>0) && (percentageInputValue<=100)){
        
        if(numericBalance>=percentageAmount){
            setValue(percentageAmount,"saving-money");
            setValue(remainBalance,"remain-balance");
            setValue("","save-btn-error");

        }else{
            setValue("0","saving-money");
            setValue("0","remain-balance");
            setValue("Expense over lap!!","save-btn-error");

        }


    }else{
        setValue("0","saving-money");
        setValue("0","remain-balance");
        setValue("Please Enter Number 1 to 100","save-btn-error");
    }
})