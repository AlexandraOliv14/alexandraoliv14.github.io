import { useState, useEffect } from 'react';

function useInViewPort<T extends HTMLElement>(ref: React.RefObject<T>, options?: IntersectionObserverInit) {
    const [inViewport, setInViewport] = useState(false);
    const [observed, setObserved] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setInViewport(entry.isIntersecting);
            if (!observed && entry.isIntersecting) {
                setObserved(true);
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options, ref, observed]);

    return {inViewport, observed};
}
export default useInViewPort;