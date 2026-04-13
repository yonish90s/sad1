require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 4242;
const FRONTEND_URL = process.env.FRONTEND_URL 
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

app.use(cors({ origin: '*' })); // Simplify for deployment, or use FRONTEND_URL
app.use(express.json());

// Serve static frontend files (HTML/CSS/JS)
app.use(express.static(__dirname));

// =============================================
// Products database (server-side, with private download URLs)
// Add your real download links here — they are NEVER exposed to the browser
// =============================================
const PRODUCTS_DB = {
  1: { downloadUrl: 'https://drive.google.com/your-figma-course-link' },
  2: { downloadUrl: 'https://drive.google.com/your-wp-template-link' },
  3: { downloadUrl: 'https://drive.google.com/your-icons-link' },
  4: { downloadUrl: 'https://drive.google.com/your-js-course-link' },
  5: { downloadUrl: 'https://drive.google.com/your-fonts-link' },
  6: { downloadUrl: 'https://drive.google.com/your-notion-link' },
  7: { downloadUrl: 'https://drive.google.com/your-photo-course-link' },
  8: { downloadUrl: 'https://drive.google.com/your-music-link' },
};

// POST /api/create-checkout-session
// Body: { items: [{ id, name, price, desc }] }
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { items } = req.body;
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'No items provided' });
    }

    const lineItems = items.map(item => ({
      price_data: {
        currency: 'ils',
        product_data: {
          name: item.name,
          description: item.desc || undefined,
        },
        unit_amount: Math.round(item.price * 100), // agorot
      },
      quantity: 1,
    }));

    const productIds = items.map(i => i.id);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      metadata: { productIds: JSON.stringify(productIds) },
      success_url: `${FRONTEND_URL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${FRONTEND_URL}/`,
      locale: 'auto',
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/order/:sessionId
// Called by success.html to retrieve download links after payment
app.get('/api/order/:sessionId', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);

    if (session.payment_status !== 'paid') {
      return res.status(403).json({ error: 'Payment not completed' });
    }

    const productIds = JSON.parse(session.metadata.productIds || '[]');
    const downloads = productIds.map(id => {
      const product = PRODUCTS_DB[id];
      return product ? product.downloadUrl : null;
    }).filter(Boolean);

    res.json({ downloads, customerEmail: session.customer_details?.email });
  } catch (err) {
    console.error('Order lookup error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`   Frontend expected at: ${FRONTEND_URL}`);
});

module.exports = app;
