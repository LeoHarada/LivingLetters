const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Stripe = require("stripe");
const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

//MongoDB Connection
mongoose.set(`strictQuery`, false);
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(err));

//Schemas
const productSchema = mongoose.Schema({
    name: String,
    category: String,
    image: String,
    price: String,
    description: String,
});

//Models
const productModel = mongoose.model("product", productSchema);

//API
app.get("/", (req, res) => {
    res.send("Server is running");
});

//Product API
app.get("/product", async (req, res) => {
    const data = await productModel.find({});
    res.send(JSON.stringify(data));
});

//Stripe Payments
const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY);

app.post("/create-checkout-session", async (req, res) => {
    try {
        const params = {
            submit_type: "pay",
            mode: "payment",
            billing_address_collection: "auto",
            shipping_options: [
                { shipping_rate: "shr_1NsVPTBdnZ7zmfg4WKlwzmaH" },
            ],
            line_items: req.body.map((product) => {
                return {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: product.name,
                            // images: [product.image],
                        },
                        unit_amount: product.price * 100,
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                    },
                    quantity: product.qty,
                };
            }),
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
        };

        const session = await stripe.checkout.sessions.create(params);
        res.status(200).json(session.id);
    } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
    }
});

app.listen(PORT, () => console.log("Node server listening on port : " + PORT));
