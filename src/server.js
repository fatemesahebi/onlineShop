import {createServer, Model, Response} from "miragejs";



import appleWatchImg from './images/rachit-tank-2cFZ_FB08UM-unsplash.jpg'
import glassesImg from './images/giorgio-trovato-K62u25Jk6vo-unsplash.jpg'
import shoesNike124Img from './images/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg'
import Headset7654sImg from './images/c-d-x-PDX_a_82obo-unsplash.jpg'
import tablePhoneImg from './images/mike-meyers--haAxbjiHds-unsplash-min.jpg'
import bodyOilImg from './images/anis-m-WnVrO-DvxcE-unsplash-min.jpg'
import battleCoffeImg from './images/battlecreek-coffee-roasters-rsnzc-8dVs0-unsplash.jpg'
import boxWaterImg from './images/boxed-water-is-better-PHQVYFgTerA-unsplash.jpg'
import lipStickImg from './images/caroline-attwood-E1rH__X9SA0-unsplash.jpg'
import lighterImg from './images/cas-verrest-lGBtfnQvOoI-unsplash-min.jpg'
import womanTshirt from './images/christian-bolt-VW5VjskNXZ8-unsplash-min.jpg'
import roseWaterImg from './images/courtney-smith-CqpkodOTgKk-unsplash-min.jpg'
import smoothyGlassImg from './images/daniel-korpai-xCxuly4uMZ4-unsplash-min.jpg'
import cameraPolarImg from './images/eniko-kis-KsLPTsYaqIQ-unsplash.jpg'
import analogFilmImg from './images/fernando-lavin-y47fvpkEF8E-unsplash-min.jpg'
import metalCarImg from './images/giorgio-trovato-p0OlRAAYXLY-unsplash.jpg'
import sportTshirtWhiteImg from './images/haryo-setyadi-acn5ERAeSb4-unsplash-min.jpg'
import colorfulShoesImg from './images/irene-kredenets-dwKiHoqqxk8-unsplash.jpg'
import disarronoImg from './images/mae-mu-L5HKKFLw7j4-unsplash-min.jpg'
const createProduct = (id, title, desc, type, price, image,offerPercent) => {
    return {
        id,
        title,
        desc,
        type,
        price,
        image,
        offerPercent,
        isOff:(offerPercent !== 0),
        set setOff(isOff)
        {this.isOff=isOff
        },
         get OffPrice(){
            return(this.price-(this.price/100) * offerPercent)
        },
        comments:[],
        set setComment({comment,name}){
            this.comments.push({id:`${this.title}-${Math.random()*10000}`,name,comment})
        }
    }
}

export function makeServer({environment = "test"} = {}) {
    let server = createServer({
        environment,
        models: {
            product: Model,
        },
        seeds(server) {
            server.create("product",
                createProduct(1, 'apple watch', 'it is beautiful', 'accessory',
                100, appleWatchImg, 10));
            server.create("product",
                createProduct(2, 'glasses', 'it is beautiful', 'accessory',
                    210, glassesImg, 30));
            server.create("product",
                createProduct(3, 'shoes Nike 124', 'it is beautiful', 'clothes',
                    100, shoesNike124Img, 0));
            server.create("product",
                createProduct(4, 'Headset 7654 s', 'it is beautiful', 'gadget',
                    100, Headset7654sImg, 20));
            server.create("product",
                createProduct(5, 'table phone ', 'it is beautiful', 'home decoration',
                    100, tablePhoneImg, 0));
            server.create("product",
                createProduct(6, 'body oil ', 'it is beautiful', 'beauty',
                    230, bodyOilImg, 5));
            server.create("product",
                createProduct(7, 'battle coffee ', 'it is beautiful', 'food',
                    230, battleCoffeImg, 15));
            server.create("product",
                createProduct(8, 'boxed water ', 'it is beautiful', 'food',
                    230, boxWaterImg, 0));
            server.create("product",
                createProduct(9, 'lipstick red65 ', 'it is beautiful', 'beauty',
                    230, lipStickImg, 3));
            server.create("product",
                createProduct(10, 'lighter blue', 'it is beautiful', 'accessory',
                    230,lighterImg , 0));
            server.create("product",
                createProduct(11, 'woman T-shirt white', 'it is beautiful', 'clothes',
                    160,womanTshirt , 0));
            server.create("product",
                createProduct(12, 'ALOE ros water', 'it is beautiful', 'beauty',
                    30,roseWaterImg , 12));
            server.create("product",
                createProduct(13, 'smoothy glass', 'it is beautiful', 'home decoration',
                    48,smoothyGlassImg , 0));
            server.create("product",
                createProduct(14, 'polaroid camera one step 2 ', 'it is beautiful', 'gadget',
                    240,cameraPolarImg , 0));
            server.create("product",
                createProduct(15, 'koodak 200 camera film ', 'it is beautiful', 'gadget',
                    67,analogFilmImg , 0));
            server.create("product",
                createProduct(16, 'metal car model 230 s', 'it is beautiful', 'home decoration',
                    412,metalCarImg , 10));
            server.create("product",
                createProduct(17, 'sport T-shirt white ', 'it is beautiful', 'clothes',
                    240,sportTshirtWhiteImg , 5));
            server.create("product",
                createProduct(18, 'colorful shoes sport Nike', 'it is beautiful', 'clothes',
                    467,colorfulShoesImg , 0));
            server.create("product",
                createProduct(19, 'Dissaronno perfume ', 'it is beautiful', 'beauty',
                    240,disarronoImg , 0));
            server.create("product",
                createProduct(20, 'polaroid camera one step 2 ', 'it is beautiful', 'accessory',
                    240,cameraPolarImg , 0));
            server.create("product",
                createProduct(21, 'polaroid camera one step 2 ', 'it is beautiful', 'accessory',
                    240,cameraPolarImg , 0));
            server.create("product",
                createProduct(22, 'polaroid camera one step 2 ', 'it is beautiful', 'accessory',
                    240,cameraPolarImg , 0));
            server.create("product",
                createProduct(23, 'polaroid camera one step 2 ', 'it is beautiful', 'accessory',
                    240,cameraPolarImg , 0));
            server.create("product",
                createProduct(24, 'polaroid camera one step 2 ', 'it is beautiful', 'accessory',
                    240,cameraPolarImg , 0));
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
            this.get('/accessory',(schema)=>{
                return schema.products.all().filter(item=>item.type==='accessory')
            });
            this.get('/clothes',(schema)=>{
                return schema.products.all().filter(item=>item.type==='clothes')
            });
            this.get('/gadget',(schema)=>{
                return schema.products.all().filter(item=>item.type==='gadget')
            });
            this.get('/home-decoration',(schema)=>{
                return schema.products.all().filter(item=>item.type==='home decoration')
            });
            this.get("/products/:title", (schema,request) => {
                return schema.products.findBy({title:request.params.title})

                // let title = request.params.title;
                // const product = schema.products.find(title)
                // if (product) {
                //     return product
                // }
                // return new Response(404, {}, {error: `Product with title ${title} not found`});
            });
        },
    });

    return server;
}