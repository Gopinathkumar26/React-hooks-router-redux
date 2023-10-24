import axios from 'axios';
import React, { useEffect, useState } from 'react';

//useState & useReducer both are used for state management.
// this component useState used.

function DataFetchingOne() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => { 
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setError('')
                setPost(response.data)
            })
            .catch(error => {
                setLoading(false)
                setError('Something went wrong')
                setPost({})
            })
    }, [])

  return (
    <div>
        {loading ? 'Loading' : post.title}
        {error ? error : null}
    </div>
  )
}

export default DataFetchingOne;