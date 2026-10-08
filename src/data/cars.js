export const dealership = {
  bodyTypes: [
    {
      id: 'hatchback',
      name: 'Hatchback',
      icon: 'mdi-car-hatchback',
      brands: [
        {
          id: 'chevrolet', name: 'Chevrolet',
          models: [
            {
              id: 1, name: 'Spark', year: 2025, price: 9900, status: 'available',
              specs: { engine: '1.25', power: 85, fuel: 'Petrol', drive: 'FWD', seats: 4 },
              configuration: { trims: ['LS', 'LT'], transmissions: ['Manual', 'Automatic'], colors: ['white', 'red', 'blue'] },
              photos: [
                'https://yuz.uz/imageproxy/980x/https://yuz.uz/file/news/d558ef6ceb673e1298be68915c233da9.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'kia', name: 'Kia',
          models: [
            {
              id: 2, name: 'Picanto', year: 2025, price: 11500, status: 'available',
              specs: { engine: '1.2', power: 84, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['LX', 'EX'], transmissions: ['Manual', 'Automatic'], colors: ['yellow', 'white', 'red'] },
              photos: [
                'https://top-tuning.ru/w1600/upload/images/news/111736/kia_picanto_2.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'hyundai', name: 'Hyundai',
          models: [
            {
              id: 3, name: 'i20', year: 2025, price: 14800, status: 'available',
              specs: { engine: '1.4', power: 100, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['SE', 'SEL'], transmissions: ['Manual', 'Automatic'], colors: ['white', 'blue'] },
              photos: [
                'https://res.cloudinary.com/total-dealer/image/upload/w_1920,f_auto,q_75/v1/production/byhdg2teo4wptckgeck79evoe348',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'byd', name: 'BYD',
          models: [
            {
              id: 4, name: 'Seagull', year: 2025, price: 11000, status: 'available',
              specs: { engine: 'Electric 38.9 kWh', power: 75, fuel: 'Electricity', drive: 'FWD', seats: 4 },
              configuration: { trims: ['Freedom', 'Flying'], transmissions: ['Reducer'], colors: ['white', 'green', 'pink'] },
              photos: [
                'https://www.spot.uz/media/img/2024/09/ZMHL1x17257990121809_l.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 5, name: 'Dolphin', year: 2025, price: 19500, status: 'sold',
              specs: { engine: 'Electric 60.4 kWh', power: 204, fuel: 'Electricity', drive: 'FWD', seats: 5 },
              configuration: { trims: ['Active', 'Design'], transmissions: ['Reducer'], colors: ['blue', 'white'] },
              photos: [
                'https://mediacloud.carbuyer.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1725460884/autoexpress/2024/09/BYD%20Dolphin%20Active%202024-10.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'mercedes-benz', name: 'Mercedes-Benz',
          models: [
            {
              id: 6, name: 'A-Class', year: 2025, price: 36000, status: 'available',
              specs: { engine: '1.3T', power: 163, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['Progressive', 'AMG Line'], transmissions: ['Robot'], colors: ['white', 'gray'] },
              photos: [
                'https://s.auto.drom.ru/i24195/c/photos/fullsize/mercedes-benz/a-class/mercedes-benz_a-class_444644.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'nissan', name: 'Nissan',
          models: [
            {
              id: 7, name: 'Micra', year: 2024, price: 15500, status: 'available',
              specs: { engine: '1.0T', power: 92, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['Visia', 'Acenta'], transmissions: ['Manual', 'Variator'], colors: ['red', 'white'] },
              photos: [
                'https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto:eco,w_1044/v1/Autodatenbank/Fahrzeugbilder/im08324-1-nissan-micra.jpeg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'volkswagen', name: 'Volkswagen',
          models: [
            {
              id: 8, name: 'Polo', year: 2025, price: 17500, status: 'available',
              specs: { engine: '1.0 TSI', power: 95, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['Life', 'Style'], transmissions: ['Manual', 'Robot'], colors: ['white', 'blue', 'gray'] },
              photos: [
                'https://testdrive.com.ua/wp-content/uploads/2017/06/Volkswagen-Polo-2018-1600-01.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'audi', name: 'Audi',
          models: [
            {
              id: 59, name: 'A1 Sportback', year: 2025, price: 29500, status: 'available',
              specs: { engine: '1.5 TFSI', power: 150, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['Advanced', 'S line'], transmissions: ['Robot'], colors: ['white', 'blue', 'gray'] },
              photos: [
                'https://static.ffx.io/images/$zoom_1%2C$multiply_1%2C$ratio_1.777778%2C$width_1396%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_1200%2Cq_88%2Cf_auto/f97c402ab3086ba18c430a0e5874294f6aa3476a',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 60, name: 'S1 Sportback', year: 2025, price: 42000, status: 'available',
              specs: { engine: '2.0 TFSI', power: 231, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['S1'], transmissions: ['Manual'], colors: ['red', 'white', 'black'] },
              photos: [
                'https://static.motor.es/fotos-noticias/2018/11/min652x435/nuevo-audi-s1-descartado-201852167_1.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 61, name: 'RS 3 Sportback', year: 2025, price: 69000, status: 'sold',
              specs: { engine: '2.5 TFSI', power: 400, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['RS Dynamic', 'Carbon'], transmissions: ['Robot'], colors: ['green', 'gray', 'black'] },
              photos: [
                'https://images.pistonheads.com/nimg/44847/1.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
      ],
    },
    {
      id: 'sedan',
      name: 'Sedan',
      icon: 'mdi-car-side',
      brands: [
        {
          id: 'chevrolet', name: 'Chevrolet',
          models: [
            {
              id: 9, name: 'Onix', year: 2025, price: 14500, status: 'available',
              specs: { engine: '1.2T', power: 116, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['LS', 'LT', 'Premier'], transmissions: ['Manual', 'Automatic'], colors: ['white', 'gray', 'blue'] },
              photos: [
                'https://podrobno.uz/upload/iblock/036/qa239zdgimj247so7vg5ut17h11mtb3c/268144f4a64671aab014e.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 10, name: 'Malibu', year: 2025, price: 27500, status: 'sold',
              specs: { engine: '1.5T', power: 163, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['LT', 'Premier'], transmissions: ['Variator'], colors: ['black', 'white', 'red'] },
              photos: [
                'https://frankfurt.apollo.olxcdn.com/v1/files/29ocdckren743-UZ/image;s=1400x788',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'kia', name: 'Kia',
          models: [
            {
              id: 11, name: 'K5', year: 2026, price: 29500, status: 'available',
              specs: { engine: '2.0', power: 150, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['LX', 'EX', 'GT-Line'], transmissions: ['Automatic'], colors: ['black', 'white', 'gray'] },
              photos: [
                'https://www.allcarz.ru/wp-content/uploads/2020/07/foto-kt-gt-us_02.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'hyundai', name: 'Hyundai',
          models: [
            {
              id: 12, name: 'Elantra', year: 2026, price: 22500, status: 'sold',
              specs: { engine: '2.0', power: 150, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['SE', 'SEL', 'N Line'], transmissions: ['Variator'], colors: ['gray', 'white', 'red'] },
              photos: [
                'https://s7d1.scene7.com/is/image/hyundai/2025-elantra-n-line-0246-vlp:4-3?wid=800&hei=600&qlt=85,0&fmt=webp',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 13, name: 'Sonata', year: 2026, price: 31500, status: 'available',
              specs: { engine: '2.5', power: 191, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['SEL', 'Limited'], transmissions: ['Automatic'], colors: ['black', 'white'] },
              photos: [
                'https://www.edmunds.com/assets/m/cs/blt04a1c0e0ad5328fb/6699a39a77d069714b6a7f8b/2024-hyundai-sonata-hybrid-f34.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'toyota', name: 'Toyota',
          models: [
            {
              id: 14, name: 'Corolla', year: 2026, price: 23500, status: 'available',
              specs: { engine: '1.8 Hybrid', power: 140, fuel: 'Hybrid', drive: 'FWD', seats: 5 },
              configuration: { trims: ['LE', 'XLE'], transmissions: ['Variator'], colors: ['white', 'silver', 'blue'] },
              photos: [
                'https://carmarket.by/wp-content/uploads/2023/11/obzor-toyota-corolla-hybrid-awd-coty-2023-goda-dostojnaja-alternativa-prius-08a7487.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 15, name: 'Camry', year: 2026, price: 33000, status: 'sold',
              specs: { engine: '2.5 Hybrid', power: 225, fuel: 'Hybrid', drive: 'FWD', seats: 5 },
              configuration: { trims: ['LE', 'XSE', 'Limited'], transmissions: ['Variator'], colors: ['black', 'white', 'gray'] },
              photos: [
                'https://uytmxqkbzorxznluvhpe.supabase.co/storage/v1/object/public/media-assets/tustin-toyota/2026-04/raw_toyota-39.webp',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'byd', name: 'BYD',
          models: [
            {
              id: 16, name: 'Seal', year: 2025, price: 37000, status: 'available',
              specs: { engine: 'Electric 82.5 kWh', power: 313, fuel: 'Electricity', drive: 'RWD', seats: 5 },
              configuration: { trims: ['Design', 'Excellence AWD'], transmissions: ['Reducer'], colors: ['blue', 'black', 'white'] },
              photos: [
                'https://aurum-motors.ru/wp-content/uploads/elementor/thumbs/BYD-Seal-EV-qyzf9mr8chv9cvufbfch560lmb2ncb7f47ru97eglc.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'mercedes-benz', name: 'Mercedes-Benz',
          models: [
            {
              id: 17, name: 'C-Class', year: 2025, price: 49000, status: 'sold',
              specs: { engine: '2.0T', power: 204, fuel: 'Petrol', drive: 'RWD', seats: 5 },
              configuration: { trims: ['Avantgarde', 'AMG Line'], transmissions: ['Automatic'], colors: ['black', 'silver', 'blue'] },
              photos: [
                'https://parkers-images.bauersecure.com/wp-images/22257/cut-out/1200x800/mercedes-c-class.jpg?mode=max&quality=90&scale=down',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 18, name: 'E-Class', year: 2025, price: 63000, status: 'available',
              specs: { engine: '2.0T', power: 258, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['Avantgarde', 'Exclusive'], transmissions: ['Automatic'], colors: ['black', 'white'] },
              photos: [
                'https://autodesignmagazine.com/wp-content/uploads/2023/04/23C0129_003.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'bmw', name: 'BMW',
          models: [
            {
              id: 19, name: '3 Series', year: 2025, price: 47000, status: 'available',
              specs: { engine: '2.0T', power: 255, fuel: 'Petrol', drive: 'RWD', seats: 5 },
              configuration: { trims: ['Sport', 'M Sport'], transmissions: ['Automatic'], colors: ['white', 'blue', 'black'] },
              photos: [
                'https://hips.hearstapps.com/hmg-prod/images/2025-bmw-3-series-102-66562dcd6a1c6.jpg?crop=0.720xw:0.606xh;0.0913xw,0.300xh&resize=1200:*',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 20, name: '5 Series', year: 2025, price: 61000, status: 'sold',
              specs: { engine: '2.0T', power: 255, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['Business', 'M Sport'], transmissions: ['Automatic'], colors: ['black', 'gray'] },
              photos: [
                'https://media.ed.edmunds-media.com/bmw/5-series/2027/oem/2027_bmw_5-series_sedan_530i_fq_oem_1_1280.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'lexus', name: 'Lexus',
          models: [
            {
              id: 21, name: 'ES', year: 2025, price: 46000, status: 'available',
              specs: { engine: '2.5 Hybrid', power: 215, fuel: 'Hybrid', drive: 'FWD', seats: 5 },
              configuration: { trims: ['Luxury', 'F Sport'], transmissions: ['Variator'], colors: ['white', 'black', 'silver'] },
              photos: [
                'https://kz.bex-auto.com/storage/news/inline/cf83cc72b1901006a7efc2477bde63de.png',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'nissan', name: 'Nissan',
          models: [
            {
              id: 22, name: 'Altima', year: 2025, price: 27000, status: 'available',
              specs: { engine: '2.5', power: 188, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['S', 'SV', 'SR'], transmissions: ['Variator'], colors: ['gray', 'white', 'blue'] },
              photos: [
                'https://hips.hearstapps.com/mtg-prod/66c60c8faa07ae000869f9b2/2025nissanaltimasvspecialedition10.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'volkswagen', name: 'Volkswagen',
          models: [
            {
              id: 23, name: 'Jetta', year: 2025, price: 22500, status: 'sold',
              specs: { engine: '1.5 TSI', power: 158, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['S', 'SE', 'Sport'], transmissions: ['Manual', 'Automatic'], colors: ['white', 'gray'] },
              photos: [
                'https://media.ed.edmunds-media.com/volkswagen/jetta/2027/oem/2027_volkswagen_jetta_sedan_sel_fq_oem_1_1600.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 24, name: 'Passat', year: 2025, price: 34000, status: 'available',
              specs: { engine: '2.0 TSI', power: 204, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['Business', 'Elegance'], transmissions: ['Robot'], colors: ['black', 'silver'] },
              photos: [
                'https://motor.ru/thumb/1280x720/smart/filters:quality(75)/imgs/2024/03/23/19/6407381/72c981a62de5c496278aef6f1984510575856ce9.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'audi', name: 'Audi',
          models: [
            {
              id: 62, name: 'A3 Sedan', year: 2025, price: 38500, status: 'available',
              specs: { engine: '1.5 TFSI', power: 150, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['Advanced', 'S line'], transmissions: ['Robot'], colors: ['white', 'blue', 'black'] },
              photos: [
                'https://kolesa-uploads.ru/r/880x/1433e0c5-6801-473c-ad79-2f5966827e00/audi-a3-front2.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 63, name: 'A4', year: 2025, price: 52000, status: 'available',
              specs: { engine: '2.0 TFSI', power: 204, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['Business', 'S line'], transmissions: ['Robot'], colors: ['gray', 'white', 'black'] },
              photos: [
                'https://hips.hearstapps.com/hmg-prod/images/2021-audi-a4-45-tfsi-quattro-104-1607927016.jpg?crop=0.516xw:0.387xh;0.204xw,0.377xh&resize=1200:*',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 64, name: 'A6', year: 2025, price: 68000, status: 'sold',
              specs: { engine: '2.0 TFSI', power: 265, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['Business', 'Sport'], transmissions: ['Robot'], colors: ['black', 'silver', 'blue'] },
              photos: [
                'https://kolesa-photos.kcdn.online/kolesa-read/598d6a37ca0b82ba948a97df03b5659c80d60aaf-full.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 65, name: 'S8', year: 2025, price: 135000, status: 'available',
              specs: { engine: '4.0 TFSI V8', power: 571, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['S8'], transmissions: ['Automatic'], colors: ['black', 'gray'] },
              photos: [
                'https://autoreview.ru/images/Article/1682/Article_168208_860_575.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
      ],
    },
    {
      id: 'crossover',
      name: 'Crossover',
      icon: 'mdi-car-estate',
      brands: [
        {
          id: 'chevrolet', name: 'Chevrolet',
          models: [
            {
              id: 25, name: 'Tracker', year: 2026, price: 21500, status: 'available',
              specs: { engine: '1.2T', power: 132, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['LS', 'LT', 'Premier'], transmissions: ['Automatic'], colors: ['white', 'blue', 'silver'] },
              photos: [
                'https://www.spot.uz/media/img/2020/12/YHm0NJ16081090028564_l.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'kia', name: 'Kia',
          models: [
            {
              id: 26, name: 'Sportage', year: 2026, price: 30500, status: 'sold',
              specs: { engine: '1.6T Hybrid', power: 230, fuel: 'Hybrid', drive: 'AWD', seats: 5 },
              configuration: { trims: ['EX', 'SX'], transmissions: ['Automatic'], colors: ['green', 'white', 'gray'] },
              photos: [
                'https://media.ed.edmunds-media.com/kia/sportage/2027/oem/2027_kia_sportage_4dr-suv_x-pro-prestige_fq_oem_1_1280.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'hyundai', name: 'Hyundai',
          models: [
            {
              id: 27, name: 'Tucson', year: 2026, price: 31000, status: 'available',
              specs: { engine: '1.6T Hybrid', power: 230, fuel: 'Hybrid', drive: 'AWD', seats: 5 },
              configuration: { trims: ['SEL', 'Limited'], transmissions: ['Automatic'], colors: ['green', 'gray', 'white'] },
              photos: [
                'https://i.ytimg.com/vi/o9MSuxoyNXU/maxresdefault.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'toyota', name: 'Toyota',
          models: [
            {
              id: 28, name: 'RAV4', year: 2026, price: 34500, status: 'available',
              specs: { engine: '2.5 Hybrid', power: 222, fuel: 'Hybrid', drive: 'AWD', seats: 5 },
              configuration: { trims: ['LE', 'XLE', 'Adventure'], transmissions: ['Variator'], colors: ['green', 'white', 'gray'] },
              photos: [
                'https://www.edmunds.com/assets/m/cs/cms/ffea625e-62d1-4b48-8cb3-72d20925d650/2026-toyota-rav4-gr-01-f34.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'byd', name: 'BYD',
          models: [
            {
              id: 29, name: 'Song Plus', year: 2025, price: 27500, status: 'available',
              specs: { engine: '1.5 DM-i Hybrid', power: 218, fuel: 'Hybrid', drive: 'FWD', seats: 5 },
              configuration: { trims: ['Comfort', 'Flagship'], transmissions: ['Reducer'], colors: ['gray', 'white'] },
              photos: [
                'https://www.afisha.uz/uploads/media/2024/07/9255c26fb86514ddc5f7486846ed2ccf_lf.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'mercedes-benz', name: 'Mercedes-Benz',
          models: [
            {
              id: 30, name: 'GLC', year: 2026, price: 55000, status: 'available',
              specs: { engine: '2.0T', power: 258, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['Avantgarde', 'AMG Line'], transmissions: ['Automatic'], colors: ['white', 'gray', 'black'] },
              photos: [
                'https://www.edmunds.com/assets/m/cs/bltc9c240363870ced7/674f4dadb5ed6214cc41e39a/2025-mercedes-glc-350e-f34.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'bmw', name: 'BMW',
          models: [
            {
              id: 31, name: 'X3', year: 2026, price: 52000, status: 'available',
              specs: { engine: '2.0T', power: 255, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['xLine', 'M Sport'], transmissions: ['Automatic'], colors: ['white', 'gray', 'blue'] },
              photos: [
                'https://www.allcarz.ru/wp-content/uploads/2024/06/foto-x3-g45_01.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'lexus', name: 'Lexus',
          models: [
            {
              id: 32, name: 'NX', year: 2026, price: 47000, status: 'sold',
              specs: { engine: '2.5 Hybrid', power: 243, fuel: 'Hybrid', drive: 'AWD', seats: 5 },
              configuration: { trims: ['Premium', 'F Sport'], transmissions: ['Variator'], colors: ['white', 'gray'] },
              photos: [
                'https://www.usnews.com/object/image/0000019f-430a-d96a-a9bf-678adfd60000/usn-2026-lexus-nx-350-front-quarter.JPG?update-time=1783536213210&size=responsiveGallery&format=webp',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 33, name: 'RX', year: 2026, price: 58000, status: 'available',
              specs: { engine: '2.4T', power: 275, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['Premium', 'Luxury', 'F Sport'], transmissions: ['Automatic'], colors: ['black', 'white', 'blue'] },
              photos: [
                'https://www.edmunds.com/assets/m/cs/cms/696e8473-d026-45e5-b352-fd24bc249bc4/2025-lexus-rx-500h.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'nissan', name: 'Nissan',
          models: [
            {
              id: 34, name: 'Qashqai', year: 2025, price: 29000, status: 'sold',
              specs: { engine: '1.3T Mild Hybrid', power: 158, fuel: 'Petrol', drive: 'FWD', seats: 5 },
              configuration: { trims: ['Acenta', 'Tekna'], transmissions: ['Variator'], colors: ['white', 'red', 'gray'] },
              photos: [
                'https://clickoncar.ru/wp-content/uploads/2026/05/nissan-qashqai_msg726-01-1024x768.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'volkswagen', name: 'Volkswagen',
          models: [
            {
              id: 35, name: 'Tiguan', year: 2026, price: 33500, status: 'available',
              specs: { engine: '2.0 TSI', power: 204, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['Life', 'R-Line'], transmissions: ['Robot'], colors: ['white', 'blue', 'gray'] },
              photos: [
                'https://mrdriver.ua/wp-content/uploads/2026/04/2025-volkswagen-tiguan.webp',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'audi', name: 'Audi',
          models: [
            {
              id: 66, name: 'Q3', year: 2026, price: 46500, status: 'available',
              specs: { engine: '2.0 TFSI', power: 190, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['Advanced', 'S line'], transmissions: ['Robot'], colors: ['white', 'orange', 'gray'] },
              photos: [
                'https://autopresse.at/wp-content/uploads/2025/06/16_AudiQ3_SUV.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 67, name: 'Q4 e-tron', year: 2026, price: 57000, status: 'available',
              specs: { engine: 'Electric 82 kWh', power: 286, fuel: 'Electricity', drive: 'RWD', seats: 5 },
              configuration: { trims: ['40', '50 quattro'], transmissions: ['Reducer'], colors: ['blue', 'white', 'gray'] },
              photos: [
                'https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/01-audi-q4-e-tron-review-front-driving.jpg?itok=tRLjphqD',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 68, name: 'Q5', year: 2026, price: 62500, status: 'sold',
              specs: { engine: '2.0 TFSI', power: 265, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['Advanced', 'S line'], transmissions: ['Robot'], colors: ['black', 'white', 'green'] },
              photos: [
                'https://media.ed.edmunds-media.com/audi/q5-sportback/2026/oem/2026_audi_q5-sportback_4dr-suv_prestige_fq_oem_1_1600.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 69, name: 'SQ5', year: 2026, price: 82000, status: 'available',
              specs: { engine: '3.0 TFSI V6', power: 367, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['SQ5'], transmissions: ['Automatic'], colors: ['blue', 'gray', 'black'] },
              photos: [
                'https://editorial.pxcrush.net/carsales/general/editorial/audi-sq5-hybrid-2025-review-10.jpg?width=1024&height=682',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
      ],
    },
    {
      id: 'suv',
      name: 'SUV',
      icon: 'mdi-jeepney',
      brands: [
        {
          id: 'chevrolet', name: 'Chevrolet',
          models: [
            {
              id: 36, name: 'Tahoe', year: 2025, price: 68000, status: 'available',
              specs: { engine: '5.3 V8', power: 355, fuel: 'Petrol', drive: 'AWD', seats: 8 },
              configuration: { trims: ['LT', 'Z71', 'High Country'], transmissions: ['Automatic'], colors: ['black', 'white'] },
              photos: [
                'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/2022_Chevrolet_Tahoe_RST%2C_front_3.7.22.jpg/1280px-2022_Chevrolet_Tahoe_RST%2C_front_3.7.22.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'kia', name: 'Kia',
          models: [
            {
              id: 37, name: 'Sorento', year: 2025, price: 38500, status: 'available',
              specs: { engine: '2.2 CRDi', power: 199, fuel: 'Diesel', drive: 'AWD', seats: 7 },
              configuration: { trims: ['EX', 'SX', 'X-Line'], transmissions: ['Robot'], colors: ['black', 'blue'] },
              photos: [
                'https://automoto.com.lv/uploads/ckeditor_gallery/2025_kia_sorento_5-1757664015.jpeg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'hyundai', name: 'Hyundai',
          models: [
            {
              id: 38, name: 'Santa Fe', year: 2026, price: 41500, status: 'sold',
              specs: { engine: '2.5T', power: 281, fuel: 'Petrol', drive: 'AWD', seats: 7 },
              configuration: { trims: ['SEL', 'Calligraphy'], transmissions: ['Robot'], colors: ['black', 'white'] },
              photos: [
                'https://www.topgear.com/sites/default/files/cars-car/image/2024/12/4%20Hyundai%20Santa%20Fe%20review%202024%20UK.jpg?w=1280&h=720',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'toyota', name: 'Toyota',
          models: [
            {
              id: 39, name: 'Land Cruiser 300', year: 2025, price: 92000, status: 'available',
              specs: { engine: '3.5 V6 Twin Turbo', power: 415, fuel: 'Petrol', drive: 'AWD', seats: 7 },
              configuration: { trims: ['GX-R', 'VX', 'GR Sport'], transmissions: ['Automatic'], colors: ['white', 'black'] },
              photos: [
                'https://images.firstpost.com/wp-content/uploads/2021/06/2022_toyota_land_cruiser_revealed_1.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'byd', name: 'BYD',
          models: [
            {
              id: 40, name: 'Tang', year: 2025, price: 45000, status: 'sold',
              specs: { engine: 'Electric 108.8 kWh', power: 517, fuel: 'Electricity', drive: 'AWD', seats: 7 },
              configuration: { trims: ['Comfort', 'Flagship'], transmissions: ['Reducer'], colors: ['black', 'white'] },
              photos: [
                'https://ecofactortech.com/wp-content/uploads/2025/09/byd-tang-l-1024x768.webp',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'mercedes-benz', name: 'Mercedes-Benz',
          models: [
            {
              id: 41, name: 'G-Class', year: 2025, price: 145000, status: 'sold',
              specs: { engine: '4.0 V8 Biturbo', power: 585, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['G 500', 'AMG G 63'], transmissions: ['Automatic'], colors: ['black', 'green'] },
              photos: [
                'https://hips.hearstapps.com/hmg-prod/images/2025-mercedes-benz-g550-174-67d300d314cb6.jpg?crop=0.694xw:0.587xh;0.131xw,0.236xh&resize=2048:*',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'bmw', name: 'BMW',
          models: [
            {
              id: 42, name: 'X5', year: 2025, price: 72000, status: 'available',
              specs: { engine: '3.0T', power: 375, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['xLine', 'M Sport'], transmissions: ['Automatic'], colors: ['black', 'white'] },
              photos: [
                'https://parkers-images.bauersecure.com/wp-images/22101/cut-out/040-bmw-x5-hybrid-grey-front-driving.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 43, name: 'X7', year: 2025, price: 89000, status: 'sold',
              specs: { engine: '3.0T', power: 375, fuel: 'Petrol', drive: 'AWD', seats: 7 },
              configuration: { trims: ['Design Pure Excellence', 'M Sport'], transmissions: ['Automatic'], colors: ['black', 'silver'] },
              photos: [
                'https://images.pistonheads.com/nimg/45559/P90457463_highRes_the-new-bmw-x7-m60i-.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'lexus', name: 'Lexus',
          models: [
            {
              id: 44, name: 'LX 600', year: 2025, price: 105000, status: 'available',
              specs: { engine: '3.5 V6 Twin Turbo', power: 409, fuel: 'Petrol', drive: 'AWD', seats: 7 },
              configuration: { trims: ['Premium', 'Luxury', 'F Sport'], transmissions: ['Automatic'], colors: ['black', 'white'] },
              photos: [
                'https://static.wixstatic.com/media/1377dc_c0c1eef7dcbc4f0b82286a8dec92d94a~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/1377dc_c0c1eef7dcbc4f0b82286a8dec92d94a~mv2.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'nissan', name: 'Nissan',
          models: [
            {
              id: 45, name: 'Patrol', year: 2025, price: 78000, status: 'available',
              specs: { engine: '3.5 V6 Twin Turbo', power: 425, fuel: 'Petrol', drive: 'AWD', seats: 8 },
              configuration: { trims: ['LE', 'Platinum'], transmissions: ['Automatic'], colors: ['white', 'black'] },
              photos: [
                'https://brook-drive.rent/wp-content/uploads/2025/01/nissan-patrol-le-5.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'volkswagen', name: 'Volkswagen',
          models: [
            {
              id: 46, name: 'Touareg', year: 2025, price: 68000, status: 'sold',
              specs: { engine: '3.0 TDI', power: 286, fuel: 'Diesel', drive: 'AWD', seats: 5 },
              configuration: { trims: ['Elegance', 'R-Line'], transmissions: ['Automatic'], colors: ['black', 'white'] },
              photos: [
                'https://www.actualidadmotor.com/wp-content/uploads/2022/02/Volkswagen-Touareg-Portada-2048x1229.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'audi', name: 'Audi',
          models: [
            {
              id: 70, name: 'Q7', year: 2025, price: 89000, status: 'available',
              specs: { engine: '3.0 TFSI V6', power: 340, fuel: 'Petrol', drive: 'AWD', seats: 7 },
              configuration: { trims: ['Premium', 'S line'], transmissions: ['Automatic'], colors: ['white', 'black', 'gray'] },
              photos: [
                'https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-q7-2026-001.jpg?itok=OAmXbnRH',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 71, name: 'Q8', year: 2025, price: 102000, status: 'available',
              specs: { engine: '3.0 TFSI V6', power: 340, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['S line', 'Black Edition'], transmissions: ['Automatic'], colors: ['black', 'gray', 'blue'] },
              photos: [
                'https://ams3.digitaloceanspaces.com/mindpulse-center/_auto_motive_site/articles/1811/original.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 72, name: 'SQ7', year: 2025, price: 125000, status: 'sold',
              specs: { engine: '4.0 TFSI V8', power: 507, fuel: 'Petrol', drive: 'AWD', seats: 7 },
              configuration: { trims: ['SQ7'], transmissions: ['Automatic'], colors: ['black', 'white'] },
              photos: [
                'https://www.afisha.uz/uploads/media/2026/06/b88e248afc519aa720c33c096ffb3e70.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 73, name: 'RS Q8', year: 2025, price: 165000, status: 'available',
              specs: { engine: '4.0 TFSI V8', power: 600, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['RS Q8 Performance'], transmissions: ['Automatic'], colors: ['gray', 'red', 'black'] },
              photos: [
                'https://www.europeanprestige.co.uk/blobs/stock/311/images/9cd273fa-3258-4898-9e84-079fcf592562/hi4a7330.jpg?width=2000&height=1333',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
      ],
    },
    {
      id: 'coupe',
      name: 'Coupe',
      icon: 'mdi-car-sports',
      brands: [
        {
          id: 'toyota', name: 'Toyota',
          models: [
            {
              id: 47, name: 'GR86', year: 2025, price: 31500, status: 'sold',
              specs: { engine: '2.4', power: 234, fuel: 'Petrol', drive: 'RWD', seats: 4 },
              configuration: { trims: ['Base', 'Premium'], transmissions: ['Manual', 'Automatic'], colors: ['red', 'white', 'blue'] },
              photos: [
                'https://di-uploads-pod13.dealerinspire.com/andersontoyota/uploads/2023/02/2022-toyota-gr86-93-1629157639.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'bmw', name: 'BMW',
          models: [
            {
              id: 48, name: 'M4', year: 2025, price: 82000, status: 'available',
              specs: { engine: '3.0 Twin Turbo', power: 510, fuel: 'Petrol', drive: 'RWD', seats: 4 },
              configuration: { trims: ['Competition', 'Competition xDrive'], transmissions: ['Automatic'], colors: ['green', 'blue', 'white'] },
              photos: [
                'https://cdn.dealercms.ru/media/image/65c3494508efd5dd0112faf8',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'nissan', name: 'Nissan',
          models: [
            {
              id: 49, name: 'Z', year: 2025, price: 46000, status: 'sold',
              specs: { engine: '3.0 V6 Twin Turbo', power: 400, fuel: 'Petrol', drive: 'RWD', seats: 2 },
              configuration: { trims: ['Sport', 'Performance'], transmissions: ['Manual', 'Automatic'], colors: ['yellow', 'blue', 'black'] },
              photos: [
                'https://media.ed.edmunds-media.com/nissan/z/2024/oem/2024_nissan_z_coupe_nismo_fq_oem_1_1280.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'audi', name: 'Audi',
          models: [
            {
              id: 74, name: 'TT Coupé', year: 2025, price: 61000, status: 'available',
              specs: { engine: '2.0 TFSI', power: 245, fuel: 'Petrol', drive: 'FWD', seats: 4 },
              configuration: { trims: ['S line'], transmissions: ['Robot'], colors: ['white', 'yellow', 'gray'] },
              photos: [
                'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1563182796/autoexpress/2019/02/01_12.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 75, name: 'S5 Coupé', year: 2025, price: 79000, status: 'sold',
              specs: { engine: '3.0 TFSI V6', power: 354, fuel: 'Petrol', drive: 'AWD', seats: 4 },
              configuration: { trims: ['S5'], transmissions: ['Automatic'], colors: ['blue', 'black', 'white'] },
              photos: [
                'https://cdn.bmwblog.com/wp-content/uploads/2018/04/2018-Audi-S5-test-drive-35.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
            {
              id: 76, name: 'RS 5 Coupé', year: 2025, price: 112000, status: 'available',
              specs: { engine: '2.9 TFSI V6', power: 450, fuel: 'Petrol', drive: 'AWD', seats: 4 },
              configuration: { trims: ['RS Dynamic', 'Carbon'], transmissions: ['Automatic'], colors: ['gray', 'red', 'green'] },
              photos: [
                'https://hips.hearstapps.com/mtg-prod/65c322a21d407400086513fb/audi-rs-5-coupe-15.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
      ],
    },
    {
      id: 'minivan',
      name: 'Minivan',
      icon: 'mdi-van-passenger',
      brands: [
        {
          id: 'kia', name: 'Kia',
          models: [
            {
              id: 50, name: 'Carnival', year: 2025, price: 43000, status: 'available',
              specs: { engine: '3.5 V6', power: 287, fuel: 'Petrol', drive: 'FWD', seats: 8 },
              configuration: { trims: ['EX', 'SX'], transmissions: ['Automatic'], colors: ['black', 'silver'] },
              photos: [
                'https://cdn.mos.cms.futurecdn.net/SzG8wZdNJyRh7mJbhJXDqZ.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'hyundai', name: 'Hyundai',
          models: [
            {
              id: 51, name: 'Staria', year: 2025, price: 42000, status: 'available',
              specs: { engine: '2.2 CRDi', power: 177, fuel: 'Diesel', drive: 'FWD', seats: 9 },
              configuration: { trims: ['Lounge', 'Premium'], transmissions: ['Automatic'], colors: ['silver', 'black'] },
              photos: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9LM5_VOwM_0SnqCveEfozTCXvi3Tvm9b_TBGjyju5Q&s=10',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'mercedes-benz', name: 'Mercedes-Benz',
          models: [
            {
              id: 52, name: 'V-Class', year: 2025, price: 72000, status: 'available',
              specs: { engine: '2.0 Diesel', power: 237, fuel: 'Diesel', drive: 'RWD', seats: 7 },
              configuration: { trims: ['Avantgarde', 'Exclusive'], transmissions: ['Automatic'], colors: ['black', 'silver'] },
              photos: [
                'https://www.panavto.ru/upload/iblock/d27/62dd4b04a7op6n633udaubqodkuk3ii2.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'lexus', name: 'Lexus',
          models: [
            {
              id: 53, name: 'LM', year: 2025, price: 120000, status: 'sold',
              specs: { engine: '2.4T Hybrid', power: 371, fuel: 'Hybrid', drive: 'AWD', seats: 4 },
              configuration: { trims: ['Executive'], transmissions: ['Automatic'], colors: ['black', 'white'] },
              photos: [
                'https://www.autofacil.es/wp-content/uploads/2023/05/Lexus-LM-Autofacil-Apertura.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'volkswagen', name: 'Volkswagen',
          models: [
            {
              id: 54, name: 'Multivan', year: 2025, price: 55000, status: 'available',
              specs: { engine: '1.4 eHybrid', power: 218, fuel: 'Hybrid', drive: 'FWD', seats: 7 },
              configuration: { trims: ['Life', 'Style'], transmissions: ['Robot'], colors: ['white', 'silver'] },
              photos: [
                'https://images.pistonheads.com/nimg/46141/blobid1.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
      ],
    },
    {
      id: 'pickup',
      name: 'Pickup',
      icon: 'mdi-car-pickup',
      brands: [
        {
          id: 'chevrolet', name: 'Chevrolet',
          models: [
            {
              id: 55, name: 'Colorado', year: 2025, price: 36000, status: 'sold',
              specs: { engine: '2.7T', power: 310, fuel: 'Petrol', drive: 'AWD', seats: 5 },
              configuration: { trims: ['WT', 'Z71', 'ZR2'], transmissions: ['Automatic'], colors: ['gray', 'red', 'white'] },
              photos: [
                'https://media.ed.edmunds-media.com/chevrolet/colorado/2027/oem/2027_chevrolet_colorado_crew-cab-pickup_trail-boss_fq_oem_1_1600.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'toyota', name: 'Toyota',
          models: [
            {
              id: 56, name: 'Hilux', year: 2025, price: 38000, status: 'available',
              specs: { engine: '2.8 D-4D', power: 204, fuel: 'Diesel', drive: 'AWD', seats: 5 },
              configuration: { trims: ['Standard', 'Adventure'], transmissions: ['Manual', 'Automatic'], colors: ['white', 'gray'] },
              photos: [
                'https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/toyota-hilux-hybrid-review-2026-47.jpg?itok=yM9JdIOn',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'byd', name: 'BYD',
          models: [
            {
              id: 57, name: 'Shark', year: 2025, price: 42000, status: 'available',
              specs: { engine: '1.5T DMO Hybrid', power: 430, fuel: 'Hybrid', drive: 'AWD', seats: 5 },
              configuration: { trims: ['Standard'], transmissions: ['Reducer'], colors: ['gray', 'black'] },
              photos: [
                'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/2025_BYD_Shark_6_front.jpg/1280px-2025_BYD_Shark_6_front.jpg?utm_source=uz.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
        {
          id: 'nissan', name: 'Nissan',
          models: [
            {
              id: 58, name: 'Navara', year: 2025, price: 35000, status: 'available',
              specs: { engine: '2.3 dCi', power: 190, fuel: 'Diesel', drive: 'AWD', seats: 5 },
              configuration: { trims: ['SE', 'Tekna'], transmissions: ['Manual', 'Automatic'], colors: ['gray', 'white'] },
              photos: [
                'https://avtonovostidnya.ru/wp-content/uploads/2025/11/fdc22699927ab4ff6c48b99ba6571d78-scaled-e1763623272580-1280x720.jpg',
                'https://www.topgear.com/sites/default/files/2026/04/VW%20ID%20Polo%20%287%29.jpg',
                'https://www.topgear.com/sites/default/files/2021/11/Small-31996-PoloStyle.jpg'
              ]
            },
          ],
        },
      ],
    },
  ],
};