import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { lazy } from 'react';
import PropTypes from 'prop-types';
import './WorkCardContent.css';

const PixelCard = lazy(() => import('@components/ui/PixelCard/PixelCard.jsx'));

export default function WorkCardContent({
    item,
    index,
    progress,
    onNavigate
}) {
    const { data, key: pageKey } = item;

    const banner = data.banner;
    const dispAttr = data?.dispMap ? { 'data-disp': data.dispMap } : {};
    const idLabel = `PRJ_${(data.id || index).toString().padStart(3, '0')}`;

    const handleClick = (e) => {
        e.preventDefault();
        if (onNavigate) {
            onNavigate(pageKey);
        }
    };

    return (
        <motion.article
            className="work-card"
            style={{
                '--i': index,
                ...(banner ? { backgroundImage: `url(${banner})` } : {})
            }}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: progress, y: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            onClick={handleClick}
            {...dispAttr}
        >
            <Suspense fallback={<div className="pixel-card-fallback" />}>
                <PixelCard variant="default" className="pixel-card-inner">
                    <div className="work-card-content">
                        <span className='deco-small'>{idLabel}</span>
                        <h3>{data?.title || pageKey}</h3>
                        <p className="synopsis">{data?.synopsis || ''}</p>
                        <span className="deco-small">{data?.year || ''}</span>
                    </div>
                </PixelCard>
            </Suspense>
        </motion.article>
    );
}

WorkCardContent.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    onNavigate: PropTypes.func
};
