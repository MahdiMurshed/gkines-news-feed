'use client'
import React, { useCallback, useEffect, useState } from 'react'
import PostCard from './PostCard';
import { POSTS_PER_PAGE } from '@/config/constants';
import { UserPost } from '@/types';
import { getPosts } from '@/actions/posts';
import { useInView } from 'react-intersection-observer';
import { ArrowUp, RotateCw } from 'lucide-react';
import CustomTooltip from '@/components/CustomTooltip';



const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
const PostsClient = ({ initialPosts = [] }: { initialPosts: Array<UserPost> }) => {
    const [scrollTrigger, isInView] = useInView();
    const [offset, setOffset] = useState(POSTS_PER_PAGE);
    const [posts, setPosts] = useState<Array<UserPost>>(initialPosts);
    const [hasMoreData, setHasMoreData] = useState(true);

    const loadMorePosts = useCallback(async () => {
        if (hasMoreData) {
            const apiPosts = await getPosts(offset, POSTS_PER_PAGE);

            if (apiPosts.length == 0) {
                setHasMoreData(false);
            }

            setPosts((prevPosts) => [...prevPosts, ...apiPosts]);
            setOffset((prevOffset) => prevOffset + POSTS_PER_PAGE);
        }
    }, [hasMoreData, offset]);

    useEffect(() => {
        if (isInView && hasMoreData) {
            loadMorePosts();
        }
    }, [isInView, hasMoreData, loadMorePosts]);
    return (
        <>
            <div className='flex flex-col gap-4 items-center py-8 mx-auto'>
                {
                    posts.map(item =>
                        <PostCard post={item} key={item.id} />
                    )
                }
            </div>
            <div className="pb-8">
                {(hasMoreData && <div ref={scrollTrigger}>
                    <p className="flex items-center gap-2">
                        <span>Loading</span>
                        <RotateCw className='size-4 animate-spin' />
                    </p>
                </div>) || (
                        <p className="...">No more posts to load</p>
                    )}
            </div>
            <div>

            </div>

            <div
                role="button"
                tabIndex={0}
                className="fixed bottom-5 right-5 hover:-translate-y-2 transition-transform"
                onClick={scrollToTop}
            >
                <CustomTooltip content='Scroll to top'>
                    <ArrowUp />
                </CustomTooltip>
            </div>
        </>
    )
}

export default PostsClient