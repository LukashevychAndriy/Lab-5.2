function sum(x, eps) {
  let a = -1 / x;
  let S = a;
  let n = 0;

  do {
    n++;

    a = getAddition(a, x, n);

    S += a;
  } while (Math.abs(a) >= eps);

  return S;
}

function getAdditionsAmount(x, eps) {
  let a = -1 / x;
  let n = 0;

  do {
    n++;

    a = getAddition(a, x, n);
  } while (Math.abs(a) >= eps);

  return n;
}

function getAddition(prevA, x, n) {
  let R = (1 - 2 * n) / (2 * n * x * x + x * x);
  return prevA * R;
}

module.exports = {sum, getAddition, getAdditionsAmount};
