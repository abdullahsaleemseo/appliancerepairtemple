import type { ApplianceKey } from './types';

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  service: ApplianceKey;
  width: number;
  height: number;
};

/** Gallery images, optimized to WebP with descriptive file names. The first five also appear on the homepage. */
export const gallery: GalleryImage[] = [
  {
    src: '/images/gallery/refrigerator-ice-maker-replacement-temple-tx.webp',
    alt: 'Technician replacing the ice maker assembly inside a refrigerator freezer',
    caption: 'Replacing a refrigerator ice maker assembly',
    service: 'refrigerator',
    width: 1536,
    height: 1024,
  },
  {
    src: '/images/gallery/dryer-drum-roller-replacement-temple-tx.webp',
    alt: 'Technician replacing worn drum support rollers on a clothes dryer with a ratchet',
    caption: 'Replacing worn dryer drum rollers',
    service: 'dryer',
    width: 1536,
    height: 1024,
  },
  {
    src: '/images/gallery/dishwasher-pump-repair-temple-tx.webp',
    alt: 'Technician in work gloves replacing the pump under a stainless steel dishwasher',
    caption: 'Dishwasher pump repair',
    service: 'dishwasher',
    width: 1536,
    height: 1024,
  },
  {
    src: '/images/gallery/washer-drive-belt-motor-inspection-temple-tx.webp',
    alt: 'Technician using a flashlight to inspect the drive belt and motor of a washing machine',
    caption: 'Inspecting a washer drive belt and motor',
    service: 'washer',
    width: 1546,
    height: 1017,
  },
  {
    src: '/images/gallery/oven-repair-heating-element-temple-tx.webp',
    alt: 'Range with the oven door open and the heating element glowing after an oven repair',
    caption: 'Checking an oven after a heating repair',
    service: 'oven',
    width: 1542,
    height: 1020,
  },
  {
    src: '/images/gallery/microwave-control-board-testing-temple-tx.webp',
    alt: 'Technician testing the control board inside an opened microwave with a multimeter on the bench',
    caption: 'Testing a microwave control board',
    service: 'microwave',
    width: 1533,
    height: 1026,
  },
  {
    src: '/images/gallery/range-wiring-multimeter-test-temple-tx.webp',
    alt: 'Technician testing range wiring at the terminal block with a digital multimeter',
    caption: 'Testing range wiring with a multimeter',
    service: 'oven',
    width: 1536,
    height: 1024,
  },
  {
    src: '/images/gallery/gas-cooktop-burner-repair-temple-tx.webp',
    alt: 'Technician in orange work gloves working on the burner assembly under a gas cooktop',
    caption: 'Working under a gas cooktop',
    service: 'oven',
    width: 1600,
    height: 957,
  },
  {
    src: '/images/gallery/washing-machine-motor-belt-repair-temple-tx.webp',
    alt: 'Technician adjusting the motor and drive belt on a washing machine with the back panel removed',
    caption: 'Washing machine motor and belt repair',
    service: 'washer',
    width: 1448,
    height: 1086,
  },
  {
    src: '/images/gallery/washing-machine-pump-motor-removal-temple-tx.webp',
    alt: 'Technician removing a pump and motor assembly from the bottom of a washing machine',
    caption: 'Removing a washer pump and motor assembly',
    service: 'washer',
    width: 1600,
    height: 900,
  },
  {
    src: '/images/gallery/top-load-washer-transmission-repair-temple-tx.webp',
    alt: 'Top-load washer transmission gearbox opened on a workbench for repair',
    caption: 'Top-load washer transmission repair',
    service: 'washer',
    width: 1600,
    height: 875,
  },
];
