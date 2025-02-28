import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface RequestBody {
  text: string;
  task: 'summarization' | 'question-generation' | 'question-answering';
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text, task }: RequestBody = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  let model = '';
  if (task === 'summarization') {
    model = 'facebook/bart-large-cnn';
  } else if (task === 'question-generation') {
    model = 'valhalla/t5-base-qg-hl';
  } else if (task === 'question-answering') {
    model = 'deepset/roberta-base-squad2';
  } else {
    return res.status(400).json({ error: 'Invalid task' });
  }

  try {
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${model}`,
      { inputs: text },
      {
        headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` },
      }
    );
    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Error during API call:', error); // Log error for debugging
    return res.status(500).json({ error: 'Failed to process request' });
  }
};

export default handler;
