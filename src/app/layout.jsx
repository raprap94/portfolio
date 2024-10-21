// app/layout.jsx
import './globals.css'; // Ensure global styles are imported

export const metadata = {
  title: 'My Portfolio',
  description: 'A showcase of my skills and projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
