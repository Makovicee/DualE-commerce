import type { CategoryId } from "./categories";



export const STAT_NAMES = ["Hydratace", "Světlo", "Toxicita"] as const;
export type StatName = typeof STAT_NAMES[number];
export type StatValue = 1 | 2 | 3;
export type VariantSize = "S" | "M" | "XL";

export interface ProductVariant {
  size: VariantSize;
  sizeLabel: string;
  price: number;
  stock: number;
}

export interface ProductComment {
  id: string;
  author: string;
  content: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  categoryId: CategoryId;
  img: string | null;
  rating: number;
  discount?: number;
  variants: Record<VariantSize, ProductVariant>;
  stats: Record<StatName, StatValue>;
  comments?: ProductComment[];
  launchDate:Date
}

export const PRODUCTS: Product[] = [
{
    id: "TP01",
   name: "Flora Grasa",
    description: "Sukulentní rostlina s masitými listy ukládajícími vodu. Pochází z jihoafrických savan a snáší i delší období bez zálivky. Perfektní do světlých interiérů.",
    categoryId: "tropicke",
    img: "/tropical/Tropical1.png",
    rating: 4.6,
    variants: {
      S: { size: "S", sizeLabel: "15cm", price: 75, stock: 96 },
      M: { size: "M", sizeLabel: "18cm", price: 85, stock: 50 },
      XL: { size: "XL", sizeLabel: "22cm", price: 109, stock: 10 },
    },
    stats: { Hydratace: 3, Světlo: 2, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Jan Novák", content: "Skvělá rostlina, velmi odolná. Doporučil bych každému milovníkovi zeleně." },
      { id: "c2", author: "Marie Svobodová", content: "Krásná, doporučuji každému začátečníkovi." },
    ],
    launchDate: new Date("2024-05-15")
  },
    {
    id: "CX01",
    name: "Cactus Verde",
    description: "Cactus Verde je nenáročný kaktus vhodný do interiérů i na terasu. Má kompaktní, ale výraznou strukturu s hustými zelenými trny, které dodávají prostoru zajímavý vizuální prvek. Snáší dlouhé období bez zálivky a vyžaduje minimální péči – stačí mu jasné světlo a občasná zálivka. Ideální pro začátečníky i pro ty, kteří chtějí dekorativní rostlinu s nízkou údržbou. Může být umístěn na poličce, okenním parapetu nebo jako součást větší kompozice s jinými sukulenty.",
    categoryId: "kaktusy",
    img: "/cactus/Cactus1.png",
    rating: 4.2,
    variants: {
      S: { size: "S", sizeLabel: "12cm", price: 60, stock: 45 },
      M: { size: "M", sizeLabel: "16cm", price: 75, stock: 30 },
      XL: { size: "XL", sizeLabel: "20cm", price: 95, stock: 12 },
    },
    stats: { Hydratace: 1, Světlo: 3, Toxicita: 2 },
    comments: [
      { id: "c1", author: "Jan Novák", content: "Skvělý kaktus, velmi nenáročný." },
      { id: "c2", author: "Eva Malá", content: "Vypadal skvěle na mé poličce." },
      { id: "c3", author: "Petr Král", content: "Doporučuji pro začátečníky." },
    ],
    launchDate: new Date("2024-06-10")
  },
  {
    id: "CX02",
    name: "Cactus Alba",
    description: "Cactus Alba je elegantní kaktus s jemně zbarvenými trny a kompaktním tvarem, který se hodí do moderních i minimalistických interiérů. Je velmi odolný vůči suchu, takže nepotřebuje častou zálivku. Vytváří dekorativní efekt, ať už je umístěn samostatně na stolku, nebo jako součást skupiny dalších sukulentů a kaktusů. Díky své nenáročnosti je vhodný i pro začínající pěstitele, kteří chtějí mít doma zelený prvek bez složité péče.",
    categoryId: "kaktusy",
    img: "/cactus/Cactus2.png",
    rating: 4.5,
    variants: {
      S: { size: "S", sizeLabel: "10cm", price: 55, stock: 1 },
      M: { size: "M", sizeLabel: "14cm", price: 70, stock: 5 },
      XL: { size: "XL", sizeLabel: "18cm", price: 90, stock: 15 },
    },
    stats: { Hydratace: 1, Světlo: 2, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Karel Dvořák", content: "Odolný kaktus, hodně vydrží." },
      { id: "c2", author: "Anna Křížová", content: "Skvělý doplněk na terasu." },
      { id: "c3", author: "Tomáš Blažek", content: "Snese i sluneční místo." },
    ],
    launchDate: new Date("2024-07-01")
  },
  {
    id: "CX03",
    name: "Cactus Spina",
    description: "Cactus Spina je robustní a výrazný kaktus, který přitahuje pozornost svými dlouhými a pevnými trny. Tato rostlina snáší suché období, vysoké teploty i přímé sluneční světlo, takže je ideální pro světlé místnosti i na slunnou terasu. Jeho výrazný tvar dodá interiéru zajímavý kontrast, ať už je umístěn jako solitér, nebo v kombinaci s jinými sukulenty. Péče je jednoduchá – občasná zálivka a jasné světlo postačí k jeho zdravému růstu a dlouhé životnosti.",
    categoryId: "kaktusy",
    img: "/cactus/Cactus3.png",
    rating: 4.0,
    variants: {
      S: { size: "S", sizeLabel: "11cm", price: 65, stock: 0 },
      M: { size: "M", sizeLabel: "15cm", price: 80, stock: 0 },
      XL: { size: "XL", sizeLabel: "19cm", price: 100, stock: 0 },
    },
    stats: { Hydratace: 1, Světlo: 3, Toxicita: 2 },
     comments: [
      { id: "c1", author: "Marie Svobodová", content: "Perfektní kaktus do mého bytu." },
      { id: "c2", author: "Lukáš Novotný", content: "Nenáročný a krásný." },
    ],
    launchDate: new Date("2024-05-20")
  },
  {
    id: "CX04",
    name: "Cactus Aurea",
    description: "Cactus Aurea je dekorativní kaktus se zlatavými trny, který dodává prostoru elegantní a sofistikovaný vzhled. Snese dlouhé období bez zálivky a preferuje jasné světlo, díky čemuž je nenáročný na péči. Hodí se do světlých interiérů, kanceláří nebo jako doplněk ke stolnímu uspořádání dalších sukulentů. Jeho unikátní vzhled zaujme každého návštěvníka a poskytuje estetický prvek i při minimální údržbě.",
    categoryId: "kaktusy",
    img: "/cactus/Cactus4.png",
    rating: 4.3,
    variants: {
      S: { size: "S", sizeLabel: "13cm", price: 70, stock: 60 },
      M: { size: "M", sizeLabel: "17cm", price: 85, stock: 0 },
      XL: { size: "XL", sizeLabel: "21cm", price: 110, stock: 8 },
    },
    stats: { Hydratace: 1, Světlo: 3, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Petra Horáková", content: "Vypadá skvěle a je nenáročný." },
      { id: "c2", author: "David Svoboda", content: "Snadno se pěstuje i při menší péči." },
    ],
    launchDate: new Date("2024-06-25")
  },
  {
    id: "CX05",
    name: "Cactus Silvestris",
    description: "Cactus Silvestris je odolný a robustní kaktus vhodný do různých interiérů i na terasu. Snese delší období bez vody a prospívá na jasném světle. Má výraznou strukturu s hustými trny, které dodávají dekorativní prvek každému prostoru. Jeho nenáročnost z něj činí ideální rostlinu pro začínající i zkušené pěstitele. Lze jej kombinovat s jinými sukulenty a kaktusy, čímž vytvoříte zajímavé aranžmá pro váš domov nebo kancelář.",
    categoryId: "kaktusy",
    img: "/cactus/Cactus5.png",
    rating: 4.1,
    variants: {
      S: { size: "S", sizeLabel: "12cm", price: 62, stock: 1 },
      M: { size: "M", sizeLabel: "16cm", price: 78, stock: 12 },
      XL: { size: "XL", sizeLabel: "20cm", price: 102, stock: 9 },
    },
    stats: { Hydratace: 1, Světlo: 3, Toxicita: 2 },
    comments: [
      { id: "c1", author: "Jiří Novák", content: "Skvělý kaktus na světlo i sucho." },
      { id: "c2", author: "Lucie Malá", content: "Moc hezký, doporučuji." },
      { id: "c3", author: "Tomáš Král", content: "Nenáročný a odolný." },
    ],
    launchDate: new Date("2024-07-05")
  },


  {
    id: "RZ01",
    name: "Rosa Alba",
    description: "Rosa Alba je elegantní růže s plnými okvětními lístky a kompaktním tvarem, vhodná pro interiérové dekorace i stolní aranžmá. Vyžaduje pravidelnou zálivku a světlé místo. Snadno se pěstuje, ideální pro začátečníky i zkušené pěstitele, kteří chtějí mít doma dekorativní rostlinu s dlouhou životností.",
    categoryId: "ruze",
    img: "/rose/Rose1.png",
    rating: 4.7,
    variants: {
      S: { size: "S", sizeLabel: "15cm", price: 80, stock: 40 },
      M: { size: "M", sizeLabel: "20cm", price: 100, stock: 25 },
      XL: { size: "XL", sizeLabel: "25cm", price: 130, stock: 10 },
    },
    stats: { Hydratace: 3, Světlo: 3, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Anna Malá", content: "Krásná růže, velmi kvalitní a nenáročná." },
      { id: "c2", author: "Jan Svoboda", content: "Vypadá skvěle v aranžmá." },
      { id: "c3", author: "Eva Králová", content: "Doporučuji jako dekoraci i dárek." },
    ],
    launchDate: new Date("2024-06-12")
  },
  {
    id: "RZ02",
    name: "Rosa Purpurea",
    description: "Rosa Purpurea je kompaktní růže s plnými okvětními lístky, vhodná pro dekorace stolů, poliček nebo oken. Snadno se udržuje a prospívá na světlém místě. Perfektní pro začátečníky i zkušené pěstitele, dodává prostoru elegantní a dekorativní prvek.",
    categoryId: "ruze",
    img: "/rose/Rose2.png",
    rating: 4.8,
    variants: {
      S: { size: "S", sizeLabel: "15cm", price: 85, stock: 35 },
      M: { size: "M", sizeLabel: "20cm", price: 105, stock: 20 },
      XL: { size: "XL", sizeLabel: "25cm", price: 140, stock: 8 },
    },
    stats: { Hydratace: 3, Světlo: 1, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Lukáš Novotný", content: "Skvělá kvalita a elegantní vzhled." },
      { id: "c2", author: "Marie Králová", content: "Vypadá skvěle a vydrží dlouho." },
    ],
    launchDate: new Date("2024-06-20")
  },
  {
    id: "RZ03",
    name: "Rosa Grandis",
    description: "Rosa Grandis je robustní růže s hustými okvětními lístky, ideální pro aranžmá a dekorace. Potřebuje pravidelnou zálivku a světlé místo. Její tvar a struktura přidávají prostoru vizuálně atraktivní prvek. Snadná péče z ní činí vhodnou rostlinu i pro začátečníky.",
    categoryId: "ruze",
    img: "/rose/Rose3.png",
    rating: 3.6,
    variants: {
      S: { size: "S", sizeLabel: "15cm", price: 78, stock: 50 },
      M: { size: "M", sizeLabel: "20cm", price: 98, stock: 30 },
      XL: { size: "XL", sizeLabel: "25cm", price: 125, stock: 12 },
    },
    stats: { Hydratace: 3, Světlo: 3, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Tomáš Blažek", content: "Krásná a kvalitní růže, dlouho vydrží." },
      { id: "c2", author: "Petra Horáková", content: "Perfektní pro stolní aranžmá." },
      { id: "c3", author: "David Svoboda", content: "Vypadá hezky a snadno se udržuje." },
    ],
    launchDate: new Date("2024-07-01")
  },
  {
    id: "RZ04",
    name: "Rosa Elegans",
    description: "Rosa Elegans je dekorativní růže s plnými okvětními lístky, vhodná pro interiérové aranžmá. Snese pravidelnou zálivku a světlé místo. Její elegantní tvar a hustota lístků poskytují vizuálně atraktivní prvek do každého prostoru, ať už samostatně nebo v kombinaci s dalšími rostlinami.",
    categoryId: "ruze",
    img: "/rose/Rose4.png",
    rating: 4.7,
    variants: {
      S: { size: "S", sizeLabel: "15cm", price: 82, stock: 0 },
      M: { size: "M", sizeLabel: "20cm", price: 102, stock: 0 },
      XL: { size: "XL", sizeLabel: "25cm", price: 135, stock: 0 },
    },
    stats: { Hydratace: 3, Světlo: 3, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Lucie Malá", content: "Skvělá rostlina, elegantní a kvalitní." },
      { id: "c2", author: "Jiří Novák", content: "Perfektní do dekorací i aranžmá." },
    ],
    launchDate: new Date("2024-06-15")
  },
  {
    id: "RZ05",
    name: "Rosa Compacta",
    description: "Rosa Compacta je kompaktní a dekorativní růže s plnými okvětními lístky. Vhodná pro interiérové dekorace, stolní aranžmá a snadnou péči. Potřebuje pravidelnou zálivku a světlé místo. Ideální rostlina pro začátečníky i zkušené pěstitele, dodává prostoru elegantní a vizuálně atraktivní prvek.",
    categoryId: "ruze",
    img: "/rose/Rose5.png",
    rating: 2.5,
    variants: {
      S: { size: "S", sizeLabel: "15cm", price: 79, stock: 5 },
      M: { size: "M", sizeLabel: "20cm", price: 99, stock: 1 },
      XL: { size: "XL", sizeLabel: "25cm", price: 128, stock: 11 },
    },
    stats: { Hydratace: 3, Světlo: 3, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Anna Malá", content: "Krásná a kvalitní růže, dlouho vydrží." },
      { id: "c2", author: "Petr Král", content: "Skvělá do aranžmá i jako dekorace." },
      { id: "c3", author: "Marie Svobodová", content: "Elegantní tvar a snadná péče." },
    ],
    launchDate: new Date("2024-07-05")
  },

  {
    id: "TP02",
    name: "Folia Tropica",
    description: "Folia Tropica je nenáročná tropická rostlina s dekorativními listy, která se hodí do světlých interiérů i kancelářských prostor. Snáší pravidelnou zálivku a vlhké prostředí, ale přizpůsobí se i běžným domácím podmínkám. Je ideální pro ty, kteří chtějí do prostoru přidat zelený akcent s výraznou strukturou listů.",
    categoryId: "tropicke",
    img: "/tropical/Tropical2.png",
    rating: 4.6,
    variants: {
      S: { size: "S", sizeLabel: "15cm", price: 75, stock: 40 },
      M: { size: "M", sizeLabel: "20cm", price: 95, stock: 25 },
      XL: { size: "XL", sizeLabel: "25cm", price: 120, stock: 12 },
    },
    stats: { Hydratace: 3, Světlo: 3, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Jan Novák", content: "Skvělá rostlina, velmi dekorativní." },
      { id: "c2", author: "Eva Malá", content: "Vypadá skvěle a snadno se udržuje." },
    ],
    launchDate: new Date("2024-05-10")
  },
  {
    id: "TP03",
    name: "Arboris Tropica",
    description: "Arboris Tropica je tropická rostlina s výraznými listy, která dodává prostoru exotický nádech. Potřebuje světlé místo a pravidelnou zálivku. Je vhodná jak pro interiérové aranžmá, tak pro kancelářské prostory, kde působí dekorativně a přirozeně oživuje prostředí.",
    categoryId: "tropicke",
    img: "/tropical/Tropical3.png",
    rating: 4.5,
    variants: {
      S: { size: "S", sizeLabel: "14cm", price: 70, stock: 0 },
      M: { size: "M", sizeLabel: "19cm", price: 90, stock: 0 },
      XL: { size: "XL", sizeLabel: "24cm", price: 115, stock: 0 },
    },
    stats: { Hydratace: 3, Světlo: 3, Toxicita: 2 },
    comments: [
      { id: "c1", author: "Lukáš Novotný", content: "Výrazný dekorativní prvek, moc se mi líbí." },
      { id: "c2", author: "Marie Králová", content: "Nenáročná a krásná tropická rostlina." },
      { id: "c3", author: "Petr Blažek", content: "Perfektní do světlého pokoje." },
    ],
    launchDate: new Date("2024-06-05")
  },
  {
    id: "TP04",
    name: "Verdantia",
    description: "Verdantia je tropická rostlina s hustými listy, která poskytuje zajímavý vizuální prvek do interiéru. Snese střední až vyšší vlhkost, ale přizpůsobí se i běžným domácím podmínkám. Ideální do obývacích pokojů, kanceláří nebo jako součást kompozice s dalšími tropickými rostlinami.",
    categoryId: "tropicke",
    img: "/tropical/Tropical4.png",
    rating: 4.4,
    variants: {
      S: { size: "S", sizeLabel: "15cm", price: 78, stock: 45 },
      M: { size: "M", sizeLabel: "20cm", price: 98, stock: 28 },
      XL: { size: "XL", sizeLabel: "25cm", price: 125, stock: 14 },
    },
    stats: { Hydratace: 1, Světlo: 3, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Anna Malá", content: "Krásná a odolná rostlina." },
      { id: "c2", author: "Tomáš Král", content: "Dodává prostoru svěží vzhled." },
    ],
    launchDate: new Date("2024-07-01")
  },
  {
    id: "TP05",
    name: "Exotica Planta",
    description: "Exotica Planta je dekorativní tropická rostlina s hustými listy a výraznou strukturou, která přináší do interiéru tropický nádech. Potřebuje světlé místo a pravidelnou zálivku. Hodí se pro aranžmá interiérů, kanceláří i společenských prostor, kde zaujme svou dekorativní hodnotou.",
    categoryId: "tropicke",
    img: "/tropical/Tropical5.png",
    rating: 1.6,
    variants: {
      S: { size: "S", sizeLabel: "15cm", price: 80, stock: 15 },
      M: { size: "M", sizeLabel: "20cm", price: 100, stock: 2 },
      XL: { size: "XL", sizeLabel: "25cm", price: 130, stock: 5 },
    },
    stats: { Hydratace: 2, Světlo: 1, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Petra Horáková", content: "Skvělý dekorativní prvek, doporučuji." },
      { id: "c2", author: "David Svoboda", content: "Snadno se udržuje a krásně vypadá." },
      { id: "c3", author: "Lucie Malá", content: "Dodává místnosti exotický nádech." },
    ],
    launchDate: new Date("2024-06-25")
  },


  {
    id: "WN01",
    name: "Flora Hibernia",
    description: "Flora Hibernia je odolná zimní květina vhodná do chladnějších interiérů. Má husté listy a kompaktní růst, díky čemuž působí dekorativně i v menších prostorách. Snáší mírné teplotní výkyvy a vyžaduje pravidelnou zálivku. Ideální pro ty, kteří chtějí oživit interiér i během zimních měsíců.",
    categoryId: "zimni",
    img: "/winter/Winter1.png",
    rating: 4.5,
    variants: {
      S: { size: "S", sizeLabel: "14cm", price: 65, stock: 30 },
      M: { size: "M", sizeLabel: "19cm", price: 85, stock: 20 },
      XL: { size: "XL", sizeLabel: "24cm", price: 110, stock: 12 },
    },
    stats: { Hydratace: 3, Světlo: 2, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Anna Malá", content: "Krásná rostlina, dobře snáší chladnější místnosti." },
      { id: "c2", author: "Jan Svoboda", content: "Snadná péče a elegantní vzhled." },
    ],
    launchDate: new Date("2024-11-10")
  },
  {
    id: "WN02",
    name: "Glacies Bloom",
    description: "Glacies Bloom je dekorativní zimní květina, která přidává interiéru svěží a elegantní vzhled i během chladných měsíců. Potřebuje světlé místo a pravidelnou zálivku. Je vhodná pro interiérové aranžmá, kanceláře i domácí dekorace, kde působí výrazně a přirozeně.",
    categoryId: "zimni",
    img: "/winter/Winter2.png",
    rating: 3.6,
    variants: {
      S: { size: "S", sizeLabel: "15cm", price: 70, stock: 1 },
      M: { size: "M", sizeLabel: "20cm", price: 90, stock: 18 },
      XL: { size: "XL", sizeLabel: "25cm", price: 115, stock: 10 },
    },
    stats: { Hydratace: 3, Světlo: 3, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Lukáš Novotný", content: "Dekorativní a nenáročná rostlina, doporučuji." },
      { id: "c2", author: "Marie Králová", content: "Skvěle oživuje interiér během zimy." },
      { id: "c3", author: "Petr Blažek", content: "Snadná péče a dlouhá životnost." },
    ],
    launchDate: new Date("2024-11-15")
  },
  {
    id: "WN03",
    name: "Nivea Planta",
    description: "Nivea Planta je odolná rostlina s hustými listy a kompaktním tvarem, vhodná pro zimní dekorace. Snáší nižší teploty a světlé stanoviště. Perfektní do obývacích pokojů, kanceláří nebo jako součást zimního aranžmá s dalšími rostlinami.",
    categoryId: "zimni",
    img: "/winter/Winter3.png",
    rating: 4.9,
    variants: {
      S: { size: "S", sizeLabel: "14cm", price: 68, stock: 35 },
      M: { size: "M", sizeLabel: "19cm", price: 88, stock: 22 },
      XL: { size: "XL", sizeLabel: "24cm", price: 112, stock: 9 },
    },
    stats: { Hydratace: 3, Světlo: 2, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Tomáš Blažek", content: "Vypadá krásně a snadno se udržuje." },
      { id: "c2", author: "Petra Horáková", content: "Perfektní zimní rostlina do interiéru." },
    ],
    launchDate: new Date("2024-11-20")
  },
  {
    id: "WN04",
    name: "Frostia Verde",
    description: "Frostia Verde je dekorativní zimní květina s hustými listy, vhodná pro aranžmá interiérů během zimních měsíců. Vyžaduje světlé místo a pravidelnou zálivku, ale je nenáročná na péči. Dodává prostoru svěží a elegantní vzhled, ideální pro domácnosti i kanceláře.",
    categoryId: "zimni",
    img: "/winter/Winter4.png",
    rating: 4.5,
    variants: {
      S: { size: "S", sizeLabel: "15cm", price: 72, stock: 0 },
      M: { size: "M", sizeLabel: "20cm", price: 92, stock: 0 },
      XL: { size: "XL", sizeLabel: "25cm", price: 118, stock: 0 },
    },
    stats: { Hydratace: 3, Světlo: 3, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Anna Malá", content: "Krásná zimní rostlina, doporučuji." },
      { id: "c2", author: "David Svoboda", content: "Snadná péče a elegantní vzhled." },
      { id: "c3", author: "Lucie Malá", content: "Vypadá skvěle a přináší do prostoru život." },
    ],
    launchDate: new Date("2024-12-01")
  },
  {
    id: "WN05",
    name: "Glacialis Flora",
    description: "Glacialis Flora je odolná a dekorativní zimní rostlina s plnými listy, vhodná pro aranžmá interiérů a stolní dekorace. Snáší nižší teploty a potřebuje světlé místo. Je nenáročná na péči, ideální pro začínající i zkušené pěstitele, kteří chtějí oživit prostor i během zimy.",
    categoryId: "zimni",
    img: "/winter/Winter5.png",
    rating: 4.6,
    variants: {
      S: { size: "S", sizeLabel: "14cm", price: 70, stock: 30 },
      M: { size: "M", sizeLabel: "19cm", price: 90, stock: 18 },
      XL: { size: "XL", sizeLabel: "24cm", price: 115, stock: 10 },
    },
    stats: { Hydratace: 3, Světlo: 3, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Petra Horáková", content: "Elegantní a nenáročná rostlina." },
      { id: "c2", author: "Tomáš Král", content: "Skvělá do zimních aranžmá." },
    ],
    launchDate: new Date("2024-12-05")
  },
]
