import type { NextApiRequest, NextApiResponse } from 'next';

// fake data
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Make an HTTP GET request to the external API
    const response = await axios.get('http://localhost:8080/products');

    // Extract the data from the response
    const products = response.data;

    // Respond with the fetched products
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
