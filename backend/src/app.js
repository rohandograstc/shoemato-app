import express from "express";
import commonResponseMiddleware from "./middlewares/commonResponseMiddleware.js";
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

// Import route files
import accountsRoutes from './modules/account/routes/AccountRoutes.js';
import onboardingRouter from "./modules/onboarding/routes/OnboardingRoutes.js";
import productRouter from "./modules/product/routes/ProductRoutes.js";


const app = express();

// Middleware setup
app.use(commonResponseMiddleware);
// ...

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use(morgan("combined"));

// Security middleware
app.use(helmet());

// Compression middleware
app.use(compression());

// CORS middleware
app.use(cors());

// Route registration
app.get('/',(req,res) => {
    res.send("success")
})
app.use('/api/account', accountsRoutes);
app.use('/api/onboarding', onboardingRouter);
app.use('/api/products', productRouter);

export default app;
