function height(n) {
    return (2000000 * (1 - Math.pow(0.4, n + 1)) / (1 - 0.4)).toFixed(3);
  }