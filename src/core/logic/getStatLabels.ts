import type { StatName } from "../data/products";

export const getStatLabels = ({statScore,statName}:{statScore:number,statName:StatName}) => {
    if (statName === "Hydratace") {
        switch(statScore){
            case 1:
               return "Suchomilná rostlina — zalévejte jen výjimečně, jednou za několik týdnů. Ideální pro zaneprázdněné pěstitele.";
            case 2:
               return "Standardní nároky na vodu — zalévejte přibližně jednou týdně a nechte půdu mezi zálivkami lehce vyschnout.";
            case 3:
               return "Miluje vlhkost — půda by měla být vždy mírně vlhká. Zalévejte pravidelně několikrát týdně.";
        }
    }

    if (statName === "Světlo") {
        switch(statScore){
            case 1:
              return "Snáší stín a tlumené světlo — skvělá volba do tmavších koutů bytu nebo kanceláře bez přímého slunce.";
            case 2:
               return "Preferuje rozptýlené světlo — umístěte ji blízko okna, ale chraňte před přímými slunečními paprsky.";
            case 3:
                return "Slunce milovnice — potřebuje několik hodin přímého slunečního záření denně. Ideální místo je jižní nebo jihozápadní okno.";
        }
    }

    if (statName === "Toxicita") {
        switch(statScore){
            case 1:
             return "Zcela bezpečná — netoxická pro lidi, děti i domácí mazlíčky. Bez obav ji umístěte kamkoliv.";
            case 2:
               return "Mírně toxická — při požití může způsobit nevolnost. Doporučujeme opatrnost zejména u domácích zvířat.";
            case 3:
               return "Toxická rostlina — nutno umístit mimo dosah dětí a domácích zvířat. Při manipulaci doporučujeme rukavice.";
        }
    }

    return "Neznámý stav"

}
