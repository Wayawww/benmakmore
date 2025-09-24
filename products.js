const products = [
  {
    name: "Brownies Cookies Original",
    price: "Grosir : Rp 12.500/pcs",
    price1: "Retail : Rp 15.000/pcs",
    price2: "Maklon : Rp 98.000/kg",
    description: "Brownies Lembut Dengan Coklat Yang Kaya Akan Rasa.",
    image: "Picture1.png",
    kelebihan: [
      "Komposisi : Dcc, Gula, Telur, Maragarine, Terigu, Maizena, Susu bubuk, Coklat bubuk.",
      "Topping : Almond, Kacang."
    ]
  },
  {
    name: "Brownies Cookies Jubung",
    price: "Grosir : Rp 12.500/pcs",
    price1: "Retail : Rp 15.000/pcs",
    price2: "Maklon : Rp 98.000/kg",
    description: "Brownies Manis Dengan Taburan Jubung Gurih.",
    image: "yayaya.jpg",
    kelebihan: [
      "Komposisi : Dcc, Gula, Telur, Jubung, Maragarine, Terigu, Maizena, Susu bubuk, Coklat bubuk.",
      "Topping : Wijen, Chocochips."
    ]
  },
  {
    name: "Brownies Cookies Abon Bandeng",
    price: "Grosir : Rp 12.500/pcs",
    price1: "Retail : Rp 15.000/pcs",
    price2: "Maklon : Rp 98.000/kg",
    description: "Brownies Fudgy Dengan Gurihnya Abon Bandeng.",
    image: "Picture3.png",
    kelebihan: [
      "Komposisi : Dcc, Gula, Telur, Maragarine, Abon bandeng, Terigu, Maizena, Susu bubuk, Coklat bubuk.",
      "Topping : Oregano, Keju."
    ]
  },
   {
    name: " Brownies Cookies Bandeng",
    price: "Grosir : Rp 15.00/pcs",
    price1: "Retail : Rp 18.000/pcs",
    price2: "Maklon : Rp 110.000/kg",
    description: "Brownies Lembut Dengan Memadukan Manis Cokelat Premium dan Gurih Khas Ikan Bandeng.",
    image: "Picture6.png",
    kelebihan: [
      "Komposisi : Dcc, Gula, Telur, Jubung, Maragarine, Abon bandeng, Terigu, Maizena, Susu bubuk, Coklat bubuk.",
      "Topping : -"
    ]
  },
  {
    name: "Pie Brownies Siwalan",
    price: "Grosir : Rp 12.500/pcs",
    price1: "Retail : Rp 15.000/pcs",
    price2: "Maklon : Rp 98.000/kg",
    description: "Pie Brownies Renyah Dengan Segarnya Buah Siwalan.",
    image: "Picture5.png",
    kelebihan: [
      "Komposisi : Dcc, Gula, Telur, Maragarine, Siwalan, Abon bandeng, Terigu, Maizena, Susu bubuk, Coklat bubuk.",
      "Topping : Chocochips, Almond, Kacang."
    ]
  },
  {
    name: "Lanting Singkong",
    price: "Grosir : Rp 8.000/pcs",
    price1: "Retail : Rp 10.000/pcs",
    price2: "Maklon : Rp 58.000/kg",
    description: "Lanting Singkong yang Krispi dan Gurih Akan Rasa Singkongnya.",
    image: "Picture6.jpg",
    kelebihan: [
      "Komposisi : Singkong, Terigu, Margarine, Bawang putih.",
      "Topping : -"
    ]
  }
];

const productList = document.querySelector('.product-list');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
  <img src="${product.image}" alt="${product.name}">
  <h3 style="text-align:center;">${product.name}</h3>
  <div class="price">${product.price}</div>
  <div class="price">${product.price1}</div>
  <div class="price">${product.price2}</div>
  <p style="text-align:center;"><strong>${product.description}</strong></p>
  <h4>Kelebihan:</h4>
  <ul>
    ${product.kelebihan.map(item => `<li>${item}</li>`).join('')}
  </ul>
`;
  productList.appendChild(card);

});
