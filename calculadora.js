const amortizationTable = document.getElementById('amortization-table')

let initialValue = document.getElementById("initial-value");
let simulate = document.getElementById("simulate");

simulate.addEventListener("click", function () {
    let monthlyTerm = document.getElementById("annual-term").valueAsNumber * 12;
    let annualInterest = document.getElementById("annual-interest");
    let monthlyInterest = Math.pow(1 + annualInterest.valueAsNumber, (1/12))-1;
    let amortization = initialValue.valueAsNumber / monthlyTerm;
    //printing results on read-only boxes
    document.getElementById("monthly-term").value = monthlyTerm;
    document.getElementById("monthly-interest").value = monthlyInterest;

    //loop for installment calculation
    for (let i =0; i < monthlyTerm; i++) {
        //interest and total accrued for table body
        let currentInterests = (initialValue.valueAsNumber - i * amortization) * monthlyInterest;
        currentPaymentInstallment = (initialValue.valueAsNumber - i * amortization) * monthlyInterest + amortization;
        let currentDebt = initialValue.valueAsNumber - i * amortization;
        let installmentInterest = currentDebt * monthlyInterest;
        totalAccruedInterest += installmentInterest;

        //building rows and cells for table body
        let amortizationTable = document.getElementById("amortization-table");
        let row = amortizationTable.insertRow();
        let installmentsCell = row.insertCell();
        let amortizationCell = row.insertCell();
        let interestCell = row.insertCell();
        let totalCell = row.insertCell();
        installmentsCell.style = "text-align: center;";
        amortizationCell.style = "text-align: center;";
        interestCell.style = "text-align: center;";
        totalCell.style = "text-align: center;";

        //building table values
        installmentsCell.innerHTML = i + 1;
        amortizationCell.innerHTML = +amortization.toFixed(2);
        interestCell.innerHTML = currentInterests.toFixed(2) + "&nbsp &nbsp";
        totalCell.innerHTML = currentPaymentInstallment.toFixed(2);
    }

        //calculating accrued interests
        var totalAccruedInterest = 0
        for (var i = 0; i < monthlyTerm; i++) {
            var currentDebt = initialValue.valueAsNumber - i * amortization;
            var installmentInterest = currentDebt * monthlyInterest;
            totalAccruedInterest += installmentInterest;
        }
        
        //printing accrued interests
        document.getElementById("accrued-interest").value = totalAccruedInterest.toFixed(2);

});