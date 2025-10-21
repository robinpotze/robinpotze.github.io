// Generic transition payload builder from a DOM element.
// NOTE: This intentionally excludes thumbnail/displacement specifics so that generic links
// do not trigger Work-card-only texture logic. For Work cards use buildWorkCardPayload.
export function buildRectPayload(el, viewport = { width: window.innerWidth, height: window.innerHeight }, extras = {}) {
    if (!el) {
        return null;
    }
    const rect = el.getBoundingClientRect();
    return {
        rect: {
            x: rect.left,
            y: rect.top,
            width: rect.width,
            height: rect.height,
            centerX: rect.left + rect.width / 2,
            centerY: rect.top + rect.height / 2,
        },
        viewport,
        ...extras,
    };
}

// Specialized payload for Work cards (includes thumbnail + displacement map).
export function buildWorkCardPayload(el, data = {}, viewport = { width: window.innerWidth, height: window.innerHeight }) {
    if (!el) { return null; }
    const base = buildRectPayload(el, viewport);
    if (!base) { return null; }

    const thumbSrc = resolveThumbSource(el, data);
    const dispSrc = resolveDispSource(el, data);

    // Only attach optional fields if present.
    return {
        ...base,
        ...(thumbSrc && { thumbSrc }),
        ...(dispSrc && { dispSrc })
    };
}

function resolveThumbSource(el, data) {
    if (data?.banner) { return data.banner; }
    const img = el.querySelector('img.card-thumb');
    return img?.src || null;
}

function resolveDispSource(el, data) {
    if (data?.dispMap) { return data.dispMap; }
    return el.dataset?.disp || null;
}

// Convenience for manual coordinates (e.g. virtual element)
export function buildPayloadFromRect(rect, viewport = { width: window.innerWidth, height: window.innerHeight }, extras = {}) {
    return {
        rect: {
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            centerX: rect.x + rect.width / 2,
            centerY: rect.y + rect.height / 2,
        },
        viewport,
        ...extras,
    };
}

// Backwards compatibility alias (legacy name used by older components)
export const buildTransitionPayload = buildRectPayload;