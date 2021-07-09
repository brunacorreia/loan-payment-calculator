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
Project built for IGTI Programming Bootcamp (Front-End Module).
