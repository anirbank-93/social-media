import { Request, Response } from 'express';

// Services
import { saveToDb, findPosts } from '../services/post.service';

// Utilities
import log from '../logger';

export const createPost = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    const post = await saveToDb(body);

    return res.status(201).json({
      status: true,
      message: 'Data saved successfully.',
      data: post,
    });
  } catch (err: any) {
    log.error(err);
    return res.status(500).json({
      status: false,
      message: 'Failed to save data. Server error.',
      error: err.message,
    });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    let posts = await findPosts();

    if (posts.length > 0) {
      return res.status(200).json({
        status: true,
        message: 'Data successfully get.',
        data: posts,
      });
    } else {
      return res.status(200).json({
        status: true,
        message: 'No data currently.',
        data: [],
      });
    }
  } catch (err: any) {
    log.error(err);
    return res.status(500).json({
      status: false,
      message: 'Failed to get data. Server error.',
      error: err.message,
    });
  }
};
