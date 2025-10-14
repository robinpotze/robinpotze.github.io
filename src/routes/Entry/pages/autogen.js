const modules = import.meta.glob('./*/**.{jsx,js}', { eager: true });

function normalizeSlug(s) {
    return String(s || '')
        .toLowerCase()
        .replace(/\s+/g, '') // remove spaces
        .replace(/[^a-z0-9\-]/g, ''); // keep alphanum and dash
}

const pages = Object.entries(modules).reduce((acc, [path, mod]) => {
    const parts = path.split('/');
    const folder = parts[1];
    if (!folder) return acc;
    const Component = mod.default || null;
    const data = mod.Data || mod.data || {};

    // prefer an explicit slug in the module's Data, then normalized title, then folder name
    const slugFromData = data.slug || (data.title ? normalizeSlug(data.title) : null);
    const slug = slugFromData || normalizeSlug(folder);

    acc[slug] = { Component, data };
    return acc;
}, {});

export { pages };
