
//extra memory cost calculation and showing

//create a common function for reducing extra code
function commonMemoreyPrice(condition){
    const memoryPrice=document.getElementById('memory-price');
    if(condition=='8GB memory price'){
        memoryPrice.innerText="00";
    }
    else if(condition=='16GB memory price'){
        memoryPrice.innerText="180";
    }
}

const memoryIdOf8GB=document.getElementById('8GBmemory-select')
memoryIdOf8GB.addEventListener('click',function(){
    commonMemoreyPrice('8GB memory price')
    calculationOfTotal()
})

const memoryIdOf16GB=document.getElementById('16GBmemory-select')
memoryIdOf16GB.addEventListener('click',function(){
    commonMemoreyPrice('16GB memory price')
    calculationOfTotal()
 
})


//extra storage calculation and showing

//create a common function to reduce extra code
function commonStoragePrice(condition){
    const storagePrice=document.getElementById('storage-price');
    if(condition=='216GB storage price'){
        storagePrice.innerText="00";
    }
    else if(condition=='512GB storage price'){
        storagePrice.innerText="100";
    }
    else if(condition=='1TB storage price'){
        storagePrice.innerText="180";
    }
}

 const storage256Gb=document.getElementById('256GB-Storage-Input')
 storage256Gb.addEventListener('click',function(){
   commonStoragePrice('216GB storage price')
   calculationOfTotal()
})

 const storage512Gb=document.getElementById('512GB-Storage-Input')
 storage512Gb.addEventListener('click',function(){
commonStoragePrice('512GB storage price')
  calculationOfTotal()
})

 const storage1Tb=document.getElementById('1TB-Storage-Input')
 storage1Tb.addEventListener('click',function(){
    commonStoragePrice('1TB storage price')
  calculationOfTotal()
})


//delivary calculation and showing 

//create a common function to reduce extra code
function commonDelivaryCost(condition){
    const delivaryCost=document.getElementById('delivary-cost')
    if(condition=='Free Delivary'){
        delivaryCost.innerText="00";
    }
    else if(condition=='Cost Delivary'){
        delivaryCost.innerText="20";
    }
}
    const freeDelivary=document.getElementById('free-delivary')
    freeDelivary.addEventListener('click',function(){
        commonDelivaryCost('Free Delivary')
        calculationOfTotal()
    })
    const costDelivary=document.getElementById('cost-delivary')
    costDelivary.addEventListener('click',function(){
        commonDelivaryCost('Cost Delivary')
        calculationOfTotal()
    })
 
//calculation of total cost
function calculationOfTotal(){

    const fixedCost=document.getElementById('fixed-price').innerText;
    const extraMemoryCost=document.getElementById('memory-price').innerText;
    const extraStorageCost=document.getElementById('storage-price').innerText;
    const delivaryCost=document.getElementById('delivary-cost').innerText;
    
    const totalCostOfAmount=parseFloat(fixedCost) + parseFloat(extraMemoryCost) + parseFloat(extraStorageCost) + parseFloat(delivaryCost);

    const totalCostValue=document.getElementById('total-cost');
    totalCostValue.innerText=totalCostOfAmount;

    const priceInAdditionalPart=document.getElementById('discount-price');
    priceInAdditionalPart.innerText=totalCostOfAmount;
    return priceInAdditionalPart.innerText;
}

//bonous part 
const promoButton=document.getElementById('promo-code-button').addEventListener('click',function(){

    const promoCodeInput=document.getElementById('promo-code-input');
    const promoCodeInputValue=promoCodeInput.value;
    if(promoCodeInputValue=='stevekaku'){
        const promoCodeDiscount=document.getElementById('discount-price');
        const discountValue=parseFloat(promoCodeDiscount.innerText)*0.8;
        promoCodeDiscount.innerText=discountValue;
    }
    //clear input value
    promoCodeInput.value='';
})