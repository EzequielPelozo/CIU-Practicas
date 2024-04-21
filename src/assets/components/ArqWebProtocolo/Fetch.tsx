import React, { useState, useEffect } from 'react'

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const Fetch: React.FC = () => {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const url: string = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    return (
        <div>
            <h1>Posts</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.map((post: Post) => (
                        <li key={post.id}>{post.id} - {post.userId} - {post.title} - {post.body}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

