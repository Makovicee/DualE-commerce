export interface Address {
  value: string;
  label: string;
  city: string;
  zip: string;
}

//slouží jako fake data set pro auto-complete adresy v EFF checkout

export const ADDRESSES: Address[] = [
  { value: "a1", label: "Václavské náměstí 1", city: "Praha", zip: "110 00" },
  { value: "a2", label: "Náměstí Míru 5", city: "Praha", zip: "120 00" },
  { value: "a3", label: "Masarykova 12", city: "Brno", zip: "602 00" },
  { value: "a4", label: "Náměstí Svobody 3", city: "Brno", zip: "602 00" },
  { value: "a5", label: "Horní náměstí 1", city: "Olomouc", zip: "779 00" },
  { value: "a6", label: "Náměstí Republiky 1", city: "Plzeň", zip: "301 00" },
  {
    value: "a7",
    label: "Mírové náměstí 1",
    city: "Ústí nad Labem",
    zip: "400 01",
  },
  {
    value: "a8",
    label: "Velké náměstí 1",
    city: "Hradec Králové",
    zip: "500 03",
  },
  {
    value: "a9",
    label: "Náměstí Přemysla Otakara II 1",
    city: "České Budějovice",
    zip: "370 01",
  },
  {
    value: "a10",
    label: "Palackého náměstí 1",
    city: "Pardubice",
    zip: "530 02",
  },
  { value: "a11", label: "Riegrovo náměstí 1", city: "Liberec", zip: "460 01" },
  {
    value: "a12",
    label: "Náměstí Karla IV 1",
    city: "Karlovy Vary",
    zip: "360 01",
  },
  { value: "a13", label: "Dlouhá 15", city: "Praha", zip: "110 00" },
  { value: "a14", label: "Celetná 8", city: "Praha", zip: "110 00" },
  { value: "a15", label: "Botanická 68a", city: "Brno", zip: "612 00" },
];
