// Globaalsed saidi konstandid

export const SITE_TITLE = "Rahafookus";
export const SITE_DESCRIPTION =
  "Rahafookus on rahale ja finantsidele keskendunud informatiivne ja hariduslik veebileht. Meie eesmärk on anda kõigile lugejatele kasulikku ja arusaadavat infot rahaasjade kohta.";

export interface Category {
  name: string;
  slug: string;
  description: string;
  seoTitle?: string;
  metaDescription?: string;
  intro?: string;
}

export const CATEGORIES: Category[] = [
  {
    name: "Investeerimine",
    slug: "investeerimine",
    description: "Investeerimise põhitõed, strateegiad ja mõtted algajale ning edasijõudnule.",
    seoTitle: "Investeerimine – kuidas alustada ja kuhu investeerida | Rahafookus",
    metaDescription:
      "Investeerimise põhitõed lihtsas keeles: aktsiad, võlakirjad, indeksfondid, kinnisvara ja tähtajalised hoiused. Alusta investeerimist targalt ja enesekindlalt.",
    intro:
      "Investeerimine võib alguses tunduda keeruline ja hirmutav, aga õigete teadmistega on see kättesaadav igaühele. Sellest kategooriast leiad selged ja praktilised juhendid, mis aitavad sul aru saada, kuidas erinevad investeerimisvõimalused — aktsiad, võlakirjad, indeksfondid, kinnisvara ja tähtajalised hoiused — töötavad, milliste riskide ja tootlusega need kaasnevad ning kuidas koostada endale sobiv investeerimisstrateegia. Olenemata sellest, kas alustad esimese sajaga või mõtled juba suuremale portfellile, leiad siit infot, mis aitab sul teha teadlikke rahalisi otsuseid.",
  },
  {
    name: "Laenud ja krediit",
    slug: "laenud-ja-krediit",
    description: "Laenud, krediitkaardid ja kõik, mida peaks laenamise kohta teadma.",
    seoTitle: "Laenud ja krediit – laenamise ABC | Rahafookus",
    metaDescription:
      "Kõik olulisim laenude ja krediidi kohta: kodulaenud, tarbimislaenud, krediitkaardid, intressid ja krediidivõimekus. Tee laenuotsuseid targalt.",
    intro:
      "Laen võib olla kasulik tööriist unistuste elluviimiseks, aga läbimõtlemata laenuotsused võivad rahaasjad korralikult sassi ajada. Selles kategoorias selgitame lihtsas keeles, kuidas erinevad laenutooted — kodulaen, tarbimislaen, krediitkaart, järelmaks — töötavad, millele intressimäära ja lepingutingimuste juures tähelepanu pöörata ning kuidas hinnata, kas ja kui palju laenu sulle üldse mõistlik on võtta. Eesmärk on aidata sul teha teadlikke otsuseid, mitte langeda kiirete ja kallite lahenduste lõksu.",
  },
  {
    name: "Nutikas pangandus",
    slug: "nutikas-pangandus",
    description: "Pangateenused, digipangandus ja nutikad viisid oma rahaasjade haldamiseks.",
    seoTitle: "Nutikas pangandus – pangateenused ja digipangandus | Rahafookus",
    metaDescription:
      "Ülevaade pangateenustest ja digipangandusest Eestis: pangakontod, mobiilipangad, tasuta ülekanded ja nutikad lahendused igapäevase rahaasjade haldamiseks.",
    intro:
      "Pangandusmaastik on viimastel aastatel kiiresti muutunud — kõrvuti traditsiooniliste pankadega on tekkinud hulk digitaalseid alternatiive, mis pakuvad mugavamaid ja sageli soodsamaid teenuseid. Selles kategoorias vaatleme, milliseid pangateenuseid Eestis pakutakse, kuidas valida enda vajadustele sobiv pank või rahakonto, ning kuidas kasutada nutikaid tööriistu ja äppe, et oma igapäevast rahaasjade haldamist lihtsamaks ja läbipaistvamaks muuta.",
  },
  {
    name: "Rahatarkus",
    slug: "rahatarkus",
    description: "Rahaga seotud üldised teadmised ja oskused igapäevaeluks.",
    seoTitle: "Rahatarkus – finantsteadmised igapäevaeluks | Rahafookus",
    metaDescription:
      "Praktilised rahatarkuse teadmised: finantsplaneerimine, rahaga seotud harjumused, rahatarkus lastele ja täiskasvanutele ning igapäevased rahaasjade oskused.",
    intro:
      "Rahatarkus ei tähenda ainult numbritega žongleerimist — see on oskus mõista, kuidas raha sinu elus liigub, ja teha selle põhjal teadlikke valikuid. Selles kategoorias käsitleme rahaga seotud üldiseid teadmisi ja harjumusi, mis aitavad nii lastel kui täiskasvanutel paremini rahaasju mõista: kuidas kujuneb finantsiline mõtteviis, milliseid oskusi tasub juba noorelt õppida, ja kuidas need teadmised igapäevaelus praktikas rakenduvad.",
  },
  {
    name: "Säästmine ja eelarve",
    slug: "saastmine-ja-eelarve",
    description: "Eelarve koostamine, säästmisviisid ja kulude planeerimine.",
    seoTitle: "Säästmine ja eelarve – kuidas koostada toimivat eelarvet | Rahafookus",
    metaDescription:
      "Praktilised nõuanded säästmiseks ja eelarve koostamiseks: kulude planeerimine, säästuharjumused ja tööriistad, mis aitavad rahaasjadel kontrolli all püsida.",
    intro:
      "Toimiv eelarve ja järjekindel säästmisharjumus on aluseks kõigile teistele finantseesmärkidele — olgu selleks turvapadi, unistuste reis või tulevane investeering. Selles kategoorias jagame praktilisi meetodeid ja tööriistu, kuidas koostada endale sobiv eelarve, leida võimalusi kulude vähendamiseks ning kujundada säästmisharjumusi, mis püsivad ka siis, kui elu läheb kiireks.",
  },
  {
    name: "Krüpto",
    slug: "krypto",
    description: "Krüptovaluutad, blockchain ja digivarad lihtsas keeles.",
    seoTitle: "Krüpto – krüptovaluutad ja digivarad lihtsas keeles | Rahafookus",
    metaDescription:
      "Krüptovaluutade ja blockchaini põhitõed selges eesti keeles: mis on krüptoraha, kuidas seda osta ja hoida ning millised riskid sellega kaasnevad.",
    intro:
      "Krüptovaluutad ja blockchain-tehnoloogia on toonud finantsmaailma uue, sageli segadust tekitava kihi. Selles kategoorias selgitame krüpto põhitõdesid arusaadavas keeles: mis on krüptovaluuta ja blockchain, kuidas neid osta ja turvaliselt hoida, millised on levinumad krüptovarad ning millised riskid ja võimalused nendega kaasnevad — nii, et saaksid teha teadlikke otsuseid ka selles kiiresti muutuvas valdkonnas.",
  },
];
