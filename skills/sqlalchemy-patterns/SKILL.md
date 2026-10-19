---
name: sqlalchemy-patterns
description: "SQLAlchemy 2.0 async sessions, declarative models, joinedload/selectinload strategies, and alembic migrations."
---

# SQLAlchemy 2.0 Protocol

1. Use AsyncSession with asyncpg or asyncmy.
2. Use selectinload for 1-to-N relationships and joinedload for N-to-1 relationships to avoid N+1 queries.
3. Manage schema evolution with Alembic migrations.
