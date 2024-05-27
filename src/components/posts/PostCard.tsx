import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import React from 'react'
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Post, UserPost } from "@/app/types"
import Link from "next/link"

type Props = {
    post: UserPost
}


const PostCard = ({ post }: Props) => {
    return (
        <Card className="w-2/3 min-w-96">
            <CardHeader>
                <div className="grid grid-cols-[60px_1fr]">
                    <Avatar className="row-span-2 size-12">
                        <AvatarFallback>{post.userName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle>
                        <Link href={`/user/${post.userId}`} className="hover:underline underline-offset-4">
                            {post.userName}</Link>
                    </CardTitle>
                    <CardDescription>{`@${post.handle}`}</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <h3 className="text-xl font-semibold tracking-tight leading-tight">{post.title}</h3>
            </CardContent>
            <CardFooter>
                <p>{post.body}</p>
            </CardFooter>
        </Card>
    )
}

export default PostCard


