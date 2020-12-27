
const firebase = jest.genMockFromModule('firebase');

firebase.initializeApp = jest.fn();

const values = {
  deflatedHex: 'deflatedHex',
  deflatedBase64: 'deflatedBase64',
  inflatedAscii: 'inflatedAscii',
  inflatedHex: 'inflatedHex',
};

const data = {
  values,
};

const zlibConvert = jest.fn((testValues) => {
  if (testValues.value === 'Valid value') {
    return Promise.resolve({
      data,
    });
  }
  return Promise.reject(new Error('Error message'));
});

// const zlibConvert = jest.fn(() => Promise.reject(new Error('Fail')));

const httpsCallable = jest.fn(() => zlibConvert);

firebase.functions = jest.fn(() => ({
  httpsCallable,
}));


module.exports = firebase;
