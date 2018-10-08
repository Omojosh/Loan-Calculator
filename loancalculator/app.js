//Listen for submit
document.querySelector("#loan-form").addEventListener('submit', calculateResults);
//Create a function
function calculateResults(e){
   const amount = document.querySelector("#amount");
   const interest = document.querySelector('#interest');
   const years = document.querySelector('#years');
   const monthlyPayment = document.querySelector('#monthly-payment');
   const totalPayment = document.querySelector('#total-payment');
   const totalInterest = document.querySelector('#total-interest');


    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calcultedPayments = parseFloat(years.value) * 12;


    //Compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calcultedPayments);

    const monthly = (principal*x*calculatedInterest) / (x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value =( monthly * calcultedPayments).toFixed(2);
        totalInterest.value = ((monthly * calcultedPayments)- principal).toFixed(2);
    }else{
       showError('Check the  values you entered ');
    }
    e.preventDefault();
}
//Create the function for the show error 
function showError(error){
     //create a div using javascript
    const errorDiv = document.createElement('div');
    //Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    //create a class name for the error DIV
    errorDiv.className = 'alert alert-danger';
    //create text node and append to div element 
    errorDiv.appendChild(document.createTextNode('error'));

    //insert error
    card.insertBefore(errorDiv, heading);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);

}
