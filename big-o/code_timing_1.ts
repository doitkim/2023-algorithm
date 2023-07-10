{
  function addUpTo(n: number): number {
    let total: number = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }

  const t1 = performance.now();
  addUpTo(1000000000);
  const t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
}
