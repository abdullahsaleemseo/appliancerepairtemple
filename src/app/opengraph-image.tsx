import { ImageResponse } from 'next/og';
import { site } from '@/config/site';

export const alt = `${site.brandName}: appliance repair in ${site.city}, ${site.stateAbbr}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0A0F1C',
          color: '#FFFFFF',
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, color: '#FF9A5C', letterSpacing: 2 }}>{site.brandName.toUpperCase()}</div>
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 24, lineHeight: 1.05 }}>
          {`Appliance Repair in ${site.city}, ${site.state}`}
        </div>
        <div style={{ fontSize: 34, marginTop: 32, color: 'rgba(255,255,255,0.8)' }}>
          Refrigerators · Washers · Dryers · Dishwashers · Ovens
        </div>
      </div>
    ),
    size,
  );
}
