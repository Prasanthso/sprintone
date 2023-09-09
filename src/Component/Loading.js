import React, { useEffect, useState } from 'react';

const Loading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay (you can replace this with your actual loading logic)
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000);

        // Clear the timeout when the component unmounts
    }, []);

    return (
        <div className={`fixed top-0 left-0 h-1 bg-indigo-500 transition-all duration-1000 ${loading ? 'w-full' : 'w-0'}`}></div>
    );
};

export default Loading;
