import { Request, Response } from 'express';
import { get } from 'lodash';

import log from '../logger';

// Services
import {
  saveToDb,
  findFromDbById,
  findAndUpdate,
  deleteFromDb,
} from '../services/testPost.service';

export async function createPostHandler(req: Request, res: Response) {
  try {
    // const userId = get(req, 'user._id');
    const body = req.body;

    const post = await saveToDb(body);

    return res
      .status(201)
      .json({ status: true, message: 'Data saved successfully', data: post });
  } catch (err: any) {
    log.error(err);
    return res.status(500).json({
      status: false,
      message: 'Failed to save data. Server error.',
      error: err.message,
    });
  }
}

export async function getPostByIdHandler(req: Request, res: Response) {
  try {
    const postId = get(req, 'params.postId');

    let post = await findFromDbById({ _id: postId });

    if (!post) {
      return res.status(404).json({
        status: false,
        message: 'Invalid id. Post not found.',
      });
    }

    return res
      .status(200)
      .json({ status: true, message: 'Data get successfully', data: post });
  } catch (err: any) {
    log.error(err);
    return res.status(500).json({
      status: false,
      message: 'Invalid id. Server error.',
      error: err.message,
    });
  }
}

export async function updatePostHandler(req: Request, res: Response) {
  try {
    const postId = get(req, 'params.postId');
    // const userId = get(req, 'user._id');

    let update = req.body;

    const post = await findFromDbById({ _id: postId });

    if (!post) {
      return res.status(404).json({
        status: false,
        message: 'Invalid id. Post not found.',
      });
    }

    // if (String(post.user) != userId) {
    //   return res.status(401).send({ message: 'User not authorized' });
    // }

    const updatedPost = await findAndUpdate({ _id: postId }, update, {
      new: true,
    });

    return res.status(200).json({
      status: true,
      message: 'Data edited successfully',
      data: updatedPost,
    });
  } catch (err: any) {
    log.error(err);
    return res.status(500).json({
      status: false,
      message: 'Invalid id. Server error.',
      error: err.message,
    });
  }
}

export async function deletePostHandler(req: Request, res: Response) {
  try {
    const postId = get(req, 'params.postId');
    // const userId = get(req, 'user._id');

    const post = await deleteFromDb({ _id: postId });

    if (!post) {
      return res.status(404).json({
        status: false,
        message: 'Invalid id. Post not found.',
      });
    }

    // if (String(post.user) != userId) {
    //   return res.status(401).send({ message: 'User not authorized' });
    // }

    return res.status(200).json({
      status: true,
      message: 'Data deleted successfully',
      data: post,
    });
  } catch (err: any) {
    log.error(err);
    return res.status(500).json({
      status: false,
      message: 'Invalid id. Server error.',
      error: err.message,
    });
  }
}
