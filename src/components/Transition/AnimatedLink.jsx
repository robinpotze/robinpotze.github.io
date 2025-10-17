import { Link, useNavigate } from 'react-router-dom';
import { useTransition } from '@core/transitions';

export default function AnimatedLink({ to, children, className = '', delay = 50, duration = 700, ...props }) {
    const navigate = useNavigate();
    const { start } = useTransition();

    const onClick = async (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();

        // capture bounding rect of the clickable element (closest anchor or the currentTarget)
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const payload = {
            rect: {
                x: rect.x,
                y: rect.y,
                width: rect.width,
                height: rect.height,
                centerX: rect.x + rect.width / 2,
                centerY: rect.y + rect.height / 2
            },
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        };

        // find a thumbnail image inside the clicked element (if any)
        const thumbImg = el.querySelector && el.querySelector('img.card-thumb');
        if (thumbImg && thumbImg.src) {
            payload.thumbSrc = thumbImg.src;
        }

        // optional displacement map specified via data-disp on the link element
        if (el.dataset && el.dataset.disp) {
            payload.dispSrc = el.dataset.disp;
        }

        await start({ out: duration, payload });
        navigate(to);
    };

    return (
        <a href={to} onClick={onClick} className={className} {...props}>
            {children}
        </a>
    );
}
