<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Reply;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments = Comment::with('replies')->get();

        return response()->json([
            'result' => true,
            'comments' => $comments
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $comment = new Comment();
        $comment->post_id = $request->postId;
        $comment->username = $request->username;
        $comment->content = $request->content;
        $comment->save();

        return response()->json([
            'result' => true,
            'comment' => $comment
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function reply(Request $request)
    {
        $reply = new Reply();
        $reply->comment_id = $request->commentId;
        $reply->username = $request->username;
        $reply->content = $request->content;
        $reply->save();

        return response()->json([
            'result' => true,
            'reply' => $reply
        ], 200);
    }
}
