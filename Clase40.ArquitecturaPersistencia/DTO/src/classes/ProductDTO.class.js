class ProductDTO {
  constructor(data, currencies) {
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;

    for (const [currency, value] of Object.entries(currencies)) {
      this[currency] = value;
    }
  }
}

export default ProductDTO;

// Lo que hace el Object.entries
// {
//     USD: 1,
//     ARS: 208,
//     UYU: 150,
// }

// [["USD", 1], ["ARS", 208], ["UYU", 150]]
