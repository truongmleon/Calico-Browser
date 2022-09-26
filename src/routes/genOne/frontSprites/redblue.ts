import express from 'express';

export const redblue = express.Router();

redblue.get('/', (req, res) => {
    res.send({
        "Blubasaur": {
            "eng": "Blubasaur",
            "jp": "フシギダネ - Fushigidane",
            "id": "#001",
            "image": "data/images/Generation One/Red:blue/1.png"
          },
          "Ivysaur": {
            "eng": "Ivysaur",
            "jp": "フシギソウ - Fushigisou",
            "id": "#002",
            "image": "data/images/Generation One/Red:blue/2.png"
          },
          "Venusaur": {
            "eng": "Venusaur",
            "jp": "フシギバナ - Fushigibana",
            "id": "#003",
            "image": "data/images/Generation One/Red:blue/3.png"
          },
          "Charmander": {
            "eng": "Charmander",
            "jp": "ヒトカゲ - Hitokage",
            "id": "#004",
            "image": "data/images/Generation One/Red:blue/4.png"
          },
          "Charmeleon": {
            "eng": "Charmander",
            "jp": "リザード - Lizardo",
            "id": "#005",
            "image": "data/images/Generation One/Red:blue/5.png"
          },
          "Charizard": {
            "eng": "Charizard",
            "jp": "リザードン - Lizardon",
            "id": "#006",
            "image": "data/images/Generation One/Red:blue/6.png"
          },
          "Squirtle": {
            "eng": "Squirtle",
            "jp": "ゼニガメ - Zenigame",
            "id": "#007",
            "image": "data/images/Generation One/Red:blue/7.png"
          },
          "Wartortle": {
            "eng": "Wartortle",
            "jp": "カメール - Kameil",
            "id": "#008",
            "image": "data/images/Generation One/Red:blue/8.png"
          },
          "Blastoise": {
            "eng": "Blastoise",
            "jp": "カメックス - Kamex",
            "id": "#009",
            "image": "data/images/Generation One/Red:blue/9.png"
          },
          "Caterpie": {
            "eng": "Caterpie",
            "jp": "キャタピー - Caterpie",
            "id": "#010",
            "image": "data/images/Generation One/Red:blue/10.png"
          },
          "Metapod": {
            "eng": "Metapod",
            "jp": "トランセル - Transel",
            "id": "#011",
            "image": "data/images/Generation One/Red:blue/11.png"
          },
          "Butterfree": {
            "eng": "Butterfree",
            "jp": "バタフリー - Butterfree",
            "id": "#012",
            "image": "data/images/Generation One/Red:blue/12.png"
          },
          "Weedle": {
            "eng": "Weedle",
            "jp": "ビードル - Beedle",
            "id": "#013",
            "image": "data/images/Generation One/Red:blue/13.png"
          },
          "Kakuna": {
            "eng": "Kakuna",
            "jp": "コクーン - Cocoon",
            "id": "#014",
            "image": "data/images/Generation One/Red:blue/14.png"
          },
          "Beedrill": {
            "eng": "Beedrill",
            "jp": "スピアー - Spear",
            "id": "#015",
            "image": "data/images/Generation One/Red:blue/15.png"
          },
          "Pidgey": {
            "eng": "Pidgey",
            "jp": "ポッポ - Poppo",
            "id": "#016",
            "image": "data/images/Generation One/Red:blue/16.png"
          },
          "Pidgeotto": {
            "eng": "Pidgeotto",
            "jp": "ピジョン - Pigeon",
            "id": "#017",
            "image": "data/images/Generation One/Red:blue/17.png"
          },
          "Pidgeot": {
            "eng": "Pidgeot",
            "jp": "ピジョット - Pigeot",
            "id": "#018",
            "image": "data/images/Generation One/Red:blue/18.png"
          },
          "Rattata": {
            "eng": "Rattata",
            "jp": "コラッタ - Koratta",
            "id": "#019",
            "image": "data/images/Generation One/Red:blue/19.png"
          },
          "Raticate": {
            "eng": "Raticate",
            "jp": "ラッタ - Ratta",
            "id": "#020",
            "image": "data/images/Generation One/Red:blue/20.png"
          },
          "Spearow": {
            "eng": "Spearow",
            "jp": "オニスズメ - Onisuzume",
            "id": "#021",
            "image": "data/images/Generation One/Red:blue/21.png"
          },
          "Fearow": {
            "eng": "Fearow",
            "jp": "オニスズメ - Onidrill",
            "id": "#022",
            "image": "data/images/Generation One/Red:blue/22.png"
          },
          "Ekans": {
            "eng": "Ekans",
            "jp": "アーボ - Arbo",
            "id": "#023",
            "image": "data/images/Generation One/Red:blue/23.png"
          },
          "Arbok": {
            "eng": "Arbok",
            "jp": "アーボック - Arbok",
            "id": "#024",
            "image": "data/images/Generation One/Red:blue/24.png"
          },
          "Pikachu": {
            "eng": "Pikachu",
            "jp": "ピカチュウ - Pikachu",
            "id": "#025",
            "image": "data/images/Generation One/Red:blue/25.png"
          },
          "Raichu": {
            "eng": "Raichu",
            "jp": "ライチュウ - Raichu",
            "id": "#026",
            "image": "data/images/Generation One/Red:blue/26.png"
          },
          "Sandshrew": {
            "eng": "Sandshrew",
            "jp": "サンド - Sand",
            "id": "#027",
            "image": "data/images/Generation One/Red:blue/27.png"
          },
          "Sandslash": {
            "eng": "Sandslash",
            "jp": "サンドパン - Sandpan",
            "id": "#028",
            "image": "data/images/Generation One/Red:blue/28.png"
          },
          "Nidoran♀": {
            "eng": "Nidoran♀",
            "jp": "ニドラン♀ - Nidoran♀",
            "id": "#029",
            "image": "data/images/Generation One/Red:blue/29.png"
          },
          "Nidorina": {
            "eng": "Nidorina",
            "jp": "ニドリーナ - Nidorina",
            "id": "#030",
            "image": "data/images/Generation One/Red:blue/30.png"
          },
          "Nidoqueen": {
            "eng": "Nidoqueen",
            "jp": "ニドクイン - Nidoqueen",
            "id": "#031",
            "image": "data/images/Generation One/Red:blue/31.png"
          },
          "Nidoran♂": {
            "eng": "Nidoran♂",
            "jp": "ニドラン♂ - Nidoran♂",
            "id": "#032",
            "image": "data/images/Generation One/Red:blue/32.png"
          },
          "Nidorino": {
            "eng": "Nidorino",
            "jp": "ニドリーノ - Nidorino",
            "id": "#033",
            "image": "data/images/Generation One/Red:blue/33.png"
          },
          "Nidoking": {
            "eng": "Nidoking",
            "jp": "ニドキング - Nidoking",
            "id": "#034",
            "image": "data/images/Generation One/Red:blue/34.png"
          },
          "Clefairy": {
            "eng": "Clefairy",
            "jp": "ピッピ - Pippi",
            "id": "#035",
            "image": "data/images/Generation One/Red:blue/35.png"
          },
          "Clefable": {
            "eng": "Clefable",
            "jp": "ピクシー - Clefable",
            "id": "#036",
            "image": "data/images/Generation One/Red:blue/36.png"
          },
          "Vulpix": {
            "eng": "Vulpix",
            "jp": "ロコン - Rokon",
            "id": "#037",
            "image": "data/images/Generation One/Red:blue/37.png"
          },
          "Ninetales": {
            "eng": "Ninetales",
            "jp": "キュウコン - Kyukon",
            "id": "#038",
            "image": "data/images/Generation One/Red:blue/38.png"
          },
          "Jigglypuff": {
            "eng": "Jigglypuff",
            "jp": "プリン - Purin",
            "id": "#039",
            "image": "data/images/Generation One/Red:blue/39.png"
          },
          "Wigglytuff": {
            "eng": "Wigglytuff",
            "jp": "プクリン - Pukurin",
            "id": "#040",
            "image": "data/images/Generation One/Red:blue/40.png"
          },
          "Zubat": {
            "eng": "Zubat",
            "jp": "ズバット - Zubat",
            "id": "#041",
            "image": "data/images/Generation One/Red:blue/41.png"
          },
          "Golbat": {
            "eng": "Golbat",
            "jp": "ゴルバット - Golbat",
            "id": "#042",
            "image": "data/images/Generation One/Red:blue/42.png"
          },
          "Oddish": {
            "eng": "Oddish",
            "jp": "ナゾノクサ - Nazonokusa",
            "id": "#043",
            "image": "data/images/Generation One/Red:blue/43.png"
          },
          "Gloom": {
            "eng": "Gloom",
            "jp": "クサイハナ - Kusaihana",
            "id": "#044",
            "image": "data/images/Generation One/Red:blue/44.png"
          },
          "Vileplume": {
            "eng": "Vileplume",
            "jp": "ラフレシア - Ruffresia",
            "id": "#045",
            "image": "data/images/Generation One/Red:blue/45.png"
          },
          "Paras": {
            "eng": "Paras",
            "jp": "パラス - Paras",
            "id": "#046",
            "image": "data/images/Generation One/Red:blue/46.png"
          },
          "Parasect": {
            "eng": "Parasect",
            "jp": "パラセクト - Parasect",
            "id": "#047",
            "image": "data/images/Generation One/Red:blue/47.png"
          },
          "Venonat": {
            "eng": "Venonat",
            "jp": "コンパン - Kongpang",
            "id": "#048",
            "image": "data/images/Generation One/Red:blue/48.png"
          },
          "Venomoth": {
            "eng": "Venomoth",
            "jp": "モルフォン - Morphon",
            "id": "#049",
            "image": "data/images/Generation One/Red:blue/49.png"
          },
          "Diglett": {
            "eng": "Diglett",
            "jp": "ディグダ - Digda",
            "id": "#050",
            "image": "data/images/Generation One/Red:blue/50.png"
          },
          "Dugtrio": {
            "eng": "Dugtrio",
            "jp": "ダグトリオ - Dugtrio",
            "id": "#051",
            "image": "data/images/Generation One/Red:blue/51.png"
          },
          "Meowth": {
            "eng": "Meowth",
            "jp": "ニャース - Nyarth",
            "id": "#052",
            "image": "data/images/Generation One/Red:blue/52.png"
          },
          "Persian": {
            "eng": "Persian",
            "jp": "ペルシアン - Persian",
            "id": "#053",
            "image": "data/images/Generation One/Red:blue/53.png"
          },
          "Psyduck": {
            "eng": "Psyduck",
            "jp": "コダック - Psyduck",
            "id": "#054",
            "image": "data/images/Generation One/Red:blue/54.png"
          },
          "Golduck": {
            "eng": "Golduck",
            "jp": "ゴルダック - Golduck",
            "id": "#055",
            "image": "data/images/Generation One/Red:blue/55.png"
          },
          "Mankey": {
            "eng": "Mankey",
            "jp": "マンキー - Mankey",
            "id": "#056",
            "image": "data/images/Generation One/Red:blue/56.png"
          },
          "Primeape": {
            "eng": "Primeape",
            "jp": "オコリザル - Okorizaru",
            "id": "#057",
            "image": "data/images/Generation One/Red:blue/57.png"
          },
          "Growlithe": {
            "eng": "Growlithe",
            "jp": "ガーディ - Gardie",
            "id": "#058",
            "image": "data/images/Generation One/Red:blue/58.png"
          },
          "Arcanine": {
            "eng": "Arcanine",
            "jp": "ウインディ - Windie",
            "id": "#059",
            "image": "data/images/Generation One/Red:blue/59.png"
          },
          "Poliwag": {
            "eng": "Poliwag",
            "jp": "ニョロモ - Nyoromo",
            "id": "#060",
            "image": "data/images/Generation One/Red:blue/60.png"
          },
          "Poliwhirl": {
            "eng": "Poliwhirl",
            "jp": "ニョロゾ - Nyorozo",
            "id": "#061",
            "image": "data/images/Generation One/Red:blue/61.png"
          },
          "Poliwrath": {
            "eng": "Poliwrath",
            "jp": "ニョロボン - Nyorobon",
            "id": "#062",
            "image": "data/images/Generation One/Red:blue/62.png"
          },
          "Abra": {
            "eng": "Abra",
            "jp": "ケーシィ - Casey",
            "id": "#063",
            "image": "data/images/Generation One/Red:blue/63.png"
          },
          "Kadabra": {
            "eng": "Kadabra",
            "jp": "ユンゲラー - Yungerer",
            "id": "#064",
            "image": "data/images/Generation One/Red:blue/64.png"
          },
          "Alakazam": {
            "eng": "Alakazam",
            "jp": "フーディン - Foodin",
            "id": "#065",
            "image": "data/images/Generation One/Red:blue/65.png"
          },
          "Machop": {
            "eng": "Machop",
            "jp": "ワンリキー - Wanriky",
            "id": "#066",
            "image": "data/images/Generation One/Red:blue/66.png"
          },
          "Machoke": {
            "eng": "Machoke",
            "jp": "ゴーリキー - Goriky",
            "id": "#067",
            "image": "data/images/Generation One/Red:blue/67.png"
          },
          "Machamp": {
            "eng": "Machamp",
            "jp": "カイリキー - Kairiky",
            "id": "#068",
            "image": "data/images/Generation One/Red:blue/68.png"
          },
          "Bellsprout": {
            "eng": "Bellsprout",
            "jp": "マダツボミ - Madatsubomi",
            "id": "#069",
            "image": "data/images/Generation One/Red:blue/69.png"
          },
          "Weepinbell": {
            "eng": "Weepinbell",
            "jp": "ウツドン - Utsudon",
            "id": "#070",
            "image": "data/images/Generation One/Red:blue/70.png"
          },
          "Victreebel": {
            "eng": "Victreebel",
            "jp": "ウツボット - Utsubot",
            "id": "#071",
            "image": "data/images/Generation One/Red:blue/71.png"
          },
          "Tentacool": {
            "eng": "Tentacool",
            "jp": "メノクラゲ - Menokurage",
            "id": "#072",
            "image": "data/images/Generation One/Red:blue/72.png"
          },
          "Tentacruel": {
            "eng": "Tentacruel",
            "jp": "ドククラゲ - Dokukurage",
            "id": "#073",
            "image": "data/images/Generation One/Red:blue/73.png"
          },
          "Geodude": {
            "eng": "Geodude",
            "jp": "イシツブテ - Isitsubute",
            "id": "#074",
            "image": "data/images/Generation One/Red:blue/74.png"
          },
          "Graveler": {
            "eng": "Graveler",
            "jp": "ゴローン - Golone",
            "id": "#075",
            "image": "data/images/Generation One/Red:blue/75.png"
          },
          "Golem": {
            "eng": "Golem",
            "jp": "ゴローニャ - Golonya",
            "id": "#076",
            "image": "data/images/Generation One/Red:blue/76.png"
          },
          "Ponyta": {
            "eng": "Ponyta",
            "jp": "ポニータ - Ponyta",
            "id": "#077",
            "image": "data/images/Generation One/Red:blue/77.png"
          },
          "Rapidash": {
            "eng": "Rapidash",
            "jp": "ギャロップ - Gallop",
            "id": "#078",
            "image": "data/images/Generation One/Red:blue/78.png"
          },
          "Slowpoke": {
            "eng": "Slowpoke",
            "jp": "ヤドン - Yadon",
            "id": "#079",
            "image": "data/images/Generation One/Red:blue/79.png"
          },
          "Slowbro": {
            "eng": "Slowbro",
            "jp": "ヤドラン - Yadoran",
            "id": "#080",
            "image": "data/images/Generation One/Red:blue/80.png"
          },
          "Magnemite": {
            "eng": "Magnemite",
            "jp": "コイル - Coil",
            "id": "#081",
            "image": "data/images/Generation One/Red:blue/81.png"
          },
          "Magneton": {
            "eng": "Magneton",
            "jp": "レアコイル - Rarecoil",
            "id": "#082",
            "image": "data/images/Generation One/Red:blue/82.png"
          },
          "Farfetch'd": {
            "eng": "Farfetch'd",
            "jp": "カモネギ - Kamonegi",
            "id": "#083",
            "image": "data/images/Generation One/Red:blue/83.png"
          },
          "Doduo": {
            "eng": "Doduo",
            "jp": "ドードー - Dodo",
            "id": "#084",
            "image": "data/images/Generation One/Red:blue/84.png"
          },
          "Dodrio": {
            "eng": "Dodrio",
            "jp": "ドードリオ - Dodorio",
            "id": "#085",
            "image": "data/images/Generation One/Red:blue/85.png"
          },
          "Seel": {
            "eng": "Seel",
            "jp": "パウワウ - Pawou",
            "id": "#086",
            "image": "data/images/Generation One/Red:blue/86.png"
          },
          "Dewgong": {
            "eng": "Dewgong",
            "jp": "ジュゴン - Jugon",
            "id": "#087",
            "image": "data/images/Generation One/Red:blue/87.png"
          },
          "Grimer": {
            "eng": "Grimer",
            "jp": "ベトベター - Betbeter",
            "id": "#088",
            "image": "data/images/Generation One/Red:blue/88.png"
          },
          "Muk": {
            "eng": "Muk",
            "jp": "ベトベトン - Betbeton",
            "id": "#089",
            "image": "data/images/Generation One/Red:blue/89.png"
          },
          "Shellder": {
            "eng": "Shellder",
            "jp": "シェルダー - Shellder",
            "id": "#090",
            "image": "data/images/Generation One/Red:blue/90.png"
          },
          "Cloyster": {
            "eng": "Cloyster",
            "jp": "パルシェン - Parshen",
            "id": "#091",
            "image": "data/images/Generation One/Red:blue/91.png"
          },
          "Gastly": {
            "eng": "Gastly",
            "jp": "ゴース - Ghos",
            "id": "#092",
            "image": "data/images/Generation One/Red:blue/92.png"
          },
          "Haunter": {
            "eng": "Haunter",
            "jp": "ゴースト - Ghost",
            "id": "#093",
            "image": "data/images/Generation One/Red:blue/93.png"
          },
          "Gengar": {
            "eng": "Gengar",
            "jp": "ゲンガー - Gangar",
            "id": "#094",
            "image": "data/images/Generation One/Red:blue/94.png"
          },
          "Onix": {
            "eng": "Onix",
            "jp": "イワーク - Iwark",
            "id": "#095",
            "image": "data/images/Generation One/Red:blue/95.png"
          },
          "Drowzee": {
            "eng": "Drowzee",
            "jp": "スリープ - Sleepe",
            "id": "#096",
            "image": "data/images/Generation One/Red:blue/96.png"
          },
          "Hypno": {
            "eng": "Hypno",
            "jp": "スリーパー - Sleeper",
            "id": "#097",
            "image": "data/images/Generation One/Red:blue/97.png"
          },
          "Krabby": {
            "eng": "Krabby",
            "jp": "クラブ - Crab",
            "id": "#098",
            "image": "data/images/Generation One/Red:blue/98.png"
          },
          "Kingler": {
            "eng": "Kingler",
            "jp": "キングラー - Kingler",
            "id": "#099",
            "image": "data/images/Generation One/Red:blue/99.png"
          },
          "Voltorb": {
            "eng": "Voltorb",
            "jp": "ビリリダマ - Biriridama",
            "id": "#100",
            "image": "data/images/Generation One/Red:blue/100.png"
          },
          "Electrode": {
            "eng": "Electrode",
            "jp": "マルマイン - Marumine",
            "id": "#101",
            "image": "data/images/Generation One/Red:blue/101.png"
          },
          "Exeggcute": {
            "eng": "Exeggcute",
            "jp": "タマタマ - Tamatama",
            "id": "#102",
            "image": "data/images/Generation One/Red:blue/102.png"
          },
          "Exeggutor": {
            "eng": "Exeggutor",
            "jp": "ナッシー - Nassy",
            "id": "#103",
            "image": "data/images/Generation One/Red:blue/103.png"
          },
          "Cubone": {
            "eng": "Cubone",
            "jp": "カラカラ - Karakara",
            "id": "#104",
            "image": "data/images/Generation One/Red:blue/104.png"
          },
          "Marowak": {
            "eng": "Marowak",
            "jp": "ガラガラ - Garagara",
            "id": "#105",
            "image": "data/images/Generation One/Red:blue/105.png"
          },
          "Hitmonlee": {
            "eng": "Hitmonlee",
            "jp": "サワムラー - Sawamular",
            "id": "#106",
            "image": "data/images/Generation One/Red:blue/106.png"
          },
          "Hitmonchan": {
            "eng": "Hitmonchan",
            "jp": "エビワラー - Ebiwalar",
            "id": "#107",
            "image": "data/images/Generation One/Red:blue/107.png"
          },
          "Lickitung": {
            "eng": "Lickitung",
            "jp": "ベロリンガ - Beroringa",
            "id": "#108",
            "image": "data/images/Generation One/Red:blue/108.png"
          },
          "Koffing": {
            "eng": "Koffing",
            "jp": "ドガース - Dogars",
            "id": "#109",
            "image": "data/images/Generation One/Red:blue/109.png"
          },
          "Weezing": {
            "eng": "Weezing",
            "jp": "マタドガス - Matadogas",
            "id": "#110",
            "image": "data/images/Generation One/Red:blue/110.png"
          },
          "Rhyhorn": {
            "eng": "Rhyhorn",
            "jp": "サイホーン - Sihorn",
            "id": "#111",
            "image": "data/images/Generation One/Red:blue/111.png"
          },
          "Rhydon": {
            "eng": "Rhydon",
            "jp": "サイドン - Sidon",
            "id": "#112",
            "image": "data/images/Generation One/Red:blue/112.png"
          },
          "Chansey": {
            "eng": "Chansey",
            "jp": "ラッキー - Lucky",
            "id": "#113",
            "image": "data/images/Generation One/Red:blue/113.png"
          },
          "Tangela": {
            "eng": "Tangela",
            "jp": "モンジャラ - Monjara",
            "id": "#114",
            "image": "data/images/Generation One/Red:blue/114.png"
          },
          "Kangaskhan": {
            "eng": "Kangaskhan",
            "jp": "ガルーラ - Garura",
            "id": "#115",
            "image": "data/images/Generation One/Red:blue/115.png"
          },
          "Horsea": {
            "eng": "Horsea",
            "jp": "タッツー - Tattu",
            "id": "#116",
            "image": "data/images/Generation One/Red:blue/116.png"
          },
          "Seadra": {
            "eng": "Seadra",
            "jp": "シードラ - Seadra",
            "id": "#117",
            "image": "data/images/Generation One/Red:blue/117.png"
          },
          "Goldeen": {
            "eng": "Goldeen",
            "jp": "トサキント - Tosakinto",
            "id": "#118",
            "image": "data/images/Generation One/Red:blue/118.png"
          },
          "Seaking": {
            "eng": "Seaking",
            "jp": "アズマオウ - Azumao",
            "id": "#119",
            "image": "data/images/Generation One/Red:blue/119.png"
          },
          "Staryu": {
            "eng": "Staryu",
            "jp": "ヒトデマン - Hitodeman",
            "id": "#120",
            "image": "data/images/Generation One/Red:blue/120.png"
          },
          "Starmie": {
            "eng": "Starmie",
            "jp": "スターミー - Starmie",
            "id": "#121",
            "image": "data/images/Generation One/Red:blue/121.png"
          },
          "Mr. Mime": {
            "eng": "Mr. Mime",
            "jp": "バリヤード - Barrierd",
            "id": "#122",
            "image": "data/images/Generation One/Red:blue/122.png"
          },
          "Scyther": {
            "eng": "Scyther",
            "jp": "ストライク - Strike",
            "id": "#123",
            "image": "data/images/Generation One/Red:blue/123.png"
          },
          "Jynx": {
            "eng": "Jynx",
            "jp": "ルージュラ - Rougela",
            "id": "#124",
            "image": "data/images/Generation One/Red:blue/124.png"
          },
          "Electabuzz": {
            "eng": "Electabuzz",
            "jp": "エレブー - Eleboo",
            "id": "#125",
            "image": "data/images/Generation One/Red:blue/125.png"
          },
          "Magmar": {
            "eng": "Magmar",
            "jp": "ブーバー - Boober",
            "id": "#126",
            "image": "data/images/Generation One/Red:blue/126.png"
          },
          "Pinsir": {
            "eng": "Pinsir",
            "jp": "カイロス - Kailios",
            "id": "#127",
            "image": "data/images/Generation One/Red:blue/127.png"
          },
          "Tauros": {
            "eng": "Tauros",
            "jp": "ケンタロス - Kentauros",
            "id": "#128",
            "image": "data/images/Generation One/Red:blue/128.png"
          },
          "Magikarp": {
            "eng": "Magikarp",
            "jp": "コイキング - Koiking",
            "id": "#129",
            "image": "data/images/Generation One/Red:blue/129.png"
          },
          "Gyarados": {
            "eng": "Gyarados",
            "jp": "ギャラドス - Gyarados",
            "id": "#130",
            "image": "data/images/Generation One/Red:blue/130.png"
          },
          "Lapras": {
            "eng": "Lapras",
            "jp": "ラプラス - Laplace",
            "id": "#131",
            "image": "data/images/Generation One/Red:blue/131.png"
          },
          "Ditto": {
            "eng": "Ditto",
            "jp": "メタモン - Metamon",
            "id": "#132",
            "image": "data/images/Generation One/Red:blue/132.png"
          },
          "Eevee": {
            "eng": "Eevee",
            "jp": "イーブイ - Eievui",
            "id": "#133",
            "image": "data/images/Generation One/Red:blue/133.png"
          },
          "Vaporeon": {
            "eng": "Vaporeon",
            "jp": "シャワーズ - Showers",
            "id": "#134",
            "image": "data/images/Generation One/Red:blue/134.png"
          },
          "Jolteon": {
            "eng": "Jolteon",
            "jp": "サンダース - Thunders",
            "id": "#135",
            "image": "data/images/Generation One/Red:blue/135.png"
          },
          "Flareon": {
            "eng": "Flareon",
            "jp": "ブースター - Booster",
            "id": "#136",
            "image": "data/images/Generation One/Red:blue/136.png"
          },
          "Porygon": {
            "eng": "Porygon",
            "jp": "ポリゴン - Porygon",
            "id": "#137",
            "image": "data/images/Generation One/Red:blue/137.png"
          },
          "Omanyte": {
            "eng": "Omanyte",
            "jp": "オムナイト - Omnite",
            "id": "#138",
            "image": "data/images/Generation One/Red:blue/138.png"
          },
          "Omastar": {
            "eng": "Omastar",
            "jp": "オムスター - Omstar",
            "id": "#139",
            "image": "data/images/Generation One/Red:blue/139.png"
          },
          "Kabuto": {
            "eng": "Kabuto",
            "jp": "カブト - Kabuto",
            "id": "#140",
            "image": "data/images/Generation One/Red:blue/140.png"
          },
          "Kabutops": {
            "eng": "Kabutops",
            "jp": "カブトプス - Kabutops",
            "id": "#141",
            "image": "data/images/Generation One/Red:blue/141.png"
          },
          "Aerodactyl": {
            "eng": "Aerodactyl",
            "jp": "プテラ - Ptera",
            "id": "#142",
            "image": "data/images/Generation One/Red:blue/142.png"
          },
          "Snorlax": {
            "eng": "Snorlax",
            "jp": "カビゴン - Kabigon",
            "id": "#143",
            "image": "data/images/Generation One/Red:blue/143.png"
          },
          "Articuno": {
            "eng": "Articuno",
            "jp": "プクリン - Freezer",
            "id": "#144",
            "image": "data/images/Generation One/Red:blue/144.png"
          },
          "Zapdos": {
            "eng": "Zapdos",
            "jp": "サンダー - Thunder",
            "id": "#145",
            "image": "data/images/Generation One/Red:blue/145.png"
          },
          "Moltres": {
            "eng": "Moltres",
            "jp": "プクリン - Fire",
            "id": "#146",
            "image": "data/images/Generation One/Red:blue/146.png"
          },
          "Dratini": {
            "eng": "Dratini",
            "jp": "ミニリュウ - Miniryu",
            "id": "#147",
            "image": "data/images/Generation One/Red:blue/147.png"
          },
          "Dragonair": {
            "eng": "Dragonair",
            "jp": "ハクリュー - Hakuryu",
            "id": "#148",
            "image": "data/images/Generation One/Red:blue/148.png"
          },
          "Dragonite": {
            "eng": "Dragonite",
            "jp": "カイリュー - Kairyu",
            "id": "#149",
            "image": "data/images/Generation One/Red:blue/149.png"
          },
          "Mewtwo": {
            "eng": "Mewtwo",
            "jp": "ミュウツー - Mewtwo",
            "id": "#150",
            "image": "data/images/Generation One/Red:blue/150.png"
          },
          "Mew": {
            "eng": "Mew",
            "jp": "ミュウ - Mew",
            "id": "#151",
            "image": "data/images/Generation One/Red:blue/151.png"
          }
    })
});