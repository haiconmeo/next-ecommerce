import type { NextApiRequest, NextApiResponse } from 'next';

// fake data
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { page = '1', search = '', sort = 'popular', filter = 'all' } = req.query;

    // Make an HTTP GET request to the external API
    const url = `http://localhost:8080/products?page=${page}&search=${search}&sort=${sort}&filter=${filter}`;

    const response = await axios.get(url);

    // Extract the data from the response
    const products = response.data;

    // Respond with the fetched products
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
