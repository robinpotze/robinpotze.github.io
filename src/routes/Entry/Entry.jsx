import useLenisScroll from '@core/scroll/useLenisScroll';
import { DashLine, GradualBlur, ScrollReveal } from '@components';
import { ProjectHero, NavigationMenu } from '@features';
import { useParams } from 'react-router-dom';
import { pages } from './pages';

import './Entry.css';

export default function Entry() {
    useLenisScroll({
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
    });

    const { title } = useParams();
    const normalizedTitle = title.toLowerCase().replaceAll(/[\s-]+/g, '');
    const { Component: PageComponent, data } = pages[normalizedTitle] || {};

    if (!PageComponent || !data) {
        return <div className='work-page' id='work-overview'>
            <StaggeredMenu />
            404 - Project Not Found
        </div>;
    }

    return (
        <div className='work-page' id={data.title.replaceAll(/\s+/g, '-') + '-page'}>
            <NavigationMenu />
            <ProjectHero content={data} />
            <section className='work-section'>
                <div className='work-header'>
                    <div className='work-synopsis'>
                        <h2>Synopsis</h2>
                        <DashLine direction="Horizontal" />
                        <div className='work-synopsis-subtitle'>
                            <img src='/img/icon/CRS.svg' alt='Cross symbol divider' />
                            <p className='tech-small'>{data.synopsis}</p>
                        </div>
                    </div>
                    <ScrollReveal>
                        {data.description}
                    </ScrollReveal>
                </div>
                <PageComponent />
            </section>

            <GradualBlur
                target="page"
                position="bottom"
                height="6rem"
                strength={2}
                divCount={5}
                curve="bezier"
                exponential={true}
                opacity={1}
            />
        </div >
    );
}