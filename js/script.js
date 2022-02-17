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
        setValue("","total-expenses");
        setValue("","toal-balance");

    }else if( totalIncome>0 && foodCostValue>=0 && rentAmountValue>=0  && clothesAmountValue>=0){
        setValue(totalCost,"total-expenses");
        setValue(currentbalance,"toal-balance");
        setValue("","calculate-error");
    }else{
        setValue("","total-expenses");
        setValue("","toal-balance");
        setValue("Please Enter Number value","calculate-error");
    }
    
    

})


document.getElementById("save-btn").addEventListener("click",function(){
    const percentageValue=getInputValue("save-money-input");
    console.log(percentageValue);
})