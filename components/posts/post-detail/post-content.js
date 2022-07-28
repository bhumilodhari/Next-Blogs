import PostHeader from "./post-header";

const DUMMY_POSTS = {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with NextJS',
    image: 'getting-started-with-nextjs.png',
    excerpt: 'NextJs is a the React framework for production - it makes bulding fullstack react apps and sites a breeze and ships with built-in SSR',
    date: '2022-02-10',
    content: '# This is the first post'
}

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

    return <article>
        <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
        {DUMMY_POSTS.content}
    </article>
}

export default PostContent;