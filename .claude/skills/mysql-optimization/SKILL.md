---
name: mysql-optimization
description: "MySQL InnoDB buffer pool sizing, query cache mitigation, row-level locking, and slow query log diagnosis."
---

# MySQL Performance Protocol

1. Set innodb_buffer_pool_size to 70-80% of dedicated RAM.
2. Analyze queries using EXPLAIN and ensure rows examined does not exceed rows returned by orders of magnitude.
3. Avoid long-running transactions that hold InnoDB row locks.
