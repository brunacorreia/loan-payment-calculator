# Loan Payment Calculator

Make simulations for your loan payment using the SAC amortization table.

## Calculation Variables
- initialValue
- annualTerm
- annualInterest
- accruedInterest

## Formulas
- <strong>monthlyTerm</strong>    
monthlyTerm = annualTerm * 12

- <strong>monthlyInterest</strong>   
monthlyInterest = [(1 + annualInterest)<sup>(1/12)</sup>] - 1

- <strong>accruedInterest</strong>   
totalAccuredInterest = [initialValue * (1 + monthlyInterest)<sup>monthlyTerm</sup>] - initialValue
____
<h6>Project built for <a href="https://www.igti.com.br/" target="_blank">IGTI Programming Bootcamp (Beginner, Front-End Module).</a></h6>

