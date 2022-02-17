function getFloatVlue(inputValue){
    const inputNumberValue=parseFloat(inputValue);
    return inputNumberValue;
}

function getInputValue(inputId){

    const inputValueSelect=document.getElementById(inputId).value;
    const Numbervalue=getFloatVlue(inputValueSelect);
    return Numbervalue;
}
function setValue(setValue,setId){
    document.getElementById(setId).innerText=setValue;
}

document.getElementById("calculate-btn").addEventListener("click", function(e) {
    const totalIncome=getInputValue("total-income");
    const foodCostValue=getInputValue("food-cost");
    const rentAmountValue=getInputValue("rent-amount");
    const clothesAmountValue=getInputValue("clothes-cost");
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

    }
    else if(  foodCostValue>=0 && rentAmountValue>=0  && clothesAmountValue>=0){
        setValue(totalCost,"total-expenses");
        setValue(currentbalance,"toal-balance");
        setValue("","calculate-error");
    }else{
        setValue("0","total-expenses");
        setValue("0","toal-balance");
        setValue("Enter valid Expenses value","calculate-error");
    }
    
    

})

// function getInnerTexValue(innertextId){
//   const textValue=document.getElementById(innertextId).innerText;
//   const numberTextValue=getFloatVlue(textValue);
//   return numberTextValue;
// }
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
        setValue(" Enter Number 1 to 100","save-btn-error");
    }
})