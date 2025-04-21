import autocannon from 'autocannon';

autocannon({
  url: process.env.URL,
  connections: 10,
  pipelining: 1,
  duration: 10,
  workers:2
}, (err, results) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('Resultados:', autocannon.printResult(results));
});