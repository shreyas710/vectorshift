from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
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

    print('Format of nodes:' + str(nodes[0]))
    print('Format of edges:' + str(edges[0]))

    V = len(nodes)
    E = len(edges)

    adj = {}
    for node in nodes:
        adj[node['id']] = []
    for edge in edges:
        if edge['source'] in adj:
            adj[edge['source']].append(edge['target'])

    visited = {}
    rec_stack = {}
    for node in nodes:
        visited[node['id']] = False
        rec_stack[node['id']] = False

    def is_cyclic_util(u):
        visited[u] = True
        rec_stack[u] = True

        for v in adj[u]:
            if not visited[v]:
                if is_cyclic_util(v):
                    return True
            elif rec_stack[v]:
                return True

        rec_stack[u] = False
        return False

    is_cycle = False
    for node in nodes:
        if not visited[node['id']]:
            if is_cyclic_util(node['id']):
                is_cycle = True
                break

    return {'num_nodes': V, 'num_edges': E, 'is_dag': not is_cycle}
