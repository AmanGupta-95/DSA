const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

const deptFirstSearch = (graph, source) => {
  console.log(source);
  for (let neighbors of graph[source]) {
    deptFirstSearch(graph, neighbors);
  }
};

const breadthFirstSearch = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbors of graph[current]) {
      queue.push(neighbors);
    }
  }
};

// deptFirstSearch(graph, 'a');
breadthFirstSearch(graph, 'a');
