import { NavigationMenu } from '@features';
import { Suspense, lazy } from 'react';
import { useWorkCardTransition } from '@hooks';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { pages as autogenPages } from '../Entry/pages/autogen';
import './Work.css';

const PixelCard = lazy(() => import('@components/interactive/PixelCard/PixelCard.jsx'));

function parseDate(val) {
    if (val == null && val !== 0) return -Infinity;
    const n = Number(val);
    if (Number.isFinite(n) && String(val).length === 4) return new Date(n, 0, 1).getTime();
    const p = Date.parse(String(val));
    return Number.isFinite(p) ? p : -Infinity;
}

function sortItems(pages) {
    return Object.entries(pages || {})
        .map(([key, val]) => ({ key, data: val?.data || {} }))
        .sort((a, b) => {
            const aDate = parseDate(a.data.date ?? a.data.year);
            const bDate = parseDate(b.data.date ?? b.data.year);
            if (aDate !== bDate) return bDate - aDate;
            return (a.data.id || 0) - (b.data.id || 0);
        });
}

function WorkCard({ pageKey, data = {}, index = 0 }) {
    const { trigger } = useWorkCardTransition({ to: `/work/${pageKey}`, data, duration: 400, delay: 50 });
    const banner = data.banner;
    const dispAttr = data?.dispMap ? { 'data-disp': data.dispMap } : {};
    const idLabel = `PRJ_${(data.id || index).toString().padStart(3, '0')}`;

    return (
        <motion.article
            className="work-card"
            style={{ '--i': index, ...(banner ? { backgroundImage: `url(${banner})` } : {}) }}
            whileHover={{ scale: 1.02, zIndex: index + 5 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            onClick={(e) => { e.preventDefault(); trigger(e.currentTarget); }}
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

export default function Work() {
    const items = useMemo(() => sortItems(autogenPages), []);

    return (
        <div className='work-overview' id='work-overview'>
            <NavigationMenu />
            <motion.h2 className="work-title" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                Work
            </motion.h2>
            <div className="work-pages">
                {items.map((item, i) => (
                    <WorkCard key={item.key} pageKey={item.key} data={item.data} index={i} />
                ))}
            </div>
        </div >
    );
}

WorkCard.propTypes = {
    pageKey: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};