var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks.',
    selectedVariant: 0,
    image: './assets/vmSocks-green-onWhite.jpg',
    link: 'http://google.com',
    inventory: 11,
    inStock: false,
    onSale: false,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green-onWhite.jpg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue-onWhite.jpg"
      }
    ],
    sizes: ["S", "M", "L", "XL"],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      };
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    }
  }
})
