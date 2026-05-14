/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const CONTENT = {
  lodgeName: "Amazone Nature Lodge",
  lodgeNameJp: "アマゾン・ネイチャー・ロッジ",
  location: "フランス領ギアナ | ルラとコー湿地の中心部",
  tagline: "原始の森の鼓動を聞く、究極のエコ・リトリート",
  
  about: {
    title: "手付かずの熱帯雨林、その神秘を探索する",
    description: "フランス領ギアナのルラとコー湿地エリアの中間に位置するアマゾン・ネイチャー・ロッジは、原始林の生物多様性を発見、観察、探索するための理想的な場所です。800万ヘクタールの広大な熱帯雨林（ギアナのテリトリーの96%）に囲まれたこの地は、近代的な喧騒から完全に隔離された聖域となっています。私たちのコンセプトは、この唯一無二の環境において低環境負荷（ロー・インパクト）な滞在を提供することです。",
    guianaDetails: {
      title: "南米の秘境：フランス領ギアナについて",
      content: "南米大陸に位置するフランス領ギアナは、フランスの海外県であり、欧州連合（EU）の一部です。面積の98%がアマゾンの熱帯雨林に占められ、地球上で最も野生が残る国の一つです。クレオール、先住民アマリンディアン、モン族など、多様な民族が共生する豊かな文化も特徴です。気候は赤道直下で、平均気温は26℃。7月から12月が主な乾期ですが、3月には「3月の小夏」と呼ばれる短い乾期も訪れます。",
    }
  },
  
  accommodation: {
    title: "生態系を守り、静寂を楽しむ宿泊施設",
    description: "全8棟のロッジ。すべてのお部屋に専用のバスルーム（太陽光温水器付）とトイレが完備されています。都市の汚染や喧騒から離れ、街灯の届かない夜空には息を呑むような星空が広がります。",
    ecoConcept: {
      title: "唯一無二の環境を保護する",
      items: [
        "エネルギー：すべて太陽光発電パネルと太陽光温水器で賄われています。",
        "廃棄物：厳格な分別とリサイクルを実施しています。",
        "水処理：敷地内にラグーン（水処理システム）を設置し、環境負荷を最小限に抑えています。"
      ]
    },
    items: [
      {
        id: "kouali",
        name: "クアリ・ロッジ (Kouali)",
        description: "バスルーム、専用トイレ、ワークルーム、独立したキッチンを備えた機能的なロッジです。",
        image: "https://i.postimg.cc/cCrp6grL/image.png"
      },
      {
        id: "grignon",
        name: "グリニョン・ロッジ (Grignon)",
        description: "研究や長期滞在に適した、ワークルームとキッチン完備の快適な独立型ロッジ。",
        image: "https://i.postimg.cc/vHpsgz7V/image.png"
      },
      {
        id: "sun",
        name: "サン・ロッジ (Sun Lodges)",
        description: "5棟のサン・ロッジでは、環境に配慮しつつ心地よい滞在を提供します。",
        image: "https://i.postimg.cc/bvfpMTdg/image.png"
      },
      {
        id: "angelique",
        name: "アンジェリック・ロッジ (Angelique)",
        description: "森の静けさを独り占めできる立地。独立したキッチンを備え、プライバシーを重視する方に最適。",
        image: "https://i.postimg.cc/Pr8GjwgR/image.png"
      }
    ]
  },
  
  entomology: {
    title: "世界屈指の生物多様性、昆虫の楽園",
    description: "フランス領ギアナには10万種以上の昆虫が知られており、未記載種を含めると40万から100万種に達すると推定されています。私たちは、エコツーリストから専門研究者まで、あらゆる訪問者を歓迎します。",
    stats: [
      { label: "既知の昆虫種", value: "100,000+" },
      { label: "記載済みの甲虫類", value: "5,830+" },
      { label: "原生林の面積", value: "800万ha" }
    ],
    fauna: {
      morpho: "アマゾン・ネイチャー・ロッジには、ギアナを代表するモルフォ蝶 9種（メネラウス、ヘクバ、レテノール等）すべてが生息しています。",
      giants: "世界最大のカミキリムシ「タイタンオオウスバカミキリ（17cm超）」、巨大な「ルブロンオオツチグモ（レッグスパン30cm）」、弾丸アリ（パラポネラ）なども観察可能です。"
    },
    features: [
      { text: "9種のモルフォ蝶すべてが観察可能", icon: "Bug" },
      { text: "タイタンオオウスバカミキリの生息地", icon: "Bug" },
      { text: "ベイトトラップやライトトラップの全機材貸出", icon: "Search" },
      { text: "専門ガイドによる夜間・フィールド採集ツアー", icon: "Trees" }
    ]
  },
  
  exportSupport: {
    title: "日本のコレクター・愛好家の皆様へ",
    subtitle: "合法かつスムーズな輸出入を完全サポート",
    description: "アマゾン・ネイチャー・ロッジでは、日本の愛好家の皆様が標本や生体（生きた昆虫）を合法的に持ち帰れるよう、専門的な法的手続きを無料で代行・サポートします。",
    legalDetails: [
      "1cm以上の個体：最大1,000体まで合法的に輸出可能（生体・標本共）",
      "1cm未満の個体：無制限に輸出可能（生体・標本共）",
      "対象種：タイタンオオウスバカミキリ、サボテンゾウカブト、アクティオンゾウカブト等",
      "書類作成：Declaration Collect（採取申告書）等の必要書類をすべて無料で作成"
    ],
    guarantee: "日本の税関をスムーズに通過し、トラブルなくコレクションを自宅へ持ち帰るためのあらゆるサポートをお約束します。"
  },
  
  amenities: [
    { title: "地産地消の食事", subtitle: "地元の新鮮な食材を使用したフル朝食、昼食、夕食" },
    { title: "空港シャトル", subtitle: "カイエンヌ空港からの送迎（要予約）" },
    { title: "ランドリーサービス", subtitle: "長期滞在に便利な洗濯サービスを提供" },
    { title: "環境への配慮", subtitle: "太陽光発電、リサイクル、ラグーン浄化システム完備" }
  ],
  
  cta: {
    book: "空室状況を確認・予約",
    viewMore: "詳細を見る"
  },
  
  contact: {
    address: ["Roura - Kaw Marsh Area", "French Guiana"],
    phone: "+33675938512",
    email: "info@amazonenature.com",
    notes: "（日本語・韓国語対応可）"
  },
  
  nav: ["ホーム", "ロッジ", "昆虫学", "日本向け輸出サポート", "基本情報"]
};

export const GALLERY_IMAGES = [
  "https://i.postimg.cc/053d6wQ5/IMG-20260430-120247.jpg",
  "https://i.postimg.cc/QNPkBTtj/IMG-20260430-220323.jpg",
  "https://i.postimg.cc/RVH1wZ6d/IMG-20260430-220343.jpg",
  "https://i.postimg.cc/DyXQ1wJg/IMG-20260430-220357.jpg",
  "https://i.postimg.cc/dtyRGVkj/IMG-20260430-220408.jpg",
  "https://i.postimg.cc/QxTgcd9S/IMG-20260430-220417.jpg",
  "https://i.postimg.cc/DyXQ1wJj/IMG-20260430-220427.jpg",
  "https://i.postimg.cc/9F7PyQRn/IMG-20260430-220436.jpg",
  "https://i.postimg.cc/zXgwTGbM/IMG-20260430-220453.jpg",
  "https://i.postimg.cc/rFrG5w07/IMG-20260430-220521.jpg",
  "https://i.postimg.cc/7Y21SZJ8/IMG-20260430-220530.jpg",
  "https://i.postimg.cc/X7CK9YB0/IMG-20260430-220539.jpg",
  "https://i.postimg.cc/kgPQsPK1/IMG-20260430-220554.jpg",
  "https://i.postimg.cc/XY6fL6dD/IMG-20260430-220604.jpg",
  "https://i.postimg.cc/4xR6PRVS/IMG-20260430-220612.jpg",
  "https://i.postimg.cc/JzCNxCZv/IMG-20260430-221621.jpg",
  "https://i.postimg.cc/YCB6RBQc/IMG-20260430-222025.jpg",
  "https://i.postimg.cc/nzW7QynN/mmexport1777558049367.jpg",
  "https://i.postimg.cc/4xG8d9LK/mmexport1777558615087.jpg",
  "https://i.postimg.cc/htnCjdyQ/mmexport1777558631250.jpg",
  "https://i.postimg.cc/cLWDHn9Y/mmexport1777558640818.jpg",
  "https://i.postimg.cc/pLv0TFGS/mmexport1777558647470.jpg",
  "https://i.postimg.cc/rpK5Fykb/mmexport1777558650933.jpg",
  "https://i.postimg.cc/GpVGB0LM/mmexport1777558652654.jpg",
  "https://i.postimg.cc/MGNVck6Y/mmexport1777558654379.jpg",
  "https://i.postimg.cc/mrJCcxL6/mmexport1777558656192.jpg",
  "https://i.postimg.cc/JnXJZTty/mmexport1777559159816.jpg",
  "https://i.postimg.cc/QCr7bpWp/mmexport1777559161583.jpg",
  "https://i.postimg.cc/jqzPjkG3/mmexport1777559163228.jpg",
  "https://i.postimg.cc/prYF1pD4/mmexport1777559164914.jpg",
  "https://i.postimg.cc/jdtNn4TN/mmexport1777559166621.jpg",
  "https://i.postimg.cc/DwzXBfmY/mmexport1777559168263.jpg",
  "https://i.postimg.cc/K8sgVXMx/mmexport1777559170077.jpg",
  "https://i.postimg.cc/25bBNHQQ/mmexport1777559171731.jpg",
  "https://i.postimg.cc/k50RJxwq/mmexport1777559173479.jpg",
  "https://i.postimg.cc/NFYyTBWb/mmexport1777559176434.jpg",
  "https://i.postimg.cc/brTZ94P2/mmexport1777559178967.jpg",
  "https://i.postimg.cc/y6X3K3RN/mmexport1777559180962.jpg",
  "https://i.postimg.cc/15mn3R0q/mmexport1777559182755.jpg",
  "https://i.postimg.cc/TYtyL8QD/mmexport1777559185702.jpg",
  "https://i.postimg.cc/pLymK01G/mmexport1777559232071.jpg",
  "https://i.postimg.cc/SxjncZt3/mmexport1777559233944.jpg",
  "https://i.postimg.cc/P5NC16RP/mmexport1777559264006.jpg",
  "https://i.postimg.cc/JzgGxbfs/mmexport1777559265768.jpg",
  "https://i.postimg.cc/cLjrhQp8/mmexport1777559267545.jpg",
  "https://i.postimg.cc/3x6d1gsv/mmexport1777559269494.jpg",
  "https://i.postimg.cc/DwD86q95/mmexport1777559271276.jpg",
  "https://i.postimg.cc/x17c5Kw6/mmexport1777559273245.jpg",
  "https://i.postimg.cc/Zqd0MWm6/mmexport1777559741567.jpg",
  "https://i.postimg.cc/cJn6bvWQ/mmexport1777559743138.jpg",
  "https://i.postimg.cc/DZQ07R85/mmexport1777559748482.jpg",
  "https://i.postimg.cc/dQB3pMbx/mmexport1777560094797.jpg",
  "https://i.postimg.cc/pXcTVfX3/mmexport1777560096548.jpg",
  "https://i.postimg.cc/htHtTKmd/mmexport1777560098286.jpg",
  "https://i.postimg.cc/RZjZKvt7/mmexport1777560100114.jpg",
  "https://i.postimg.cc/nLBc1NK5/mmexport1777560102597.jpg",
  "https://i.postimg.cc/DZhfp5Bm/mmexport1777560104387.jpg",
  "https://i.postimg.cc/sxDjsxFF/mmexport1777560106096.jpg",
  "https://i.postimg.cc/1XC9tSPC/mmexport1777560108624.jpg",
  "https://i.postimg.cc/zD0DpCWr/mmexport1777560110768.jpg",
  "https://i.postimg.cc/66Y6zrR3/mmexport1777560112726.jpg",
  "https://i.postimg.cc/7PmPX37C/mmexport1777560114623.jpg",
  "https://i.postimg.cc/4Nyf0Ybw/mmexport1777560116387.jpg",
  "https://i.postimg.cc/kXGJH2FT/mmexport1777560121008.jpg",
  "https://i.postimg.cc/fTPzQMBp/mmexport1777560122740.jpg",
  "https://i.postimg.cc/bN5yfqmj/mmexport1777560128226.jpg",
  "https://i.postimg.cc/x1b00BZ9/mmexport1777560129864.jpg",
  "https://i.postimg.cc/cL8ssPzL/mmexport1777560132042.jpg",
  "https://i.postimg.cc/cL8ssPzQ/mmexport1777560134178.jpg",
  "https://i.postimg.cc/xdD9qtrH/mmexport1777560137189.jpg",
  "https://i.postimg.cc/wBXgNLHS/mmexport1777560140351.jpg",
  "https://i.postimg.cc/rp1M4xMK/mmexport1777560142320.jpg",
  "https://i.postimg.cc/656FBj4W/image.png",
  "https://i.postimg.cc/MpNLbzPb/image.png",
  "https://i.postimg.cc/Dz1xrL4R/image.png",
  "https://i.postimg.cc/NGdpkgL5/image.png",
  "https://i.postimg.cc/Y9pzQVHh/image.png",
  "https://i.postimg.cc/zX9wx3NN/image.png",
  "https://i.postimg.cc/br4nVV7X/image.png",
  "https://i.postimg.cc/d3CRFKmv/image.png",
  "https://i.postimg.cc/vZbrJk4j/image.png",
  "https://i.postimg.cc/MGr1jG9J/image.png"
];