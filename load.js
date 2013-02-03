var defaults = [
	{
		"Category": "general",
		"American": "gotten",
		"AmericanForms": "gotten",
		"British": "got",
		"Explanation": "The perfect participle of <em>get</em> is just <em>got</em>, not <em>gotten</em>."
	},
	{
		"Category": "general",
		"American": "apartment",
		"AmericanForms": "apartment, apartments",
		"British": "flat",
		"Explanation": "A place to live in a multi-family building is a <em>flat</em>, not an <em>apartment</em>."
	},
	{
		"Category": "general",
		"American": "coworker",
		"AmericanForms": "co-worker, coworker, co-workers, coworkers",
		"British": "colleague",
		"Explanation": "Someone you work with is a <em>colleague</em>, not a <em>co-worker</em>."
	},
	{
		"Category": "general",
		"American": "gas",
		"AmericanForms": "gas",
		"British": "petrol",
		"Explanation": "What fuels your car is <em>petrol</em>, not <em>gas</em>."
	},
	{
		"Category": "general",
		"American": "cell phone",
		"AmericanForms": "cell phone, cell phones",
		"British": "mobile phone",
		"Explanation": "Any of <em>mobile phone</em>, <em>mobile</em>, or just <em>phone</em> are acceptable replacements for American <em>cell phone</em>."
	},
	{
		"Category": "general",
		"American": "elevator",
		"AmericanForms": "elevator, elevators",
		"British": "lift",
		"Explanation": "A vertical people mover is a <em>lift</em>, not an <em>elevator</em>."
	},
	{
		"Category": "general",
		"American": "ass",
		"AmericanForms": "ass, asses",
		"British": "arse",
		"Explanation": "American <em>ass</em> is British <em>arse</em> or <em>bottom</em>."
	},
	{
		"Category": "general",
		"American": "asshole",
		"AmericanForms": "asshole, assholes",
		"British": "arsehole",
		"Explanation": "As an insult, <em>arse</em> should be used rather than the full <em>arsehole</em>."
	},
	{
		"Category": "general",
		"American": "nightstand",
		"AmericanForms": "nightstand, nightstands",
		"British": "beside table, beside cabinet",
		"Explanation": "A small table/cupboard next to the bed isn&apos;t a <em>nightstand</em> but a <em>bedside table</em> or <em>beside cabinet</em>."
	},
	{
		"Category": "general",
		"American": "sidewalk",
		"AmericanForms": "sidewalk, sidewalks",
		"British": "pavement",
		"Explanation": "You walk on the <em>pavement</em>, not the <em>sidewalk</em>."
	},
	{
		"Category": "general",
		"American": "stoop",
		"AmericanForms": "stoop",
		"British": "step",
		"Explanation": "The small porch-like thing in front of a house isn&apos;t a <em>stoop</em> but a <em>step</em>."
	},
	{
		"Category": "general",
		"American": "normalcy",
		"AmericanForms": "normalcy, normalcies",
		"British": "normality",
		"Explanation": "The state of being <em>normal</em> isn&apos;t <em>normalcy</em> but <em>normality</em>."
	},
	{
		"Category": "general",
		"American": "trash can",
		"AmericanForms": "trash can, trash cans",
		"British": "bin",
		"Explanation": "Rubbish goes in a <em>bin</em>."
	},
	{
		"Category": "general",
		"American": "garbage, trash",
		"AmericanForms": "garbage, trash",
		"British": "rubbish",
		"Explanation": "The things you discard are <em>rubbish</em> in British English."
	},
	{
		"Category": "general",
		"American": "wager",
		"AmericanForms": "wager, wagers",
		"British": "bet",
		"Explanation": "A gambler does not make a <em>wager</em>; he makes a <em>bet</em>."
	},
	{
		"Category": "general",
		"American": "store",
		"AmericanForms": "store, stores",
		"British": "shop",
		"Explanation": "You buy things not in a <em>store</em> but in a <em>shop</em>."
	},
	{
		"Category": "general",
		"American": "mall",
		"AmericanForms": "mall, malls",
		"British": "shopping centre",
		"Explanation": "A large, probably out-of-town-centre collection of shops might be a <em>mall</em>, but usually such a collection is just a <em>shopping centre</em>."
	},
	{
		"Category": "general",
		"American": "obligated",
		"AmericanForms": "obligated",
		"British": "obliged",
		"Explanation": "Across the pond, you aren&apos;t <em>obligated</em>, you&apos;re <em>obliged</em>."
	},
	{
		"Category": "general",
		"American": "momentarily",
		"AmericanForms": "momentarily",
		"British": "very soon, in a moment",
		"Explanation": "<em>Momentarily</em> means <em>for an instant</em> across the pond. Use <em>very soon</em> or <em>in a moment</em> instead."
	},
	{
		"Category": "general",
		"American": "curse",
		"AmericanForms": "curse, curses, cursed, cursing",
		"British": "cuss",
		"Explanation": "<em>Curse</em> is mostly reserved for witchy things."
	},
	{
		"Category": "general",
		"American": "washcloth",
		"AmericanForms": "washcloth, washclothes",
		"British": "flannel, facecloth",
		"Explanation": "After sexytiems, you might clean up with a <em>flannel</em> or <em>facecloth</em>, not a <em>washcloth</em>."
	},
	{
		"Category": "general",
		"American": "start over",
		"AmericanForms": "start over, starts over, started over, starting over",
		"British": "start again",
		"Explanation": "The English aren&apos;t such big fans of the more metaphorical uses of <em>over</em>."
	},
	{
		"Category": "cars",
		"American": "trunk",
		"AmericanForms": "trunk",
		"British": "boot",
		"Explanation": "The luggage compartment in a car is a <em>boot</em>, not a <em>trunk</em>."
	},
	{
		"Category": "cars",
		"American": "hood",
		"AmericanForms": "hood",
		"British": "bonnet",
		"Explanation": "The front cover of a car is a <em>bonnet</em>, not a <em>hood</em>."
	},
	{
		"Category": "general",
		"American": "faucet",
		"AmericanForms": "faucet, faucets",
		"British": "tap",
		"Explanation": "You might wash your hands under a <em>tap</em>, not a <em>faucet</em>."
	},
	{
		"Category": "general",
		"American": "quit",
		"AmericanForms": "quit, quits, quitting",
		"British": "stop",
		"Explanation": "Across the pond, <em>quitting</em> only applies to jobs. Everything else you <em>stop</em> doing."
	},
	{
		"Category": "general",
		"American": "mom",
		"AmericanForms": "mom",
		"British": "mum, mother",
		"Explanation": "It&apos;s the Queen <em>Mother</em> or <em>Mum</em>, naturally, not <em>Mom</em>."
	},
	{
		"Category": "general",
		"American": "pop, pa",
		"AmericanForms": "pop, pa",
		"British": "dad, father",
		"Explanation": "I haven&apos;t actually heard <em>pop</em> or <em>pa</em> outside of <em>Little House on the Prairie</em>. But regardless: an English father figure is a <em>dad</em> or <em>father</em>."
	},
	{
		"Category": "general",
		"American": "aluminum",
		"AmericanForms": "aluminum",
		"British": "aluminium",
		"Explanation": "I always thought Brits were mispronouncing <em>aluminum</em> when they say <em>aluminium</em> (like the whole <em>nuculer</em> thing for <em>nuclear</em>), but apparently they spell it that way too!"
	},
	{
		"Category": "general",
		"American": "check",
		"AmericanForms": "check, checks",
		"British": "cheque",
		"Explanation": "I you want to employ an exceedingly old-fashioned method of transacting money, you write a <em>cheque</em>, not a <em>check</em>."
	},
	{
		"Category": "general",
		"American": "check",
		"AmericanForms": "check, checks",
		"British": "bill",
		"Explanation": "In a restaurant, you ask for the <em>bill</em>, not the <em>check</em>."
	},
	{
		"Category": "general",
		"American": "jail",
		"AmericanForms": "jail, jails",
		"British": "prison",
		"Explanation": "Temporary police custody is being in <em>prison</em> or <em>in the cells</em> across the pond, apparently, not <em>jail</em>."
	},
	{
		"Category": "general",
		"American": "cop",
		"AmericanForms": "cop, cops",
		"British": "policeman",
		"Explanation": "Also note that a <em>policeman</em> in the U.K. likely does not carry a firearm."
	},
	{
		"Category": "general",
		"American": "backyard, yard",
		"AmericanForms": "backyard, yard, backyards, yards",
		"British": "back garden, garden",
		"Explanation": "As long as there is the smallest piece of grass, or a flower bed and no grass, hell, even just a pot of herbs, it&apos;s called a <em>garden</em>. Only if it&apos;s completely concrete/paved and used to store bikes and bins would it be called a <em>yard</em>. School playgrounds are often called yards."
	},
	{
		"Category": "general",
		"American": "closet",
		"AmericanForms": "closet, closets",
		"British": "wardrobe, cupboard",
		"Explanation": "Instead of built-in <em>closets</em>, furniture <em>wardrobes</em> are more common in the U.K."
	},
	{
		"Category": "food",
		"American": "candy",
		"AmericanForms": "candy, candies",
		"British": "sweets",
		"Explanation": "A Brit with a sweet tooth eats a lot of <em>sweets</em>, not <em>candy</em>."
	},
	{
		"Category": "food",
		"American": "takeout",
		"AmericanForms": "takeout, take-out",
		"British": "takeaway",
		"Explanation": "Lazy people in the British Isles order <em>takeaway</em>, not <em>take-out</em>."
	},
	{
		"Category": "food",
		"American": "steep",
		"AmericanForms": "steep, steeps, steeped, steeping",
		"British": "brew",
		"Explanation": "All of the tea consumption in Britain occurs after <em>brewing</em> it, not <em>steeping</em> it."
	},
	{
		"Category": "food",
		"American": "jello",
		"AmericanForms": "jello",
		"British": "jelly",
		"Explanation": "The 60s-era sweet treat is <em>jelly</em>, not <em>Jell-O</em>."
	},
	{
		"Category": "food",
		"American": "jelly",
		"AmericanForms": "jelly, jellies",
		"British": "jam",
		"Explanation": "What you put on your toast is <em>jam</em>, not <em>jelly</em>."
	},
	{
		"Category": "food",
		"American": "broil",
		"AmericanForms": "broil, broils, broiled, broiling",
		"British": "grill",
		"Explanation": "When you cook something under a massive heat source, you are <em>grilling</em> it in the U.K., not <em>broiling</em> it."
	},
	{
		"Category": "appearance",
		"American": "bangs",
		"AmericanForms": "bangs",
		"British": "fringe",
		"Explanation": "The short hair that falls over your forehead is <em>fringe</em>, not <em>bangs</em>."
	},
	{
		"Category": "appearance",
		"American": "braids",
		"AmericanForms": "braid, braids, braiding, braided",
		"British": "plaits",
		"Explanation": "The method of winding together three strands of hair is <em>plaiting</em>, not <em>braiding</em>."
	},
	{
		"Category": "appearance",
		"American": "zipper",
		"AmericanForms": "zipper, zippers",
		"British": "zip",
		"Explanation": "Most jeans have a <em>zip</em>, not a <em>zipper</em>."
	},
	{
		"Category": "appearance",
		"American": "panty hose",
		"AmericanForms": "panty hose",
		"British": "tights",
		"Explanation": "<em>Tights</em> is the only word for the sheer leggings women wear."
	},
	{
		"Category": "appearance",
		"American": "panties",
		"AmericanForms": "panties",
		"British": "knickers",
		"Explanation": "If <em>Sixteen Candles</em> were a British movie, Samantha would have given The Geek her <em>knickers</em>, not her <em>panties</em>."
	},
	{
		"Category": "appearance",
		"American": "plaid",
		"AmericanForms": "plaid",
		"British": "check, checked, tartan",
		"Explanation": "The pattern known as <em>plaid</em> to Americans is <em>check(ed)</em> or <em>tartan</em> (if it&apos;s the Scottish kind) across the pond."
	},
	{
		"Category": "appearance",
		"American": "purse",
		"AmericanForms": "purse, purses",
		"British": "handbag",
		"Explanation": "Women carry <em>handbags</em>, not <em>purses</em>."
	},
	{
		"Category": "appearance",
		"American": "wallet",
		"AmericanForms": "wallet, wallets",
		"British": "purse",
		"Explanation": "Women keep money, credit cards, stamps etc. in a <em>purse</em> (U.S. <em>wallet</em>) which lives in their <em>handbag</em>."
	},
	{
		"Category": "appearance",
		"American": "vest",
		"AmericanForms": "vest, vests",
		"British": "waistcoat",
		"Explanation": "Part of a three-piece suit is a <em>waistcoat</em>, not a <em>vest</em>."
	},
	{
		"Category": "appearance",
		"American": "undershirt, wife-beater",
		"AmericanForms": "undershirt, wife-beater, undershirts, wife-beaters",
		"British": "vest",
		"Explanation": "English <em>vests</em> are what Americans call <em>undershirts</em> or <em>wife-beaters</em> – sleeveless tops to wear underneath a shirt in winter."
	},
	{
		"Category": "appearance",
		"American": "shorts, underwear",
		"AmericanForms": "shorts, underwear",
		"British": "boxers, Y-fronts, (under)pants",
		"Explanation": "<em>Underwear</em> is only a collective noun that refers to all underclothes generally, never referring to one pair."
	},
	{
		"Category": "appearance",
		"American": "pants",
		"AmericanForms": "pants",
		"British": "trousers",
		"Explanation": "Brits will think you are talking about something else if you use <em>pants</em> where you should use <em>trousers</em>!"
	},
	{
		"Category": "appearance",
		"American": "sneakers",
		"AmericanForms": "sneakers",
		"British": "trainers",
		"Explanation": "Casual sporty shoes are <em>trainers</em>, not <em>sneakers</em>."
	},
	{
		"Category": "appearance",
		"American": "suspenders",
		"AmericanForms": "suspenders",
		"British": "braces",
		"Explanation": "Men sometimes hold up their <em>trousers</em> with <em>braces</em>, not <em>suspenders</em>."
	},
	{
		"Category": "general",
		"American": "couple weeks",
		"AmericanForms": "couple weeks",
		"British": "couple of weeks",
		"Explanation": "Apparently it sounds strange to Brits without the <em>of</em>."
	},
	{
		"Category": "general",
		"American": "is all",
		"AmericanForms": "is all",
		"British": "just",
		"Explanation": "Instead of something like <em>I&apos;m tired is all</em>, use <em>I&apos;m just tired</em>."
	},
	{
		"Category": "general",
		"American": "off of",
		"AmericanForms": "off of",
		"British": "off, from",
		"Explanation": "For example, a smell doesn&apos;t emanate <em>off of</em> something stinky, it just emanates <em>from</em> it."
	},
	{
		"Category": "general",
		"American": "pissed",
		"AmericanForms": "pissed",
		"British": "drunk",
		"Explanation": "This is an important one! To get <em>pissed</em> is to get <em>drunk</em>, not <em>angry</em>. But <em>pissed off</em> still means <em>angry</em>."
	},
	{
		"Category": "general",
		"American": "guess",
		"AmericanForms": "guess, guesses, guessed, guessing",
		"British": "suppose, presume",
		"Explanation": "<em>Guess</em> is only really used for actual quantitative estimates."
	},
	{
		"Category": "general",
		"American": "dumb",
		"AmericanForms": "dumb, dumber",
		"British": "stupid",
		"Explanation": "<em>Dumb</em> has kept its original meaning of <em>mute</em>. Don&apos;t use it to mean <em>stupid</em>."
	},
	{
		"Category": "general",
		"American": "bathroom",
		"AmericanForms": "bathroom, washroom, restroom",
		"British": "toilet, loo",
		"Explanation": "Unless you are actually going for a bath, you do not go to the <em>bathroom</em>, but to the <em>toilet</em> or <em>loo</em>."
	},
	{
		"Category": "general",
		"American": "wait in line",
		"AmericanForms": "wait in line, waits in line, waited in line, waiting in line",
		"British": "queue",
		"Explanation": "The British <em>queue</em> instead of <em>waiting in line</em>."
	},
	{
		"Category": "education",
		"American": "public school",
		"AmericanForms": "public school, public schools",
		"British": "state school",
		"Explanation": "A <em>public school</em> in Britain is a very posh, fee-paying type of school. Schools the government runs are <em>state schools</em>."
	},
	{
		"Category": "education",
		"American": "grade",
		"AmericanForms": "grade",
		"British": "year",
		"Explanation": "A cohort of students is called a <em>year</em>, not a <em>grade</em>."
	},
	{
		"Category": "education",
		"American": "grades",
		"AmericanForms": "grades, graded, grading",
		"British": "mark",
		"Explanation": "School work is not <em>graded</em>, it&apos;s <em>marked</em>. And you might get good <em>marks</em> at the end of the <em>term</em>, not good <em>grades</em>."
	},
	{
		"Category": "education",
		"American": "graduate",
		"AmericanForms": "graduate, graduates, graduated, graduating",
		"British": "leave",
		"Explanation": "You don&apos;t <em>graduate</em> from high school, you just <em>leave</em>. (Sounds nice!) You do <em>graduate</em> from university/uni, however."
	},
	{
		"Category": "education",
		"American": "college",
		"AmericanForms": "college, colleges",
		"British": "university, uni",
		"Explanation": "OxBridge have colleges as part of their structure, but the general term for education beyond the secondary school level is <em>university</em> or <em>uni</em>, not <em>college</em>."
	},
	{
		"Category": "general",
		"American": "drugstore",
		"AmericanForms": "drugstore, drugstores",
		"British": "chemist, pharmacy",
		"Explanation": "The equivalent of a CVS or Walgreens across the pond is a <em>chemist</em> or just a <em>pharmacy</em>."
	},
	{
		"Category": "food",
		"American": "fix",
		"AmericanForms": "fix, fixes, fixed, fixing",
		"British": "cook",
		"Explanation": "Brits never <em>fix</em> their meals, they <em>cook</em> them."
	},
	{
		"Category": "food",
		"American": "teapot",
		"AmericanForms": "tea pot, teapot, tea pots, teapots",
		"British": "kettle",
		"Explanation": "You boil water for tea in a <em>kettle</em>, not a <em>teapot</em>."
	},
	{
		"Category": "general",
		"American": "pinkie",
		"AmericanForms": "pinkie",
		"British": "little finger",
		"Explanation": "Your smallest finger is not a <em>pinkie</em>, it&apos;s just your <em>little finger</em>."
	},
	{
		"Category": "general",
		"American": "mail",
		"AmericanForms": "mail, mails, mailed, mailing",
		"British": "post",
		"Explanation": "As both a verb and a noun, it&apos;s <em>post</em>, not <em>mail</em>."
	},
	{
		"Category": "general",
		"American": "block",
		"AmericanForms": "block, blocks",
		"British": "?",
		"Explanation": "The distance between two streets is not a <em>block</em>."
	},
	{
		"Category": "education",
		"American": "kindergarten",
		"AmericanForms": "kindergarten, kindergartens",
		"British": "nursery school, reception",
		"Explanation": "British children may attend <em>nursery school</em>, not <em>kindergarten</em>."
	},
	{
		"Category": "education",
		"American": "high school",
		"AmericanForms": "high school, high schools",
		"British": "secondary school",
		"Explanation": "British children go to <em>secondary school</em>, not <em>high school</em> (at least in the south of England)."
	},
	{
		"Category": "general",
		"American": "butt",
		"AmericanForms": "butt, butts",
		"British": "bum",
		"Explanation": "A more polite worse for your <em>arse</em> is your <em>bum</em>, not <em>butt</em>."
	},
	{
		"Category": "general",
		"American": "fall",
		"AmericanForms": "fall",
		"British": "autumn",
		"Explanation": "The season is <em>autumn</em>, not <em>fall</em>."
	},
	{
		"Category": "appearance",
		"American": "pumps",
		"AmericanForms": "pumps",
		"British": "high-heeled shoes, heels",
		"Explanation": "In England, <em>pumps</em> are flat shoes."
	},
	{
		"Category": "general",
		"American": "crush",
		"AmericanForms": "crush, crushes",
		"British": "fancy",
		"Explanation": "Brits don&apos;t generally have <em>crushes</em> on people they like; instead, they <em>fancy</em> them."
	},
	{
		"Category": "general",
		"American": "bullshit",
		"AmericanForms": "bullshit",
		"British": "bollocks",
		"Explanation": "To express that you think what someone just said is false, use <em>bollocks</em>, not <em>bullshit</em>."
	},
	{
		"Category": "food",
		"American": "soda",
		"AmericanForms": "soda, pop, Coke",
		"British": "fizzy drink",
		"Explanation": "Carbonated and sweetened beverages are <em>fizzy drinks</em>, not <em>soda</em> or <em>pop</em> or (generic) <em>Coke</em>."
	},
	{
		"Category": "general",
		"American": "plushie",
		"AmericanForms": "plushie",
		"British": "soft toy",
		"Explanation": "A child&apos;s teddy bear is a <em>soft toy</em>, not a <em>plushie</em>."
	},
	{
		"Category": "cars",
		"American": "parking lot",
		"AmericanForms": "parking lot, parking lots",
		"British": "carpark",
		"Explanation": "You park a car in a <em>carpark</em>, not a <em>parking lot</em>."
	},
	{
		"Category": "general",
		"American": "grocery store",
		"AmericanForms": "grocery store, grocery stores",
		"British": "supermarket",
		"Explanation": "You buy all your foodstuffs and household things at a <em>supermarket</em>, not a <em>grocery store</em>."
	},
	{
		"Category": "general",
		"American": "commercial",
		"AmericanForms": "commercial, commercials",
		"British": "ad, advert",
		"Explanation": "Your telly programs get interrupted by <em>ads</em>, not <em>commercials</em>."
	},
	{
		"Category": "sports",
		"American": "bleachers",
		"AmericanForms": "bleachers",
		"British": "stands, stalls",
		"Explanation": "Apparently you sit in <em>stands</em> or <em>stalls</em> at a sporting event in Britain, not <em>bleachers</em>? Might want to double-check this one."
	},
	{
		"Category": "food",
		"American": "cookie",
		"AmericanForms": "cookie, cookies",
		"British": "biscuit",
		"Explanation": "Sweet baked treats are <em>biscuits</em>, not <em>cookies</em>."
	},
	{
		"Category": "food",
		"American": "biscuit",
		"AmericanForms": "biscuit, biscuits",
		"British": "scone",
		"Explanation": "If you&apos;re using the word <em>biscuit</em>, make sure you&apos;re talking about something similar to an American <em>cookie</em>, not a bread-y baked thing like a <em>scone</em>."
	},
	{
		"Category": "general",
		"American": "band-aid",
		"AmericanForms": "bandaid, bandaids, band-aid, band-aids",
		"British": "plaster",
		"Explanation": "You put a <em>plaster</em> on a cut or other small injury, not a <em>band-aid</em>."
	}
];