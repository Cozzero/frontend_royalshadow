import express, { json, urlencoded } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Payroll API is running' });
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;