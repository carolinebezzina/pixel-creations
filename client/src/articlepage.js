import React from 'react';

const ArticlePage = ({ match }) => {

    const fetchData = async () => {
        const result = await fetch(`/api/articles/${name}`);
        const body = await result.json();
    }

    fetchData();
}