import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 22,
          background: '#050f0a', // Your site's dark background hex
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#10b981', // Your site's neon green hex
          borderRadius: '8px', // Slight rounding for that modern look
          border: '2px solid #10b981', // Neon green border
          fontWeight: 900, // Extra bold text
          boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)', // Subtle glow effect
        }}
      >
        M
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}