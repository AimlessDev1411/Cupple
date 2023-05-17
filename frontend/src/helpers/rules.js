const validationRules = (t) => ({
  email: [
    (v) => !!v || t('validations.emailRequired'),
    (v) => /.+@.+\..+/.test(v) || t('validations.emailFormat'),
  ],
  integer: [
    (v) => !!v || t('validations.required'),
    (v) => v > 0 || t('validations.positive'),
    (v) => Number.isInteger(v) || t('validations.decimal'),
  ],
  integerNoReq: [
    (v) => v >= 0 || t('validations.positive'),
    (v) => Number.isInteger(v) || t('validations.decimal'),
  ],
  number: [
    (v) => !!v || t('validations.required'),
    (v) =>
      /^([0-9]\d*(\.|\,)\d*|0?(\.|\,)\d*[0-9]\d*|[0-9]\d*)$/gm.test(v) ||
      t('validations.positive'),
    (v) => parseFloat(v) > 0 || t('validations.min0'),
  ],
  notRequiredNumber: [
    (v) =>
      /^([0-9]\d*(\.|\,)\d*|0?(\.|\,)\d*[0-9]\d*|[0-9]\d*)$/gm.test(v) ||
      t('validations.positive'),
      (v) => parseFloat(v) > -1,
  ],
  required: [(v) => (!!v && v !== ' ') || t('validations.required')],
  requiredArray: [(v) => v.length > 0 || t('validations.required')],
  noOptionsDup: (list) => [
    (v) => !!v || t('validations.required'),
    () => list.length === new Set(list.map(i => i.option.name)).size || t('validations.noDuplicates')
  ],
  requiredPlatformObject: [
    (v) => Object.keys(v).includes('name') || t('validations.required'),
  ],
  min: [(v) => v > 0 || t('validations.min')],
  requiredAndMaxLength: [
    (v) => !!v || t('validations.required'),
    (v) => (v && v.length <= 200) || t('maxLength'),
  ],
  requiredAndMinLength: [
    (v) => !!v || t('validations.required'),
    (v) => (v && v.length >= 10) || t('minLength'),
  ],
  maxLength: (length) => [
    (v) => !!v || t('validations.required'),
    (v) => (v && v.length <= length || t('validations.maxTextLength', {length}))
  ],
  maxLengthNoReq: (length) => [
    (v) => ((!v || v.length <= length) || t('validations.maxTextLength', {length}))
  ],
  company: [
    (v) => !!v || t('validations.required'),
    (v) => (v && v.length >= 5) || t('validations.company'),
  ],
  street_line: [
    (v) => !!v || t('validations.required'),
    (v) => (v && v.length <= 50) || t('validations.streetLine'),
  ],
  neighborhood: [
    (v) => !!v || t('validations.required'),
    (v) => (v && v.length <= 15) || t('validations.neighborhood'),
  ],
  extNum: [
    (v) => !!v || t('validations.required'),
    (v) =>
      /^[0-9]+(([\.]?[0-9]+)*)?$/gm.test(v) ||
      t('validations.positive'),
    (v) => parseFloat(v) > 0 || t('validations.min0'),
    (v) => (v && v.length <= 10) || t('validations.extNum'),
  ],
  password: [
    (v) =>/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,}$/.test(v) || t('validations.password'),
  ],
  phone: [
    (v) => !!v || t('validations.required'),
    (v) => (v && v.length >= 14) || t('validations.phone'),
  ],
  url: [
    (v) =>
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
        v
      ) || t('validations.url'),
  ],
  minValue: [
    (v) => !!v || t('validations.required'),
    (v) => (v && v.replace(/,/g, '') > 0) || t('validations.minValue'),
  ],
  zipCode: [
    (v) => !!v || t('validations.required'),
    (v) => (v && v.length === 5) || t('validations.zipCode'),
  ],
  max15: [
    (v) => !!v || t('validations.required'),
    (v) => (v && v.length <= 15) || t('validations.max15'),
  ],
  max25: [
    (v) => !!v || t('validations.required'),
    (v) => (v && v.length <= 25) || t('validations.max25'),
  ],
  max50: [
    (v) => !!v || t('validations.required'),
    (v) => (v && v.length <= 50) || t('validations.max50'),
  ],
  max3: [
    (v) => !!v || t('validations.required'),
    (v) => (v && v.length <= 3) || t('validations.max3'),
  ],
  fulfillmentQuantity: (quantity) => {
    return [
      (v) => !!v || t('validations.required'),
      (v) => (v && v > 0) || t('validations.minOneItem'),
      (v) => (v && v <= quantity) || t('validations.maxQuantity', {quantity}),
    ];
  },
  fulfillmentQuantityNoReq: (quantity) => {
    return [
      (v) => v >= 0 || t('validations.positive'),
      (v) => Number.isInteger(v) || t('validations.decimal'),
    ];
  },
  rfc: () =>{
    return[
      (v) => /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/.test(v) || t('validations.rfc')
    ]
  },
  insuranceAmount: (amount) => {
    return [
      (v) => !!v || t('validations.required'),
      (v) => {
        if (v) {
          let p = v.replace(/,/gi, '');
          p = parseFloat(p);
          return p <= 0
            ? t('validations.lessOrEqual')
            : p <= amount || t('validations.maxAmount', {amount});
        } else {
          return t('validations.lessOrEqual');
        }
      },
    ];
  },
  insuranceAmountNoReq: (amount) => {
    return [
      (v) => {
        if (v) {
          let p = v.replace(/,/gi, '');
          p = parseFloat(p);
          return p < 0
            ? t('validations.minAmount0')
            : p <= amount || t('validations.maxAmount', {amount});
        } else {
          return t('validations.minAmount0');
        }
      },
    ];
  },
});

export default validationRules;
