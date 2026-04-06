/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                /* ── Brand Violet (primary) ── */
                brand: {
                    50:  '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',   /* main */
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                },
                /* ── Accent Fuchsia ── */
                fuchsia: {
                    400: '#e879f9',
                    500: '#d946ef',
                    600: '#c026d3',
                },
                /* ── Highlight Cyan ── */
                highlight: {
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                },
            },
            backgroundImage: {
                'gradient-brand': 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
                'gradient-brand-alt': 'linear-gradient(135deg, #7c3aed 0%, #c026d3 50%, #06b6d4 100%)',
                'gradient-hero': 'radial-gradient(ellipse at 30% 20%, #1e1040 0%, #09090b 55%)',
                'gradient-card': 'linear-gradient(145deg, rgba(139,92,246,0.08) 0%, rgba(217,70,239,0.05) 100%)',
            },
            animation: {
                'fade-in':    'fadeIn 0.8s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'slide-down': 'slideDown 0.3s ease-out forwards',
                'float':      'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
                'spin-slow':  'spin 12s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%':   { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%':   { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%':   { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%':      { transform: 'translateY(-18px)' },
                },
            },
            boxShadow: {
                'brand-sm':  '0 0 20px rgba(139,92,246,0.15)',
                'brand-md':  '0 0 40px rgba(139,92,246,0.25)',
                'brand-lg':  '0 0 80px rgba(139,92,246,0.35)',
                'fuchsia-sm':'0 0 20px rgba(217,70,239,0.15)',
            },
        },
    },
    plugins: [],
}
