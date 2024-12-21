/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1d1dff",
				lighter: "#8585ff",
				dark: "#000082",
			},
			boxShadow: {
				softGlow: "0 4px 5px 30px rgba(29, 29, 255, 0.08)",
			},
		},
	},
	plugins: [],
};
