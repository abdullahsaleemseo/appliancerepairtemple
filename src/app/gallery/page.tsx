import Image from 'next/image';
import Link from 'next/link';
import { routes, site } from '@/config/site';
import { gallery } from '@/content/gallery';
import { serviceByKey, serviceHref } from '@/content/services';
import { CtaRow } from '@/components/Buttons';
import { FinalCta } from '@/components/FinalCta';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Appliance Repair Gallery | ${site.brandName}`,
  description: `Photos of appliance repairs: refrigerator ice makers, dryer rollers, dishwasher pumps, washer belts and motors, ovens, ranges and microwaves. Temple, TX.`,
  path: routes.gallery,
});

export default function GalleryPage() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Gallery', path: routes.gallery }]} title="Appliance Repair Gallery," accent="inside the repairs.">
        <div className="prose-copy prose-dark">
          <p>
            A look inside the appliance repairs we handle: the parts that wear out in refrigerators, washers, dryers, dishwashers,
            ovens, ranges and microwaves, and the work it takes to fix them. Pick any photo to read more about that repair.
          </p>
        </div>
        <div className="mt-8">
          <CtaRow location="gallery_hero" dark />
        </div>
      </PageHero>

      <section aria-label="Repair photos" className="bg-canvas py-16 md:py-24">
        <ul className="mx-auto grid max-w-site gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-6">
          {gallery.map((g, i) => (
            <li key={g.src}>
              <figure className="group h-full overflow-hidden rounded-card border border-sand bg-white">
                <div className="relative aspect-[3/2] overflow-hidden bg-canvas-2">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={g.width}
                    height={g.height}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    priority={i < 3}
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
                  <span className="font-display text-[17px] font-bold tracking-[-0.02em] text-ink">{g.caption}</span>
                  <Link
                    href={serviceHref(g.service)}
                    className="inline-flex shrink-0 items-center gap-1 text-[13px] font-semibold text-ink-muted hover:text-flame"
                    aria-label={`${serviceByKey[g.service].name} repair details`}
                  >
                    {serviceByKey[g.service].name} repair <Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2.4} />
                  </Link>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <FinalCta formId="gallery_final" title="Seen your problem here?" accent="Let’s fix it." />
    </>
  );
}
