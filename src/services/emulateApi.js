import Operators from 'configs/operators'

export const getListOperators = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Operators);
    }, 1500);
  });
};

export const getCurrentOperator = (url) => {
  return new Promise((resolve, reject) => {
    let finded = Operators.find((item) => {
      if (item.url == url) {
        return item;
      }
    });
    setTimeout(() => {
      resolve(finded);
    }, 1500);
  });
}

export const sendData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !!Math.round(Math.random()) ? resolve(true) : reject(new Error('Рандом выбрал эмуляцию ошибки. Попробуйте еще раз ;)'));
    }, 2000);
  });
}
