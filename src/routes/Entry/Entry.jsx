import { useParams } from 'react-router-dom';
import { Hero, StaggeredMenu } from '@features';
import { DashLine } from '@deco';
import { GradualBlur, ScrollReveal } from '@effects';
import { pages } from './pages';

import './Entry.css';

export default function Entry() {

    const { title } = useParams();
    const { Component: PageComponent, data } = pages[title] || {};

    if (!PageComponent || !data) {
        return <div className='work-page' id='work-overview'>
            <StaggeredMenu />
            404 - Project Not Found
        </div>;
    }

    return (
        <div className='work-page' id={data.title.replace(/\s+/g, '-') + '-page'}>
            <StaggeredMenu />
            <Hero content={data} />
            <section className='work-section'>
                <div className='work-header'>
                    <div className='work-synopsis'>
                        <h2>Synopsis</h2>
                        <DashLine direction="Horizontal" />
                        <div className='work-synopsis-subtitle'>
                            <img src='/img/icon/CRS.svg' />
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