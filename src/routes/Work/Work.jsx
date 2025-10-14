import { PixelCard } from '@features';
import { pages as staticPages } from '../Entry/pages';
import { pages as autogenPages } from '../Entry/pages/autogen';
import AnimatedLink from '@components/Transition/AnimatedLink';
import { motion } from 'framer-motion';
import MouseEffects from '@components/MouseEffects/MouseEffects';

import './Work.css';

export default function Work() {
    const pages = Object.keys(autogenPages || {}).length ? autogenPages : staticPages;
    const entries = Object.entries(pages || {});

    return (
        <div className='work-overview' id='work-overview'>
            <MouseEffects />

            <motion.h2 className="work-title" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                Work
            </motion.h2>

            <div className="work-grid">
                {entries.map(([slug, { data }], i) => {
                    const to = `/work/${slug}`;
                    return (
                        <motion.div key={slug} className="work-card-wrap" whileHover={{ scale: 1.02 }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + i * 0.05 }}>
                            <AnimatedLink to={to} className="work-card" style={{ ['--i']: i }} duration={400} {...(data?.dispMap ? { 'data-disp': data.dispMap } : {})}>
                                <div className="card-bg-wrap" style={data?.banner ? { backgroundImage: `url(${data.banner})` } : {}}>
                                    {data?.banner && <img className="card-thumb" src={data.banner} alt="thumb" style={{ display: 'none' }} />}
                                    <PixelCard variant="default" className="pixel-card-inner">
                                        <div className="work-card-content">
                                            <h3>{data?.title || slug}</h3>
                                            <p className="synopsis">{data?.synopsis || ''}</p>
                                            <span className="tech-small">{data?.year || ''}</span>
                                        </div>
                                    </PixelCard>
                                </div>
                            </AnimatedLink>
                        </motion.div>
                    );
                })}
            </div>
        </div >
    );
}