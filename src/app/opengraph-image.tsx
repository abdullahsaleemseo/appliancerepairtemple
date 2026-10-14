import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { site } from '@/config/site';

export const alt = `${site.brandName}: appliance repair in ${site.city}, ${site.stateAbbr}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  const logo = `data:image/svg+xml;base64,${readFileSync(join(process.cwd(), 'public/brand/logo-compact.svg')).toString('base64')}`;
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt="" width={411} height={120} />
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 48, lineHeight: 1.05 }}>
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
