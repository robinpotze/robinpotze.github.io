// Theme configuration - CSS variables and design tokens
export const THEME_CONFIG = {
    // Colors (cyberpunk aesthetic)
    COLORS: {
        PRIMARY: '#00ff00',
        SECONDARY: '#ff00ff',
        ACCENT: '#00ffff',
        BACKGROUND: '#000000',
        FOREGROUND: '#eeeeee',
        BRAND: '#ff0055',
        MUTED: '#666666'
    },

    // Typography
    TYPOGRAPHY: {
        FONT_FAMILY: {
            MONO: 'Kode Mono, monospace',
            DISPLAY: 'Orbitron, sans-serif',
            BODY: 'system-ui, sans-serif'
        },
        FONT_SIZE: {
            TINY: '0.625rem',    // 10px
            SMALL: '0.875rem',   // 14px
            BASE: '1rem',        // 16px
            LARGE: '1.25rem',    // 20px
            XL: '1.5rem',        // 24px
            XXL: '2rem',         // 32px
            HUGE: '3rem'         // 48px
        },
        FONT_WEIGHT: {
            LIGHT: 300,
            REGULAR: 400,
            MEDIUM: 500,
            BOLD: 700
        }
    },

    // Spacing scale
    SPACING: {
        XS: '0.25rem',    // 4px
        SM: '0.5rem',     // 8px
        MD: '1rem',       // 16px
        LG: '1.5rem',     // 24px
        XL: '2rem',       // 32px
        XXL: '3rem',      // 48px
        XXXL: '4rem'      // 64px
    },

    // Breakpoints
    BREAKPOINTS: {
        MOBILE: '480px',
        TABLET: '768px',
        DESKTOP: '1024px',
        WIDE: '1440px',
        ULTRAWIDE: '1920px'
    },

    // Z-index layers
    Z_INDEX: {
        BACKGROUND: -1,
        BASE: 0,
        CANVAS: 1,
        CONTENT: 10,
        NAVIGATION: 100,
        MODAL: 1000,
        TOOLTIP: 2000
    },

    // Effects
    EFFECTS: {
        BLUR: {
            SMALL: '4px',
            MEDIUM: '8px',
            LARGE: '16px'
        },
        SHADOW: {
            SMALL: '0 2px 4px rgba(0, 0, 0, 0.1)',
            MEDIUM: '0 4px 8px rgba(0, 0, 0, 0.2)',
            LARGE: '0 8px 16px rgba(0, 0, 0, 0.3)'
        },
        GLOW: {
            PRIMARY: '0 0 10px #00ff00',
            SECONDARY: '0 0 10px #ff00ff',
            ACCENT: '0 0 10px #00ffff'
        }
    }
};

// Helper function to generate CSS variables
export function generateCSSVariables() {
    const vars = {};

    // Colors
    Object.entries(THEME_CONFIG.COLORS).forEach(([key, value]) => {
        vars[`--color-${key.toLowerCase()}`] = value;
    });

    // Spacing
    Object.entries(THEME_CONFIG.SPACING).forEach(([key, value]) => {
        vars[`--spacing-${key.toLowerCase()}`] = value;
    });

    return vars;
}
