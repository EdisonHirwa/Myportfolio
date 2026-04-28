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
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
            },
            colors: {
                /* ── Image theme colors ── */
                'brand-dark': '#010409',
                'brand-blue': '#001a2c',
                'brand-gold': '#f5a623',

                /* ── Brand Cyan (primary) ── */
                brand: {
                    50: '#ecfeff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',   /* main */
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                },
                /* ── Accent Blue ── */
                blue: {
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                },
                /* ── Highlight Teal ── */
                highlight: {
                    400: '#2dd4bf',
                    500: '#14b8a6',
                    600: '#0d9488',
                },
            },
            backgroundImage: {
                'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
                'spectral': 'conic-gradient(from 180deg at 50% 50%, #010409 0deg, #3b82f6 72deg, #f97316 144deg, #60a5fa 216deg, #06b6d4 288deg, #010409 360deg)',
                'gradient-brand': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                'gradient-brand-alt': 'linear-gradient(135deg, #0891b2 0%, #2563eb 50%, #3b82f6 100%)',
                'gradient-hero': 'radial-gradient(ellipse at 30% 20%, #010409 0%, #09090b 55%)',
                'gradient-card': 'linear-gradient(145deg, rgba(6,182,212,0.08) 0%, rgba(59,130,246,0.05) 100%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'slide-down': 'slideDown 0.3s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
                'spin-slow': 'spin 12s linear infinite',
                'lens-wobble': 'lensWobble 10s ease-in-out infinite',
                'icon-orbit': 'iconOrbit var(--dur, 10s) ease-in-out infinite',
                'icon-appear': 'iconAppear 1.4s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-18px)' },
                },
                lensWobble: {
                    '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
                    '33%': { transform: 'translate(10px, -15px) rotate(5deg) scale(1.05)' },
                    '66%': { transform: 'translate(-10px, 10px) rotate(-5deg) scale(0.95)' },
                },
                iconOrbit: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '25%': { transform: 'translate(var(--dx), var(--dy))' },
                    '50%': { transform: 'translate(calc(var(--dx) * -0.5), calc(var(--dy) * 1.2))' },
                    '75%': { transform: 'translate(calc(var(--dx) * 0.8), calc(var(--dy) * -0.6))' },
                },
                iconAppear: {
                    'from': { opacity: '0', transform: 'scale(0.3) rotate(-10deg)' },
                    'to': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
                }
            },
            boxShadow: {
                'lens': 'inset 0 0 40px rgba(255, 255, 255, 0.1), 0 10px 40px rgba(0, 0, 0, 0.3)',
                'brand-sm': '0 0 20px rgba(6,182,212,0.15)',
                'brand-md': '0 0 40px rgba(6,182,212,0.25)',
                'brand-lg': '0 0 80px rgba(6,182,212,0.35)',
                'blue-sm': '0 0 20px rgba(59,130,246,0.15)',
            },
        },
    },
    plugins: [],
}
