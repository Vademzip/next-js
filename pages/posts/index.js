import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { posts: data },
    }
};

const Index = ({posts}) => { //Деструктуризация необходима!!!
    console.log(posts);

    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Heading text="Posts list:" />
            <ul>
                {posts && posts.map((item) => (
                    <li key={item.id}>
                        <Link href={`/posts/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default Index;
