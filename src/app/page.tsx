import Link from 'next/link';
import { routes, site } from '@/config/site';
import { homeFaqs, homeProblems, homeServices, homeSteps } from '@/content/home';
import { serviceByKey, serviceHref } from '@/content/services';
import { MapEmbed } from '@/components/AreaList';
import { CallCard } from '@/components/CallCard';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PhoneLink } from '@/components/PhoneLink';
import { Section, SectionHeading } from '@/components/Section';
import { businessSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

/** Homepage copy follows content/homepage-v2.md word for word (placeholder sentences left out). */
export const metadata = pageMetadata({
  title: 'Appliance Repair Temple TX | Fridge, Washer & Oven Repair',
  description:
    'Appliance repair in Temple, TX for refrigerators, washers, dryers, ovens and dishwashers. All major brands across Bell County. Call (254) 615-2088.',
  path: '/',
});

const inline = 'font-semibold text-ink underline decoration-flame decoration-2 underline-offset-4 hover:decoration-ink';

export default function HomePage() {
  return (
    <>
      <JsonLd data={businessSchema({ knowsAbout: homeServices.map((s) => s.heading) })} />

      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ink">
        <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_70%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 h-[620px] w-[620px] rounded-full bg-flame/30 blur-[150px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-frost/15 blur-[140px]" />

        <div className="relative mx-auto grid max-w-site items-center gap-14 px-4 pb-20 pt-12 md:pt-16 lg:grid-cols-[1.12fr_1fr] lg:gap-16 lg:px-6 lg:pb-20 lg:pt-14">
          <div>
            <h1 className="h-display text-[2.9rem] text-white sm:text-[4.2rem] lg:text-[4.4rem] xl:text-[4.75rem]">
              Appliance Repair in {site.city}, {site.stateAbbr}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl lg:text-lg xl:text-xl">
              Technicians handle appliance repair in Temple, TX for homeowners, renters and landlords across Bell County.
              They fix refrigerators, freezers, washers, dryers, dishwashers, ovens, stoves, ranges, cooktops and microwaves, covering
              all the major brands you are likely to have in your kitchen or laundry room. Service reaches every part of Temple, from
              older homes near downtown to newer builds on the west side, plus Belton, Killeen, Harker Heights, Salado and the smaller
              towns nearby. Call us at{' '}
              <PhoneLink location="hero_text" className="font-semibold text-white underline decoration-flame underline-offset-4" /> and
              describe what your appliance is doing. If it truly cannot wait, see the page on{' '}
              <Link href={routes.cityPage} className="font-semibold text-white underline decoration-flame underline-offset-4 hover:text-flame-glow">
                emergency and same-day appliance repair
              </Link>
              .
            </p>
          </div>
          <CallCard location="home_hero_card" headingLevel="p" />
        </div>
      </section>

      {/* Services */}
      <Section id="services" labelledBy="services-heading">
        <SectionHeading
          id="services-heading"
          title="Appliance repair services in Temple"
          intro="Our appliance repair service in Temple, TX covers the seven appliances that keep a household running. Here is a short look at each one. Every service has its own page with the common problems, the usual repairs and what to check before you call."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {homeServices.map((s) => (
            <article key={s.key} className="card flex flex-col p-6 md:p-7">
              <h3 className="flex items-center gap-3 font-display text-[21px] font-bold tracking-[-0.02em] text-ink">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-canvas text-ink">
                  <Icon name={serviceByKey[s.key].icon} className="h-5 w-5" />
                </span>
                {s.heading}
              </h3>
              <p className="mt-3 flex-1 text-[15.5px] leading-relaxed text-ink-body">
                {s.text} {s.lead}{' '}
                <Link href={serviceHref(s.key)} className={inline}>
                  {s.anchor}
                </Link>
                {s.after}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Who repairs */}
      <Section tone="white" labelledBy="who-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="who-heading" title="Who repairs appliances in Temple, TX?" />
          <div className="prose-copy">
            <p>
              Appliance repair technicians who work across Temple and Bell County handle refrigerators, washers, dryers,
              dishwashers, ovens and microwaves, and you can reach them at <PhoneLink location="who_repairs" />. You describe the problem on
              the phone, and a technician takes care of the visit, the diagnosis and the repair.
            </p>
            <p>
              Home appliance repair in Temple and the surrounding towns is the whole job, so the problems that come up every week are the
              same ones you are likely dealing with now. A technician who sees them that often knows the sound of a Whirlpool washer with a
              broken coupler, why a Samsung ice maker keeps freezing up, and where a GE oven tucks away its temperature sensor.
            </p>
            <p>
              Knowing the area matters for appliance repair in Temple, Texas more than people expect. The city has a little of everything: older homes near Downtown Temple with original wiring and gas lines, ranch houses in Western Hills and Midway,
              newer construction in West Temple off West Adams Ave, and plenty of rentals near Temple College and the Baylor Scott &amp;
              White medical center. Each type of house brings its own kind of appliance trouble, and a good technician plans for it before
              pulling into the driveway.
            </p>
            <p>
              Most of all, ask for a plain-language explanation. Before a single tool comes out, ask what failed, what the repair involves
              and whether it makes sense for an appliance of that age.
            </p>
          </div>
        </div>
      </Section>

      {/* Common problems */}
      <Section labelledBy="problems-heading">
        <SectionHeading
          id="problems-heading"
          title="Common appliance problems in Temple homes"
          intro="A few problems come up again and again around here, and most of them trace back to the local climate, the water or the age of the house."
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {homeProblems.map((p) => (
            <li key={p.title} className="card p-6 md:p-7">
              <p className="text-[15.5px] leading-relaxed text-ink-body">
                <strong className="font-display text-[18px] font-bold text-ink">{p.title}</strong> {p.text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Cost */}
      <Section tone="white" labelledBy="cost-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="cost-heading" title="How much does appliance repair cost in Temple, TX?" />
          <div className="prose-copy">
            <p>
              The cost of appliance repair in Temple, TX depends on the appliance, the part that failed and how long the repair takes, so
              we do not guess a price over the phone before anyone has looked at it.
            </p>
            <p>A few things drive the final number:</p>
            <p>
              The part itself is the biggest factor. A door gasket, a thermal fuse or a drain pump costs far less than a control board or a
              sealed system repair on a refrigerator. Labor depends on how much of the appliance has to come apart; a dryer belt is quicker
              than a dishwasher pump that sits under the tub. Brand and age matter too, because parts for high-end and older models can
              cost more or take longer to arrive.
            </p>
            <p>
              Ask for the price and agree to it before the repair begins. If you are unsure the repair makes financial sense, ask the
              technician that too.
            </p>
          </div>
        </div>
      </Section>

      {/* Repair or replace */}
      <Section labelledBy="worth-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="worth-heading" title="Is it worth repairing an appliance?" />
          <div className="prose-copy">
            <p>
              Most of the time, yes. A repair usually makes sense when the appliance is in the first two thirds of its expected life and
              the repair costs less than about half the price of a comparable new unit.
            </p>
            <p>
              Here is how that rule of thumb plays out. A six-year-old refrigerator with a failed evaporator fan is an easy call: the part
              is common, the repair is quick and the fridge has years left. A fourteen-year-old refrigerator that needs a new compressor is
              a different story; at that age, putting the money toward a new unit is often smarter. A dryer of almost any age with a broken
              belt or a blown thermal fuse is worth fixing, because those are some of the least expensive repairs in the house.
            </p>
            <p>
              Ask the technician for a straight answer about your appliance. For a deeper look at lifespans and the numbers behind the
              decision, read our guide on{' '}
              <Link href="/blog/repair-or-replace-appliance/">whether to repair or replace an appliance</Link>.
            </p>
          </div>
        </div>
      </Section>

      {/* How a visit works */}
      <Section tone="white" labelledBy="visit-heading">
        <SectionHeading id="visit-heading" title="How a repair visit works" />
        <HowItWorks steps={homeSteps} />
      </Section>

      {/* Brands */}
      <Section labelledBy="brands-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading id="brands-heading" title="Appliance brands we repair" />
          <div className="prose-copy">
            <p>
              Repairs cover the brands found in most Temple kitchens and laundry rooms: Whirlpool, GE, Samsung, LG, Frigidaire, Maytag,
              KitchenAid, Bosch, Kenmore, Electrolux, Amana and Speed Queen. Each brand has its own quirks, error codes and model number
              locations, and our <Link href={routes.brands}>appliance brands guide</Link> covers them one by one. This is an independent
              repair service, not affiliated with or authorized by any of these manufacturers.
            </p>
          </div>
        </div>
      </Section>

      {/* Areas */}
      <Section tone="white" labelledBy="areas-heading">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading id="areas-heading" title="Areas we serve around Temple" className="!mb-8" />
            <div className="prose-copy">
              <p>
                Inside Temple, technicians work in every neighborhood, including Downtown Temple, Western Hills, Midway, West Temple off West Adams
                Ave and the streets around Temple College and the Baylor Scott &amp; White medical center. That covers the 76501, 76502
                and 76504 ZIP codes.
              </p>
              <p>
                The Bell County appliance repair area reaches south along I-35 to Belton and Salado, west along US-190 to Harker Heights
                and Killeen, and out to Nolanville, Morgan&apos;s Point Resort, Troy, Little River-Academy, Rogers, Holland and Moody. If
                you searched for appliance repair near me in Temple or one of those towns, you are in the right place. See the full list
                on our <Link href={routes.areas}>service areas page</Link>.
              </p>
            </div>
          </div>
          <MapEmbed place={site.city} zoom={12} />
        </div>
      </Section>

      {/* FAQ */}
      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading id="faq-heading" title="Frequently asked questions" />
          <FaqList faqs={homeFaqs} />
        </div>
      </Section>

      <FinalCta
        formId="home_final"
        cardHeadingLevel="p"
        cardTitle="Book a repair visit"
        title="Book your"
        accent="repair"
        text={
          <>
            A broken appliance throws off the whole house, and the sooner it is looked at, the less it usually costs. For appliance repair
            in Temple, TX, call <PhoneLink location="home_final_text" className="font-semibold text-white underline decoration-flame underline-offset-4" />{' '}
            or{' '}
            <Link href={routes.request} className="font-semibold text-white underline decoration-flame underline-offset-4 hover:text-flame-glow">
              book your appliance repair
            </Link>
            , and describe what the appliance is doing.
          </>
        }
      />
    </>
  );
}
