// The co-author network on the Publications page, built at build time from the
// publication records: one circle per author, sized by the number of works
// shared with B. M. Tran, and one line for each pair of authors who share a
// work. The positions come from a small force layout with a fixed start, so
// every build draws the same picture and the page ships plain SVG with no
// graph library.

export const SELF = 'B. M. Tran';

export interface PaperRecord { id: string; authors: string[]; }
export interface Person { key: string; name: string; self: boolean; works: string[]; }
export interface Tie { a: string; b: string; works: string[]; }
export interface Network { people: Person[]; ties: Tie[]; }
export interface Label { x: number; y: number; anchor: 'start' | 'middle' | 'end'; }
export interface PlacedPerson extends Person { x: number; y: number; r: number; label: Label; }
export interface PlacedTie extends Tie { self: boolean; path: string; }
export interface Drawing { viewBox: string; people: PlacedPerson[]; ties: PlacedTie[]; }

/** A stable, URL-safe key for an author name ("D. Q.-A. Nguyen" becomes "d-q-a-nguyen"). */
export function personKey(name: string): string {
  return name.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function buildNetwork(papers: PaperRecord[]): Network {
  const people = new Map<string, Person>();
  const ties = new Map<string, Tie>();
  for (const paper of papers) {
    const keys = [...new Set(paper.authors)].map(name => {
      const key = personKey(name);
      const person = people.get(key) ?? { key, name, self: name === SELF, works: [] };
      if (person.name !== name) throw new Error(`Authors "${person.name}" and "${name}" share the key "${key}".`);
      person.works.push(paper.id);
      people.set(key, person);
      return key;
    });
    keys.forEach((first, i) => keys.slice(i + 1).forEach(second => {
      const [a, b] = [first, second].sort();
      const tie = ties.get(`${a} ${b}`) ?? { a, b, works: [] };
      tie.works.push(paper.id);
      ties.set(`${a} ${b}`, tie);
    }));
  }
  return { people: [...people.values()], ties: [...ties.values()] };
}

interface LayoutOptions { width: number; height: number; fontSize: number; }
interface Box { x0: number; y0: number; x1: number; y1: number; }

/** Rough advance widths of Crimson Pro in em, enough to size the view box. */
function textWidth(text: string, fontSize: number, bold: boolean): number {
  let em = 0;
  for (const ch of text) em += ch === ' ' || ch === '.' ? 0.25 : ch === '-' ? 0.33 : /[A-Z]/.test(ch) ? 0.66 : 0.47;
  return em * fontSize * (bold ? 1.06 : 1);
}

const round = (value: number) => Math.round(value * 10) / 10;

/**
 * Lays the network out in a width × height box. B. M. Tran sits in the middle.
 * Co-authors who are linked to one another, and not only through B. M. Tran,
 * form a group; each group sits together on the left or the right arc, with a
 * gap between groups, so every label can run outwards without touching another.
 * Lines to B. M. Tran are straight; lines between co-authors bow towards the
 * middle. The view box is fitted to what was drawn.
 */
export function layoutNetwork({ people, ties }: Network, { width, height, fontSize }: LayoutOptions): Drawing {
  const cx = width / 2, cy = height / 2;
  const radius = (person: Person) => (person.self ? 17 : 4 + 2.1 * person.works.length);
  const self = people.find(person => person.self);
  const others = people.filter(person => !person.self);
  const strength = new Map(ties.map(tie => [`${tie.a} ${tie.b}`, tie.works.length]));
  const between = (a: Person, b: Person) => strength.get([a.key, b.key].sort().join(' ')) ?? 0;

  // Groups, found with union–find over the ties between co-authors.
  const parent = new Map(others.map(person => [person.key, person.key]));
  const root = (key: string): string => { let k = key; while (parent.get(k) !== k) k = parent.get(k)!; return k; };
  for (const tie of ties) if (parent.has(tie.a) && parent.has(tie.b)) parent.set(root(tie.a), root(tie.b));
  const grouped = new Map<string, Person[]>();
  for (const person of others) grouped.set(root(person.key), [...(grouped.get(root(person.key)) ?? []), person]);

  // Within a group, start with the most frequent co-author and keep the next
  // person the one most tied to the last, so strong ties stay short.
  const byWorks = (a: Person, b: Person) => b.works.length - a.works.length || a.name.localeCompare(b.name);
  const chain = (group: Person[]) => {
    const left = [...group].sort(byWorks);
    const order = [left.shift()!];
    while (left.length) {
      const last = order[order.length - 1];
      left.sort((a, b) => between(last, b) - between(last, a) || byWorks(a, b));
      order.push(left.shift()!);
    }
    return order;
  };
  const groups = [...grouped.values()]
    .map(chain)
    .sort((a, b) => b.reduce((n, p) => n + p.works.length, 0) - a.reduce((n, p) => n + p.works.length, 0) || b.length - a.length);

  // Fill the two sides in turn, each group going to the side with fewer people.
  const sides: (Person | undefined)[][] = [[], []];
  for (const group of groups) {
    const side = sides[0].length <= sides[1].length ? sides[0] : sides[1];
    if (side.length) side.push(undefined);
    side.push(...group);
  }

  // Each side is an arc: evenly spaced from top to bottom, furthest out at mid-height.
  const ry = height / 2 - fontSize;
  const rx = width / 2 - Math.max(...others.map(person => radius(person) + 4 + textWidth(person.name, fontSize, false)));
  const inner = Math.min(rx * 0.3, 40);
  const placed = new Map<string, PlacedPerson>();
  if (self) placed.set(self.key, { ...self, x: cx, y: cy, r: radius(self), label: { x: 0, y: radius(self) + 4 + fontSize * 0.72, anchor: 'middle' } });
  // A shorter side keeps the same spacing and is centred on the middle.
  const slots = Math.max(...sides.map(side => side.length));
  sides.forEach((side, s) => {
    const dir = s === 0 ? -1 : 1;
    side.forEach((person, i) => {
      if (!person) return;
      const t = slots === 1 ? 0 : (2 * i - (side.length - 1)) / (slots - 1);
      const x = cx + dir * (inner + (rx - inner) * Math.sqrt(1 - t * t));
      const r = radius(person);
      placed.set(person.key, { ...person, x, y: cy + t * ry, r, label: { x: dir * (r + 4), y: fontSize * 0.32, anchor: dir > 0 ? 'start' : 'end' } });
    });
  });

  // Fit the view box to the circles and labels, with a small margin.
  const boxes: Box[] = [...placed.values()].flatMap(person => {
    const w = textWidth(person.name, fontSize, person.self);
    const lx = person.x + person.label.x, ly = person.y + person.label.y;
    const x0 = person.label.anchor === 'start' ? lx : person.label.anchor === 'end' ? lx - w : lx - w / 2;
    return [
      { x0: person.x - person.r, y0: person.y - person.r, x1: person.x + person.r, y1: person.y + person.r },
      { x0, y0: ly - fontSize * 0.72, x1: x0 + w, y1: ly + fontSize * 0.24 },
    ];
  });
  const pad = 6;
  const x0 = Math.min(...boxes.map(box => box.x0)) - pad, y0 = Math.min(...boxes.map(box => box.y0)) - pad;
  const x1 = Math.max(...boxes.map(box => box.x1)) + pad, y1 = Math.max(...boxes.map(box => box.y1)) + pad;

  return {
    viewBox: [x0, y0, x1 - x0, y1 - y0].map(value => Math.round(value)).join(' '),
    // Fewer joint works first, so busier circles and B. M. Tran are drawn on top.
    people: [...placed.values()]
      .sort((a, b) => Number(a.self) - Number(b.self) || a.works.length - b.works.length)
      .map(person => ({ ...person, x: round(person.x), y: round(person.y), r: round(person.r), label: { ...person.label, x: round(person.label.x), y: round(person.label.y) } })),
    // Ties between co-authors first, then the lines to B. M. Tran over them.
    ties: ties
      .map(tie => ({ tie, a: placed.get(tie.a)!, b: placed.get(tie.b)! }))
      .sort((p, q) => Number(p.a.self || p.b.self) - Number(q.a.self || q.b.self))
      .map(({ tie, a, b }) => {
        const self = a.self || b.self;
        // Bow a co-author tie towards the middle, more for people further apart.
        const bow = self ? 0 : Math.min(1, Math.abs(a.y - b.y) / (2 * ry)) * 0.75;
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        const qx = mx + (cx - mx) * bow;
        return { ...tie, self, path: self ? `M${round(a.x)} ${round(a.y)}L${round(b.x)} ${round(b.y)}` : `M${round(a.x)} ${round(a.y)}Q${round(qx)} ${round(my)} ${round(b.x)} ${round(b.y)}` };
      }),
  };
}
