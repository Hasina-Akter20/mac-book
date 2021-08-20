// update total price function 
function updateTotalPrice(updateTotal){
    const updateTotalText=document.getElementById('update-total');
    updateTotalText.innerText=updateTotal;
}
// total price function
function totalPrice() {
    const memory=document.getElementById('memory-price').innerText;
    const storage=document.getElementById('storage-price').innerText;
    const delivery=document.getElementById('delivery-price').innerText;
    const total=1299+parseInt(memory)+ parseInt(storage)+parseInt(delivery);
    document.getElementById('total-price').innerText=total;
    // update total 
    updateTotalPrice(total);
    
}
// price function 
function sectionCost(displayId,priceId,cost) {
    document.getElementById(displayId).addEventListener('click',function(){
        const section=document.getElementById(priceId);
        section.innerText=cost;
        totalPrice();
    })
}
// memory part 
sectionCost('first-memory-btn','memory-price',0) 
sectionCost('second-memory-btn','memory-price',180)

// Storage part 
sectionCost('first-storage-btn','storage-price',0) 
sectionCost('second-storage-btn','storage-price',100) 
sectionCost('third-storage-btn','storage-price',180) 

//delivery  part
sectionCost('first-delivery-btn','delivery-price',0) 
sectionCost('second-delivery-btn','delivery-price',20) 

// appy 

document.getElementById('appy-button').addEventListener('click',function(){
    const appyInput=document.getElementById('appy-input');
    const appyValue=appyInput.value;

    const totalPrice=document.getElementById('total-price').innerText;
    const total=parseInt(totalPrice);

    const updateTotalText=document.getElementById('update-total');
    if(appyValue=="stevekaku"){
        const updateTotal=total+ total*.2;
        updateTotalText.innerText=updateTotal;
    }
    else{
        const updateTotal=total;
        updateTotalText.innerText=updateTotal;
    }
   
    appyInput.value='';

})


