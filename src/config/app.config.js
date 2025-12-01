// Application-wide configuration
export const APP_CONFIG = {
    // Site metadata
    SITE: {
        TITLE: 'Robin Potze - Portfolio',
        DESCRIPTION: 'AMBIGUOUS AMBIVALENCE',
        AUTHOR: 'Robin Potze',
        URL: 'https://robinpotze.nl',
        LOCALE: 'en-US',
        LOCATION: 'Groningen, NL'
    },

    // Project metadata
    PROJECT: {
        NUMBER: 'PRJNo::000',
        PATH: 'C://PRJ/PF/CUSTOM',
        VERSION: 'V1',
        SUBTITLE: 'PRJNo::000 | C://PRJ/PF/CUSTOM | V1 |GRONINGEN | NL'
    },

    // Navigation scroll thresholds
    NAVIGATION: {
        WORK_SCROLL_THRESHOLD: 0.95, // Navigate to /work at 95% scroll
        SCROLL_DAMPING: 0.1
    },

    // Performance settings
    PERFORMANCE: {
        POWER_PREFERENCE: 'high-performance',
        ANTIALIAS: true,
        SHADOWS: true,
        PRESERVE_DRAWING_BUFFER: false
    }
};
