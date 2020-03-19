import React, {useEffect} from 'react';

export default function SrollUpOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return null;
}
