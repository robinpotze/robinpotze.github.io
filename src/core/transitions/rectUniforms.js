// Utility helpers for applying rect + viewport data to shader uniforms.
// Normalizes DOM rect coordinates to 0-1 space relative to viewport.

export function normalizeRect(rect, viewport) {
    if (!rect || !viewport || !viewport.width || !viewport.height) {
        return { cx: 0.5, cy: 0.5, w: 0, h: 0 };
    }
    const cx = rect.centerX / viewport.width;
    // invert Y so top=1 in shader space matching existing convention
    const cy = 1 - rect.centerY / viewport.height;
    const w = rect.width / viewport.width;
    const h = rect.height / viewport.height;
    return { cx, cy, w, h };
}

export function applyRectUniforms(uniforms, normalized) {
    if (!uniforms || !uniforms.uRectCenter || !uniforms.uRectSize) {
        return;
    }
    const { cx, cy, w, h } = normalized || { cx: 0.5, cy: 0.5, w: 0, h: 0 };
    uniforms.uRectCenter.value.set(cx, cy);
    uniforms.uRectSize.value.set(w, h);
}

// Convenience: apply directly from payload structure { rect, viewport }.
export function applyPayloadRect(uniforms, payload) {
    if (!payload) {
        applyRectUniforms(uniforms, null);
        return;
    }
    const normalized = normalizeRect(payload.rect, payload.viewport);
    applyRectUniforms(uniforms, normalized);
}
