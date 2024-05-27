'use client'
import usePosts from '@/app/hooks/usePosts'
import React from 'react'
import PostCard from './PostCard';

const Posts = () => {
    const { data } = usePosts();
    return (
        <div className='flex flex-col gap-4 items-center py-8 mx-auto'>
            {
                data.map(item =>
                    <PostCard post={item} key={item.id} />
                )
            }
        </div>
    )
}

export default Posts