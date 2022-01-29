import {createServer, Model, Response} from "miragejs";
import {request} from "framework7";


const productNew =[{
    id: 1,
    imageProduct: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FProduct%2F390670%20%2F150%2F150&w=256&q=75",
    nameProduct: "پرتقال آبگیری 1کیلویی نصر خاتم",
    price: "152٬000",
    currency: "ریال",
    priceOffer: "",
    percentOff: "",
},
    {
        id: 2,
        imageProduct: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FProduct%2F390672%20%2F150%2F150&w=256&q=75",
        nameProduct: "ماسک کودک سه لایه 50 عددی بارمان",
        price: "500٬000",
        currency: "ریال",
        priceOffer: "",
        percentOff: "",
    },
    {
        id: 3,
        imageProduct: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FProduct%2F390648%20%2F150%2F150&w=256&q=75",
        nameProduct: "خرمای ربی 450 گرمی ساغر",
        price: "570٬000",
        currency: "ریال",
        priceOffer: "",
        percentOff: "",
    },
    {
        id: 4,
        imageProduct: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FProduct%2F390681%20%2F150%2F150&w=256&q=75",
        nameProduct: "میکس سوپ 400 گرمی نوبرسبز",
        price: "385,000",
        currency: "ریال",
        priceOffer: "173,250",
        percentOff: "55%",
    },
    {
        id: 5,
        imageProduct: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FProduct%2F390645%20%2F150%2F150&w=256&q=75",
        nameProduct: "مایع سفید کننده سطوح و البسه اسنو 2 لیتری دامستوس",
        price: "630,000",
        currency: "ریال",
        priceOffer: "567,000",
        percentOff: "10%",
    },
    {
        id: 6,
        imageProduct: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FProduct%2F390609%20%2F150%2F150&w=256&q=75",
        nameProduct: "پک اسپری چندمنظوره 750 میلی لیتری دامستوس",
        price: "880,000",
        currency: "ریال",
        priceOffer: "704,000",
        percentOff: "20%",
    },
    {
        id: 7,
        imageProduct: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FProduct%2F390610%20%2F150%2F150&w=256&q=75",
        nameProduct: "پک اسپری پاک کننده چندمنظوره سطوح750میلی لیتری سیف",
        price: "880,000",
        currency: "ریال",
        priceOffer: "704,000",
        percentOff: "20%",
    },
    {
        id: 8,
        imageProduct: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FProduct%2F390608%20%2F150%2F150&w=256&q=75",
        nameProduct: "پک پاک کننده چندمنظوره 750میلی لیتری سیف",
        price: "620,000",
        currency: "ریال",
        priceOffer: "496,000",
        percentOff: "20%",
    },
    {
        id: 9,
        imageProduct: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FProduct%2F390370%20%2F150%2F150&w=256&q=75",
        nameProduct: "نارگیل پاک شده 1عدد متوسط نصر خاتم",
        price: "474,000",
        currency: "ریال",
        priceOffer: "",
        percentOff: "",
    },
    {
        id: 10,
        imageProduct: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FProduct%2F390371%20%2F150%2F150&w=256&q=75",
        nameProduct: "نارگیل پاک شده 1عدد کوچک نصر خاتم",
        price: "422,000",
        currency: "ریال",
        priceOffer: "",
        percentOff: "",
    },

]
export function makeServer({environment = "test"} = {}) {
    let server = createServer({
        environment,
        models: {
            product: Model,
        },
        seeds(server) {
            productNew.map(item=>server.create("product",item))
        },

        routes() {
            this.namespace = "api";
            this.get("/products", (schema) => {
                return schema.products.all();
            })
            this.get('/off-products',(schema)=>{
                return schema.products.all().filter(item=>item.isOff===true)
            }
            );
            this.get('/most-sale',(schema)=>{
                return schema.products.all().sort((a,b)=> b.saleCount-a.saleCount)
            })
            this.get('/most-off',(schema)=>{
                return schema.products.all().sort((a,b)=> b.percentOff-a.percentOff)

            })
           this.get('/category/:category',(schema,request)=>{
               return schema.products.all().filter(product=>product.category===request.params.category)
           })
            this.get('/brands/:brandName',(schema,request)=>{
               return schema.products.all().filter(product=>product.brand===request.params.brandName)
           })
            this.get("/products/:id", (schema,request) => {
                return schema.products.find(request.params.id)

            });
        },

    });

    return server;
}