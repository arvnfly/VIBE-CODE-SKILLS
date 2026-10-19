---
name: pandas-numpy-data-wrangling
description: "High-performance data manipulation with Pandas and NumPy, vectorized operations, and memory optimization."
---

# Pandas & NumPy Performance Protocol

1. Never iterate over DataFrames using for loops or iterrows(); use vectorized operations.
2. Downcast numeric datatypes (float64 -> float32, int64 -> int16) to reduce RAM by 80%.
3. Use Categorical types for repetitive string columns.
