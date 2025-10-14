import { PixelCard, StaggeredMenu } from '@features';
import { pages as autogenPages } from '../Entry/pages/autogen';
import AnimatedLink from '@components/Transition/AnimatedLink';
import { motion } from 'framer-motion';
import MouseEffects from '@components/MouseEffects/MouseEffects';
import { Suspense, lazy } from 'react';
const BlackwallEffect = lazy(() => import('@components/Blackwall/Blackwall'));

import './Work.css';
import { im } from 'mathjs';

function WorkCard({ pageKey, data = {}, index = 0 }) {
    const bannerStyle = data.banner ? { backgroundImage: `url(${data.banner})` } : undefined;

    return (
        <motion.div
            key={pageKey}
            className="work-card-wrap"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
        >
            <AnimatedLink
                to={`/work/${pageKey}`}
                className="work-card"
                style={{ ['--i']: index }}
                duration={400}
                {...(data?.dispMap ? { 'data-disp': data.dispMap } : {})}
            >
                <div className="card-bg-wrap" style={bannerStyle}>
                    {data?.banner && (
                        <img className="card-thumb" src={data.banner} alt={`${data.title || pageKey} thumbnail`} style={{ display: 'none' }} />
                    )}
                    <PixelCard variant="default" className="pixel-card-inner">
                        <div className="work-card-content">
                            <span className='tech-small'>PRJ_{data.id.toString().padStart(3, '0')}</span>
                            <h3>{data?.title || pageKey}</h3>
                            <p className="synopsis">{data?.synopsis || ''}</p>
                            <span className="tech-small">{data?.year || ''}</span>
                        </div>
                    </PixelCard>
                </div>
            </AnimatedLink>
        </motion.div>
    );
}

export default function Work() {
    const items = Object.entries(autogenPages || {}).map(([key, val]) => ({
        key,
        data: (val && val.data) || {},
    }));

    function parseDateValue(val) {
        if (!val && val !== 0) return -Infinity;
        const asNumber = Number(val);
        if (Number.isFinite(asNumber) && String(val).length === 4) {
            return new Date(asNumber, 0, 1).getTime();
        }
        const parsed = Date.parse(String(val));
        return Number.isFinite(parsed) ? parsed : -Infinity;
    }

    items.sort((a, b) => {
        const aDate = parseDateValue(a.data.date ?? a.data.year);
        const bDate = parseDateValue(b.data.date ?? b.data.year);
        if (aDate !== bDate) return bDate - aDate;
        return a.data.id - b.data.id;
    });

    return (
        <div className='work-overview' id='work-overview'>
            {/* <StaggeredMenu /> */}
            <Suspense fallback={<div className="fixed inset-0 -z-10 pointer-events-none" />}>
                <BlackwallEffect onScrollTrigger={() => { "hero-section" }} />
            </Suspense>
            <MouseEffects />
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