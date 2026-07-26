// Globaalsed saidi konstandid
// Kui sinu praeguses consts.ts on juba SITE_TITLE / SITE_DESCRIPTION,
// asenda need lihtsalt nende väärtustega ja lisa CATEGORIES massiiv juurde.

export const SITE_TITLE = "Rahafookus";
export const SITE_DESCRIPTION =
  "Rahafookus on rahale ja finantsidele keskendunud informatiivne ja hariduslik veebileht. Meie eesmärk on anda kõigile lugejatele kasulikku ja arusaadavat infot rahaasjade kohta.";

export interface Category {
  name: string;
  slug: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    name: "Investeerimine",
    slug: "investeerimine",
    description: "Investeerimise põhitõed, strateegiad ja mõtted algajale ning edasijõudnule.",
  },
  {
    name: "Laenud ja krediit",
    slug: "laenud-ja-krediit",
    description: "Laenud, krediitkaardid ja kõik, mida peaks laenamise kohta teadma.",
  },
  {
    name: "Nutikas pangandus",
    slug: "nutikas-pangandus",
    description: "Pangateenused, digipangandus ja nutikad viisid oma rahaasjade haldamiseks.",
  },
  {
    name: "Rahatarkus",
    slug: "rahatarkus",
    description: "Rahaga seotud üldised teadmised ja oskused igapäevaeluks.",
  },
  {
    name: "Säästmine ja eelarve",
    slug: "saastmine-ja-eelarve",
    description: "Eelarve koostamine, säästmisviisid ja kulude planeerimine.",
  },
  {
    name: "Krüpto",
    slug: "krypto",
    description: "Krüptovaluutad, blockchain ja digivarad lihtsas keeles.",
  },
];
