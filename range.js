let rangeInputValue = document.querySelectorAll(".range-input input");
let rangeSlider = document.querySelectorAll(".slider-container .price-slider");
let priceGap = 500;
let priceInput = document.querySelectorAll(".price-input input");
for (let i = 0; i < priceInput.length; i++) {
    priceInput[i].addEventListener("input" , e=>{
        let minp = parseInt(priceInput[0].value);
        let maxp = parseInt(priceInput[1].value);
        let diff = maxp - minp;
        if(minp < 0){
            alert("Price cant be less than 0");
            priceInput[0].value = 0;
            minp = 0;
        }
        if(maxp > 10000){
            alert("Price cant be less than 10000");
            priceInput[1].value = 10000;
            minp = 10000;
        }

        if(minp > maxp - priceGap){
            priceInput[0].value = maxp - priceGap;
            minp = maxp - priceGap;
            if(minp < 0 ){
                priceInput[0].value = 0;
                minp = 0;
            } 
        }
        rangeInputValue[0].value = minp;
        rangeInputValue[1].value = maxp
        updateSlider(minp , maxp)
    });

    // now adding event Listener to slider
    for (let i = 0; i < rangeInputValue.length; i++) {
        rangeInputValue[i].addEventListener("input" , e =>{
            let minval = parseInt(rangeInputValue[0].value);
            let maxval = parseInt(rangeInputValue[1].value);
            let diff = maxval - minval ;
            // checking the differnece so a proper gap maintain in min and max price
            if(diff < priceGap){
                // if it is min val that is less than gap
                if(e.target.className == "min-range") {
                 rangeInputValue[0].value = maxval - priceGap ;   
                }
                else{
                    rangeInputValue[1].value = minval + priceGap;
                }
            }
            
            priceInput[0].value = minval;
            priceInput[1].value = maxval;

            // changing the sliders
            updateSlider(minval , maxval);
            
        })
        
    }

    function updateSlider(minval , maxval) {
        let maxLimit = parseInt(rangeInputValue[1].max);
        console.log(maxLimit)
        let minper = minval/maxLimit * 100;
        let maxper = maxval/maxLimit * 100;
        rangeSlider.forEach(slider => {
            slider.style.left = `${minper}%`;
            slider.style.right = `${100 - maxper}%`;
        });
    }
    
}