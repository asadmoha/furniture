const u = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const img = {
  hero: u("1586023492125-27b2c045efd7", 2200),
  cabinet: u("1595428774223-ef52624120d2"),
  chair: u("1503602642458-232111445657"),
  chair2: u("1538688525198-9b88f6f53126"),
  chair3: u("1567016432779-094069958ea5"),
  table: u("1617806118233-18e1de247200"),
  table2: u("1533090481720-856c6e3c1fdc"),
  sofa: u("1555041469-a586c61ea9bc"),
  interior: u("1550581190-9c1c48d21d6c"),
  interior2: u("1493663284031-b7e3aefcae8e"),
  workshop: u("1504148455328-c376907d081c"),
  workshop2: u("1588854337236-6889d631faa8"),
  woodwork: u("1530018607912-eff2daa1bac4"),
  tools: u("1416339306562-f3d12fefd36f"),
};
