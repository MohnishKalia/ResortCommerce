import Brando from './images/brando.jpg'
import Cons from './images/constance.jpg'
import Fs from './images/fourseasons.jpg'
import Ic from './images/icsydney.jpg'
import Jm from './images/jmresort.jpg'
import Samabe from './images/samabe.jpg'
import Trav from './images/travaasa.jpg'
import Los from './images/loscabos.jpg'

export interface Resort {
    id: number,
    imgUrl: string,
    heading: string,
    description: string,
    quantity: number,
}

//https://www.oyster.com/articles/the-11-most-luxurious-all-inclusive-resorts-in-the-world/

const Resorts: Resort[] = [
    {
        id: 2345345,
        imgUrl: Ic,
        heading: 'InterContinental Sydney',
        description: 'Over 70 remarkable years ago, the InterContinental legacy opened the gateway to luxury travel and transformed the globe into a playground of allure and grandeur. Today, set within the beautifully restored Treasury Building of 1851, InterContinental Sydney continues this legacy with its rich 19th century architecture, heritage and exciting history. With a kaleidoscope of harbour lights before you, you will explore a collection of luxury rooms and suites boasting sweeping views across the Sydney Harbour Bridge, Sydney Opera House and Royal Botanic Gardens. An award-winning and world-class Club InterContinental offers the height of sophistication on level 32 offering twilight drinks on a stunning wrap-around balcony terrace.',
        quantity: 0,
    },
    {
        id: 8092034728,
        imgUrl: Cons,
        heading: 'Constance Moofushi',
        description: 'The Maldives has long been a luxury traveler’s playground, but the Constance Moofushi all-inclusive resort is one of the finest in the world. Your experience here starts with one of the best private airport lounges around, establishing a luxe vibe before guests even board the seaplane in Male to reach the small, private island. The resort blends chic design and a high-end atmosphere with a casual, beachy vibe that’s exactly what the doctor ordered for complete relaxation. Constance Moofushi is particularly great for diving enthusiasts, as it’s within 30 minutes of the world’s best dive spots and has an excellent house reef. The 110 rustic-chic rooms feature premium minibars, top-notch entertainment systems, and stunning sea views — some are even directly over the water. Along with an idyllic beach, a stay here comes with snorkeling and water sports as well as great food and drink.',
        quantity: 0,
    },
    {
        id: 179283502,
        imgUrl: Fs,
        heading: 'Four Seasons Tented Camp Golden Triangle',
        description: 'Set amid the lush jungle landscape of Southeast Asia’s famed Golden Triangle, this Four Seasons is one of the most stunning in the brand’s portfolio. The resort, in the extreme north of Thailand, nearly straddles the border of Thailand, Laos, and Myanmar, and is only accessible by private boat. The 15 luxury tents all include huge antique-style bathtubs, outdoor rainfall showers, unlimited minibars, free bottles of Champagne, and enormous balconies that overlook the Ruak River and jungle. Think being in the middle of nowhere means you’ll be bored? Think again. There are countless activities here, including wildlife excursions and educational experiences, as well as a luxe spa and jungle-shrouded pool. Transfers to Chiang Rai’s airport are also included, as are Jeep shuttles around the property.',
        quantity: 0,
    },
    {
        id: 72349822,
        imgUrl: Brando,
        heading: 'The Brando',
        description: 'What’s more luxurious than posting up on your own private island for a week? Almost nothing. To that end, The Brando is one of the most exclusive retreats in the world. As you might suspect, the name comes from Marlon Brando, who purchased the island after falling in love with it while filming “Mutiny on the Bounty.” Hollywood history aside, the resort is home to 35 private villas with plunge pools and direct access to empty stretches of pristine white-sand beach. All-inclusive services must be experienced to be believed here, and include cuisine from a Michelin two-star chef, one treatment per day at a holistic spa, and unlimited activities, from exploring the lagoon in a Polynesian outrigger canoe to attending lectures about local marine life. Arriving at the resort via a private plane from Tahiti adds to the resort’s exclusivity, and is included for guests staying at least a week.',
        quantity: 0,
    },
    {
        id: 1283901232,
        imgUrl: Jm,
        heading: 'Jade Mountain Resort',
        description: 'It’s hard to overstate just how beautiful the scenery is at the Jade Mountain Resort in St. Lucia. It’s spectacular setting — high on the hills above the sea and with jaw-dropping Pitons views — makes it one of the most romantic resorts in the world. The 29 enormous suites are a highlight, with innovative, open fourth walls that frame views of the sea from anywhere in the room — whether you’re on the canopied bed, in the raised whirlpool tub, and (in all but the entry-level category) private infinity pool. The open-air restaurant serves excellent meals, and — in the absence of TVs and kids — you’ll get nothing but peace and quiet. You’ll have to take a short shuttle ride or hike down to use the two beaches, free water sports, and dive center at sister property Anse Chastanet.',
        quantity: 0,
    },
    {
        id: 7128312098,
        imgUrl: Samabe,
        heading: 'Samabe Bali Suites & Villas',
        description: 'Bali offers a wide range of resorts, from budget crash pads in Kuta to the luxurious enclaves along the Nusa Dua Peninsula. But it’s not flush with all-inclusive properties. That changes at the Samabe Bali, an ultra-luxurious beachfront resort located atop a cliff a five-minute drive from central Nusa Dua. This boutique resort has only 81 units, which blend contemporary and traditional Indonesian decor, plus top-notch amenities and balconies offering expansive ocean views. Villas have private infinity pools and up to two bedrooms. With a private beach, a wonderful spa, two excellent restaurants, a gorgeous infinity pool, a kids’ club, and tons of daily activities, there is little guests can’t do on-site. Plus, all-inclusive rates cover everything from free daily spa treatments to cultural tours to beachside yoga classes.',
        quantity: 0,
    },
    {
        id: 89634829,
        imgUrl: Trav,
        heading: 'Travaasa Hana',
        description: 'The Travaasa Hana, Maui is one of the most prestigious all-inclusive resorts in the United States. Ok, it’s not technically an all-inclusive, but all-inclusive packages are available that include, food, drinks, and even spa credits. Adding to all of that pampering, the hotel’s setting is nothing short of stunning. Overlooking Hana Bay, you can expect rustic luxury amid Maui’s lush, secluded east coast. Visitors must make the long, windy drive along the Road to Hana or take a short flight from the main airport — free for some packages — to reach this peaceful oceanfront property. Once you’re here, stand-alone bungalows are the star of the show, and all feature separate tubs and showers plus big furnished terraces with garden or ocean views. Expansive grounds house two outdoor pools, a hot tub, an elegant spa with outdoor hot tubs, a wellness pavilion with daily yoga and meditation classes, tennis courts, and a small fitness center. It’s a special place, for sure, and a prime destination for special occasions.',
        quantity: 0,
    },
    {
        id: 47238042,
        imgUrl: Los,
        heading: 'Grand Velas Los Cabos',
        description: 'The newest addition to the Grand Velas luxury properties, the Los Cabos outpost is easily one of the most luxe all-inclusive hotels in Mexico. The grounds are simply gorgeous, dripping with flowers and framing a stunning series of pools that lead to the beach. This is all complemented with a dizzying array of dining and drinking options, from French fine dining to casual Mexican seafood — plus interiors that feel nothing short of opulent. There are almost no limits on the food and drink options that are included, and nearly all top-shelf beverages are included. The spa is a stunner, as are the wellness facilities. Rooms are massive, and all include beautiful terraces with views of the Sea of Cortez.',
        quantity: 0,
    },
];

export default Resorts;