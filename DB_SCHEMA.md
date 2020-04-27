# Uday 

This schema is designed based on my below understanding from the document
```
For any given input

digits:{
    minuend: 5,
    subtrahend: 3
}

value_of_minuend > value_of_subtrahend
digits in minuend >= digits in subtrahend 
digits in minuend <= 10 
digits in subtrahend <= 10 
```

## Getting Started

The number of possible combinations of minuend and subtrahend would be  
```
Sum of N natural numbers

n(n+1)/2 = 10(10+1)/2 = 55;

Possible combinations are 55;
```
We can give each combination a uniq ID. so first table would contain 3 fields.

- Combinations Table
```
digits_in_minuend
digits_in_subtrahend
unique_id
```
Maintain two tables for storing values.

- With_Borrow
```
some_unique_id (indicating_borrow_true)
unique_id (primary key in combinations table)
minuend_value
subtrahend_value
options_id (primary key in options table)
```

- Without_Borrow
```
some_unique_id (indicating_borrow_false)
unique_id (primary key in combinations table)
minuend_value
subtrahend_value
options_id (primary key in options table)
```

- Options Table
```
options_id
option_one
option_two
option_three
correct_ans
```