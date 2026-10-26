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
                    'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=80',
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
                    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
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
                    'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600&auto=format&fit=crop&q=80',
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
                    fa: 'فلت وایت',
                    en: 'Flat White',
                },
                desc: {
                    fa: 'ریسترتو دوبل ترکیب‌شده با میکروفوم ابریشمی شیر',
                    en: 'Double ristretto with glossy microfoam milk',
                },
                price: 95000,
                imageUrl:
                    'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&auto=format&fit=crop&q=80',
                popular: true,
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
                popular: true,
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
                popular: true,
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
                popular: true,
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
                    'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=80',
                popular: true,
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
                    'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80',
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
                    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80',
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
                    'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&auto=format&fit=crop&q=80',
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
                    '/img/icelatte.jpg',
                popular: true,
            },
        ],
    },
];
