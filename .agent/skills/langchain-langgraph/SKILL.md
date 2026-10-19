---
name: langchain-langgraph
description: "LangChain and LangGraph agent graphs, cyclic state machines, checkpointing, and tool execution nodes."
---

# LangGraph & Agent Graphs Protocol

1. Model multi-turn agent logic as a state graph with explicit nodes and edges.
2. Store conversation state in persistent checkpointers (Postgres/Redis).
3. Validate tool execution arguments against Pydantic schemas before running.
