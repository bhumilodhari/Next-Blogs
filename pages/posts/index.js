import React from 'react'
import AllPosts from '../../components/posts/all-posts'

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting started with NextJS',
        image: 'getting-started-with-nextjs.png',
        excerpt: 'NextJs is a the React framework for production - it makes bulding fullstack react apps and sites a breeze and ships with built-in SSR',
        date: '2022-02-10'
    },
    {
        slug: 'getting-started-with-nextjs2',
        title: 'Getting started with NextJS',
        image: 'getting-started-with-nextjs.png',
        excerpt: 'NextJs is a the React framework for production - it makes bulding fullstack react apps and sites a breeze and ships with built-in SSR',
        date: '2022-03-20'
    },
    {
        slug: 'getting-started-with-nextjs3',
        title: 'Getting started with NextJS',
        image: 'getting-started-with-nextjs.png',
        excerpt: 'NextJs is a the React framework for production - it makes bulding fullstack react apps and sites a breeze and ships with built-in SSR',
        date: '2022-05-10'
    },
    {
        slug: 'getting-started-with-nextjs4',
        title: 'Getting started with NextJS',
        image: 'getting-started-with-nextjs.png',
        excerpt: 'NextJs is a the React framework for production - it makes bulding fullstack react apps and sites a breeze and ships with built-in SSR',
        date: '2022-03-10'
    },
];


const AllPostPage = () => {
    return (
        <AllPosts posts={DUMMY_POSTS} />
    )
}

export default AllPostPage