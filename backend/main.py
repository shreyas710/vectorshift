from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from collections import deque
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    data = json.loads(pipeline)
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])

    V = len(nodes)
    E = len(edges)

    adj = {}
    for node in nodes:
        adj[node['id']] = []
    for edge in edges:
        if edge['source'] in adj:
            adj[edge['source']].append(edge['target'])

    in_degree = {node['id']: 0 for node in nodes}
    for edge in edges:
        if edge['target'] in in_degree:
            in_degree[edge['target']] += 1

    queue = deque([nid for nid, deg in in_degree.items() if deg == 0])
    processed = 0

    while queue:
        u = queue.popleft()
        processed += 1
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)

    is_cycle = processed != V

    return {'num_nodes': V, 'num_edges': E, 'is_dag': not is_cycle}
