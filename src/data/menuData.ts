export interface SubItem {
    id: string;
    title?: {
        fa: string;
        en: string;
    };
    desc?: {
        fa: string;
        en: string;
    };
    price: number;
    imageUrl: string;
    popular?: boolean;
}

export interface MainLine {
    id: string;
    title: {
        fa: string;
        en: string;
    };
    subtitle: {
        fa: string;
        en: string;
    };
    icon: string;
    bgTag: string;
    items: SubItem[];
}

export const MAIN_LINES: MainLine[] = [
    {
        id: 'breakfast',
        title: { fa: 'لاین صبحانه', en: 'Breakfast Line' },
        subtitle: {
            fa: 'شروع پرانرژی روز با مواد تازه',
            en: 'Energetic start with fresh goods',
        },
        icon: 'Croissant',
        bgTag: '08:00 - 12:00',
        items: [
            {
                id: 'b1',
                title: {
                    fa: 'صبحانه انگلیسی کلاسیک',
                    en: 'English Breakfast',
                },
                desc: {
                    fa: 'بیکن دودی، تخم‌مرغ نیمرو، لوبیا، قارچ گریل و نان تست',
                    en: 'Smoked bacon, eggs, beans, mushrooms & toast',
                },
                price: 565000,
                imageUrl:
                    '/img/breakfast.jpg',
                popular: true,
            },
            {
                id: 'b2',
                title: {
                    fa: 'املت اسفناج و پنیر فتا',
                    en: 'Spinach & Feta Omelette',
                },
                desc: {
                    fa: 'اسفناج تازه تفت داده شده، پنیر فتا و نان چاباتا',
                    en: 'Fresh spinach, sautéed eggs, creamy feta & ciabatta',
                },
                price: 140000,
                imageUrl:
                    '/img/breakfast03.jpg',
            },
        ],
    },
    {
        id: 'lunch',
        title: { fa: 'لاین ناهار', en: 'Lunch Line' },
        subtitle: {
            fa: 'غذاهای گرم، برگرها و پاستاهای لذیذ',
            en: 'Warm meals, artisan burgers & pasta',
        },
        icon: 'UtensilsCrossed',
        bgTag: '12:00 - 17:00',
        items: [
            {
                id: 'l1',
                title: {
                    fa: 'برگر دست‌ساز کافه',
                    en: 'Signature House Burger',
                },
                desc: {
                    fa: 'گوشت خالص ۱۵۰ گرمی، پنیر چدار آب‌شده، سس ترامنتانا و پیاز کاراملی',
                    en: '150g beef patty, melted cheddar, house sauce & caramelized onions',
                },
                price: 240000,
                imageUrl:
                    '/img/lunch01.jpg',
                popular: true,
            },
            {
                id: 'l2',
                title: {
                    fa: 'پاستا آلفردو با فیله مرغ',
                    en: 'Chicken Fettuccine Alfredo',
                },
                desc: {
                    fa: 'پاستا فتوچینی، سس خامه و پارمزان خانگی با قارچ تفت‌خورده',
                    en: 'Fettuccine, rich garlic parmesan cream & grilled chicken',
                },
                price: 210000,
                imageUrl:
                    '/img/lunch02.jpg',
            },
        ],
    },
    {
        id: 'dinner',
        title: { fa: 'لاین شام', en: 'Dinner Line' },
        subtitle: {
            fa: 'بشقاب‌های سبک و خوش‌عطر شبانه',
            en: 'Light savory plates & wraps',
        },
        icon: 'Moon',
        bgTag: '18:00 - 23:30',
        items: [
            {
                id: 'd1',
                title: {
                    fa: 'بشقاب استیک ',
                    en: 'Grilled Chicken Steak Plate',
                },
                desc: {
                    fa: 'فیله مزه‌دار شده با رزماری، پوره سیب‌زمینی نرم و سبزیجات بخارپز',
                    en: 'Rosemary chicken breast, velvety mashed potatoes & steamed greens',
                },
                price: 260000,
                imageUrl:
                    '/img/dinner01.jpg',
                popular: true,
            },
            {
                id: 'd2',
                title: {
                    fa: 'اسنک',
                    en: 'Snack',
                },
                desc: {
                    fa: 'اسنک مرغ ',
                    en: 'chicken snack',
                },
                price: 226000,
                imageUrl:
                    '/img/dinner02.jpg',
                popular: false,
            },
            {
                id: 'd3',
                title: {
                    fa: 'بال مرغ بوفالو',
                    en: 'Buffalo Chicken Wings',
                },
                desc: {
                    fa: 'بال مرغ بوفالو اسپایسی',
                    en: 'Buffalo Chicken Wings',
                },
                price: 260000,
                imageUrl:
                    '/img/dinner03.jpg',
                popular: false,
            },

        ],
    },
    {
        id: 'cafe',
        title: { fa: 'لاین نوشیدنی های گرم', en: 'Hot drinks' },
        subtitle: {
            fa: 'دانه‌های تازه برشته‌شده با طعم‌یادهای غنی',
            en: 'Fresh roasted specialty beans',
        },
        icon: 'Coffee',
        bgTag: 'All Day',
        items: [
            {
                id: 'c1',
                title: {
                    fa: 'اسپرسو دوبل',
                    en: 'Double Espresso',
                },
                desc: {
                    fa: '۱۰۰٪ عربیکا تخصصی، اسیدیته ملایم با عطر مرکباتی',
                    en: '100% Specialty Arabica with balanced acidity',
                },
                price: 70000,
                imageUrl:
                    '/img/espresso.jpg',
            },
            {
                id: 'c2',
                title: {
                    fa: 'کاپوچینو',
                    en: 'cappuccino',
                },
                desc: {
                    fa: 'ریسترتو دوبل ترکیب‌شده با میکروفوم ابریشمی شیر',
                    en: 'Double ristretto with glossy microfoam milk',
                },
                price: 95000,
                imageUrl:
                    '/img/cappuccino.jpg',
                popular: false,
            },
            {
                id: 'c3',
                title: {
                    fa: ' چای لاهیجان',
                    en: 'Tea',
                },
                desc: {
                    fa: 'چای اصیل لاهیجان با عطر و طعم به یادماندنی',
                    en: 'Genuine Tea',
                },
                price: 65000,
                imageUrl:
                    '/img/tea.jpg',
                popular: false,
            },
            {
                id: 'c4',
                title: {
                    fa: 'ماسالا ',
                    en: 'Masala chai ',
                },
                desc: {
                    fa: 'چای سیاه,شیر,هل,دارچین,زنجبیل',
                    en: 'Black tea,milk,cardamon,cinnamon,ginger',
                },
                price: 195000,
                imageUrl:
                    '/img/masalachai.jpg',
                popular: false,
            },
            {
                id: 'c5',
                title: {
                    fa: 'هات چاکلت',
                    en: 'Hot chocolate',
                },
                desc: {
                    fa: 'شیر و شکلات',
                    en: 'Milk and chocolate',
                },
                price: 195000,
                imageUrl:
                    '/img/hotchocolate.jpg',
                popular: false,
            },

        ],
    },
    {
        id: 'dessert',
        title: { fa: 'لاین دسر و کیک', en: 'Dessert & Bakery' },
        subtitle: {
            fa: 'شیرینی‌های تازه‌پخت هر روز صبح',
            en: 'Daily baked fresh pastries & cakes',
        },
        icon: 'CakeSlice',
        bgTag: 'Fresh Daily',
        items: [
            {
                id: 'de1',
                title: {
                    fa: 'چیزکیک سن سباستین',
                    en: 'San Sebastian Cheesecake',
                },
                desc: {
                    fa: 'بافت کرمی مذاب با لایه کاراملی برشته همراه با شکلات بلژیکی داغ',
                    en: 'Burnt basque style with rich warm melted chocolate',
                },
                price: 135000,
                imageUrl:
                    '/img/dessert01.jpg',
                popular: false,
            },
            {
                id: 'de2',
                title: {
                    fa: 'کروسان شکلات فندقی',
                    en: 'Nutella Hazelnut Croissant',
                },
                desc: {
                    fa: 'لایه‌های کره‌ای ترد پرشده با کرم شکلات فندق',
                    en: 'Flaky buttery layers filled with hazelnut cocoa cream',
                },
                price: 90000,
                imageUrl:
                    '/img/dessert02.jpg',
            },
            {
                id: 'de3',
                title: {
                    fa: 'کروسان پسته',
                    en: 'pistachio croissant',
                },
                desc: {
                    fa: 'کروسان با روکش پسته',
                    en: 'Pistachio croissant',
                },
                price: 135000,
                imageUrl:
                    '/img/breakfast01.jpg',
                popular: false,
            },
            {
                id: 'de4',
                title: {
                    fa: 'رول دارچینی',
                    en: 'Cinnamon roll',
                },
                desc: {
                    fa: 'رول دارچینی پخت تازه',
                    en: 'Cinnamon roll',
                },
                price: 135000,
                imageUrl:
                    '/img/breakfast02.jpg',
                popular: false,
            },
        ],
    },
    {
        id: 'drinks',
        title: {
            fa: 'لاین نوشیدنی‌های خنک',
            en: 'Cooling Drinks & Mocktails',
        },
        subtitle: {
            fa: 'ماکتیل‌های بار سرد و اسموتی‌های طبیعی',
            en: 'Cold brew, craft sodas & fresh smoothies',
        },
        icon: 'Wine',
        bgTag: 'Cold Bar',
        items: [
            {
                id: 'dr1',
                title: {
                    fa: 'ماکتیل پینک بری فیلیپ',
                    en: 'Pink Berry Flip',
                },
                desc: {
                    fa: 'پوره تمشک وحشی، لیمو شیرازی، سودا و عصاره آلوئه‌ورا',
                    en: 'Wild berries, fresh lime juice, sparkling soda & hints of mint',
                },
                price: 110000,
                imageUrl:
                    '/img/drink01.jpg',
                popular: true,
            },
            {
                id: 'dr2',
                title: {
                    fa: 'آیس لاته کاراملی نمکی',
                    en: 'Iced Salted Caramel',
                },
                desc: {
                    fa: 'اسپرسو، شیر سرد، یخ و سیروپ نمکی دست‌ساز',
                    en: 'Espresso poured over chilled milk and artisan sea salt caramel',
                },
                price: 105000,
                imageUrl:
                    '/img/drink02.jpg',
            },
            {
                id: 'dr3',
                title: {
                    fa: 'آیس لاته',
                    en: 'Ice latte',
                },
                desc: {
                    fa: 'قهوه,شیر,یخ و به همراه سیروپ دلخواه',
                    en: 'Coffee,Milk,Ice and with syrup of your choice',
                },
                price: 210000,
                imageUrl:
                    '/img/drink03.jpg',
                popular: false,
            },
        ],
    },
];
