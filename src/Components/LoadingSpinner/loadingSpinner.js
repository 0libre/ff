import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const LoadingSpinner = ({alt, className, loading, src}) => { 
    const [LoadingSpinnerRender, setLoadingSpinnerRender] = useState(loading)
    useEffect(() => {
		setLoadingSpinnerRender(loading)
    }, [loading])
    return (<img 
        alt={alt}
        className={LoadingSpinnerRender ? `${className} loading`: className}
        src={src}
    />)
}

LoadingSpinner.propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired
}
LoadingSpinner.defaultProps = {
    alt: 'loading-spinner',
    className: ''
}
