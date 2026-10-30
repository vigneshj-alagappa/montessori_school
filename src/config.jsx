/* ====== EDIT ME: school details and images ====== */
export const SCHOOL = 'Alagappa Montessori School'
export const INFO = {
  address: '12 Montessori Avenue, Karaikudi, Tamil Nadu 630001',
  phone: '+91 4562 245 678',
  email: 'admissions@alagappamontessori.edu.in',
  hours: 'Mon - Sat, 8:30 AM - 4:00 PM'
}
// Replace these dummy photos with your own (put files in /public and use '/photo.jpg')
export const img = (seed, w = 700, h = 480) => {
  if (seed === 'child') return '/Children_cropped.png'
  if (seed === 'about') return '/Drive%20Photos/Front_images_montessori.png'
  return '/Drive%20Photos/IMG_1885.jpg'
}
export const MAP = 'https://www.google.com/maps?q=Karaikudi+Tamil+Nadu&output=embed'
/* ================================================ */

export const pages = [['home', 'Home'], ['management', 'Management'], ['about', 'About Us'], ['gallery', 'Gallery'], ['contact', 'Contact Us'], ['locate', 'Locate Us']]

export const managementLeaders = {
  founder: {
    tag: 'REVERED FOUNDER',
    role: 'Founder',
    name: 'Padma Bhushan Dr. R.M. ALAGAPPA CHETTIAR',
    degrees: 'M.A., D.LIT., BAR - AT - LAW. London',
    trust: 'Founder: Dr. Alagappa Chettiar Educational Trust & Asoka Charitable Trust',
    quote: '“My happiness is limitless because it does not consist naturally in my own happiness, but my happiness consists in the happiness of the thousands of students, young and old, boy and girl that received education in our vast campus.”',
    quoteSource: 'Quote from the last speech of our founder, March 1957',
    bio: [
      'Dr. R.M. Alagappa Chettiar was a visionary who harbored a firm conviction that education is an absolute must for a human being to become productive, wholesome and humane. When India became independent he answered the call of the Prime Minister to help educate India by spontaneously offering to set up an Arts College in Karaikudi.',
      'His munificent donations led to the inception of a string of educational institutions, which formed the basis for the establishment of the Alagappa University in 1985 by the Government of Tamil Nadu. The magnificent gift of 300 acres of land and fifteen lakhs of Rupees donated by Dr. R. M. Alagappa Chettiar facilitated the Government of India to select Karaikudi as the seat of Central Electro Chemical Research Institute.',
      'Within a span of two decades, he demonstrated his versatility as a successful business tycoon, an intrepid academician with a vision to revolutionize his native town of Karaikudi single-handedly and changed the course of history by transforming a mere scrub jungle into a galaxy of educational institutions.'
    ],
    img: '/management/founder_alagappa.png'
  },
  leaders: [
    {
      tag: 'SECRETARY EMERITUS',
      role: 'Secretary Emeritus & Trustee',
      name: 'Late Dr. Mrs. UMAYAL RAMANATHAN',
      degrees: 'Doctor of Letters (Honoris Causa) · University of Madras 150th Convocation',
      trust: 'Trustee, Asoka Charitable Trust & Managing Trustee, Dr. Alagappa Chettiar Educational Trust',
      quote: '“A lifetime dedicated to expanding women’s empowerment, early childhood nurturing, and upholding the noble educational legacy of Karaikudi.”',
      quoteSource: 'Recipient of the Indira Gandhi Priyadarshini Award for National Integration',
      bio: [
        'Dr. (Mrs.) Umayal Ramanathan, the daughter of Dr. R.M. Alagappa Chettiar, is the founder of the Alagappa Matriculation Higher Secondary School in Karaikudi and in Chennai. Subsequently, she also launched the Umayal Play School and the Day Care Center. She founded Dr. (Mrs.) Umayal Ramanathan College for Women in 2006 and actively worked to expand the infrastructure as well as the academic programs and to provide vocational training to enable women in the community to prosper.',
        'She was enthusiastically involved in the field of education and social service. She served as a Syndicate Member of the Alagappa University and as the Managing Trustee of the Dr. Alagappa Chettiar Educational Trust and the Asoka Charitable Trust. She was an active member of the Social Welfare Board of Ramnad District and the Chairperson of Gangadeeswarar Temple, Chennai.',
        'Dr. (Mrs.) Umayal Ramanathan was awarded the Doctor of Letters (Honoris causa) by the Honourable Governor of Tamil Nadu. In recognition of her outstanding services to the society, she was awarded the prestigious Indira Gandhi Priyadarshini Award for National Integration and National Unity by the All-India National Unity Conference on Indira Gandhi’s seventy-fifth Birth Anniversary. She was also honored with a Doctorate Degree by the University of Madras on its 150th Convocation by His Excellency, the Governor of Tamil Nadu.'
      ],
      img: '/management/umayalAachi.jpg'
    },
    {
      tag: 'CHAIRMAN & CORRESPONDENT',
      role: 'Chairman & Correspondent',
      name: 'Dr. RAMANATHAN VAIRAVAN',
      degrees: 'B.Tech (Chem), M.S. (Biomedical Engg), MBA (USA), D.Litt. (Honoris Causa)',
      trust: 'Chairman & Correspondent, Dr. Alagappa Chettiar Educational Trust',
      quote: '“Fostering global educational standards, cutting-edge infrastructure, and holistic character formation for every learner.”',
      quoteSource: 'Doctor of Literature (Honoris Causa), Alagappa University 30th Convocation',
      bio: [
        'Dr. Ramanathan Vairavan, the grandson of Dr. R.M. Alagappa Chettiar, obtained his undergraduate degree in Chemical Engineering at the Alagappa College of Technology in Madras and went on to pursue his post-graduate education at Washington University, St. Louis, Missouri, USA, where he obtained a Master of Science degree in Biomedical Engineering and a Master’s Degree in Business Administration.',
        'He has held various executive positions with the multinational company, Hoechst AG of Germany in the US, Germany and Singapore. He co-founded a US based company, AutoGenomics, engaged in the development of a novel DNA based technology of biochips, which enables doctors to provide effective therapy to patients based on their genetic makeup. This technology is set to revolutionize the process of diagnosis, monitoring and management leading to the emerging era of personalized medicine.',
        'Dr. Ramanathan Vairavan was honoured with Doctor of Literature (Honoris Causa) in recognition of his contribution to education and to the fields of Pharmacogenetics and Molecular Oncology during the 30th Convocation of Alagappa University on 20.12.2017 by the Hon’ble Governor of Tamil Nadu Thiru. Banwarilal Purohit.',
        'Dr. Ramanathan Vairavan has been assiduously involved in enhancing the quality of education and promoting the infrastructure of the educational institutions, located in Chennai and Karaikudi. He is the founder of the Alagappa Girls Matriculation Higher Secondary School, Dr. Alagappa Academy CBSE School and Alagappa College of Performing Arts (Affiliated to TN Music and Fine Arts University). His strategic vision is to establish a College of Medical Sciences in Karaikudi and thus realize his beloved grandfather’s dream.'
      ],
      img: '/management/chairman.png'
    },
    {
      tag: 'MANAGING TRUSTEE',
      role: 'Managing Trustee',
      name: 'Ms. DEVI ALAMELUVAIRAVAN, JD., Esq.',
      degrees: 'B.S. (Criminal Justice & Molecular Biology), Juris Doctorate (New York Law School)',
      trust: 'Managing Trustee, Dr. Alagappa Chettiar Educational Trust',
      quote: '“Following the footsteps of generations to give back to society, broaden education, and empower students with immediate opportunity.”',
      quoteSource: 'Practicing Attorney in New York & Advocate for Educational Access',
      bio: [
        'Ms. Devi Alamelu Vairavan is a practicing attorney in New York, USA. She schooled mostly in the US but spent a year at the St. Hilda’s convent in Ooty, where she learned to read and write Tamil. She obtained her bachelor’s degree specializing in Criminal Justice and Molecular Biology in California and obtained her Juris Doctorate law degree at New York Law School with focus in Intellectual Property, Criminal, Family, Matrimonial and Health Law.',
        'She works for the New York Legal Aid Society representing clients in exclusively civil litigation matters serving the underprivileged population of New York. To date she has successfully represented 65 clients.',
        'From her early age Ms. Devi Alamelu Vairavan has been passionate about education and has actively contributed to the growth of the Alagappa Group of Educational Institutions. Her mission in life is to follow the footsteps of her father—Dr. Ramanathan Vairavan, her grandmother—Dr. Mrs. Umayal Ramanathan, and her great-grandfather—Dr. R.M. Alagappa Chettiar by continuing to give back to society and broaden the spectrum of education offered to our community with emphasis on achieving academic excellence and offering opportunities for immediate employment.'
      ],
      img: '/management/Managing_Trustee.jpeg'
    }
  ]
}

export const headmistressLeader = {
  tag: 'HEAD MISTRESS',
  role: 'HEAD MISTRESS',
  name: 'K. DEVAKI',
  degrees: 'M.A., D.SE (Montessori Trained Secondary Grade)',
  trust: 'Head Mistress · Alagappa Montessori School',
  quote: '“I wish that all our students shine like the North Star in the sky of knowledge and success.”',
  quoteSource: "Message from the Head Mistress · Motto: 'Awakening Genius'",
  bio: [
    'I welcome you as students of the Alagappa Montessori School embarking on a new journey with the motto "Awakening Genius". We work towards excellence and providing quality education.',
    'Our focus is to help your child feel successful and achieve academic excellence. By working together as parents and educators, we can build a foundation of lifelong learning.',
    'Our children are at the center of everything we do. We will provide a happy, caring, secure and supportive environment for each child, where everyone will feel wanted, valued, and important. The secret of life is the art of creating good relationships, developing teamwork, and motivating people. Alagappa is an institution where the Management, the principal, and the teachers work together with enthusiasm and team spirit. I look forward for your kind cooperation and suggestions too. Feel free to communicate with us through the school diary and other means of communication. We welcome your participation and support during the school year, celebrating the achievements of our students together.'
  ],
  signoff: {
    regards: 'Regards,',
    name: 'K. Devaki M.A., D.SE (Montessori Trained Secondary Grade)',
    role: 'Head Mistress'
  },
  img: '/management/headmistress.png'
}

export const classes = [
  ['Pre-KG', '2.5 - 3.5 yrs', '/Drive%20Photos/IMG_1885.jpg'],
  ['LKG', '3.5 - 4.5 yrs', '/Drive%20Photos/IMG_1920.jpg'],
  ['UKG', '4.5 - 5.5 yrs', '/Drive%20Photos/IMG_1957.jpg'],
  ['1st Std', '6 yrs', '/Drive%20Photos/IMG_1967.jpg'],
  ['2nd Std', '7 yrs', '/Drive%20Photos/IMG_1947.jpg'],
  ['3rd Std', '8 yrs', '/Drive%20Photos/IMG_1978.jpg'],
  ['4th Std', '9 yrs', '/Drive%20Photos/IMG_1893.jpg'],
  ['5th Std', '10 yrs', '/Drive%20Photos/IMG_1937.jpg']
]
export const quotes = [
  ["Free the child\u2019s potential, and you will transform him into the world.", 'Maria Montessori'],
  ['Play is the work of the child.', 'Maria Montessori'],
  ['The child is both a hope and a promise for mankind.', 'Maria Montessori'],
  ['Never help a child with a task at which he feels he can succeed.', 'Maria Montessori'],
  ['The greatest sign of success for a teacher is to be able to say, \u201cThe children are now working as if I did not exist.\u201d', 'Maria Montessori'],
]
export const team = [['Mrs. A. Principal', 'Principal & Director'], ['Mr. B. Chairman', 'Chairman'], ['Mrs. C. Coordinator', 'Academic Coordinator'], ['Ms. D. Guide', 'Lead Montessori Guide']]
export const reviewsData = [
  ['Parent of a Pre-KG child', 'My daughter runs to school every morning. She has become so independent and curious.', 5],
  ['Parent of a UKG child', 'The hands-on materials made numbers and letters easy for my son. Wonderful, caring guides.', 5],
  ['Parent of a 3rd Std child', 'Calm classrooms, respectful children and real learning. We are very happy.', 5],
  ['Parent of a 5th Std child', 'The school builds confidence along with academics. Highly recommended.', 4],
]
export const galleryData = [
  ['Campus Building & Entrance', '/Drive%20Photos/Front_images_montessori.png'],
  ['Montessori Floor Learning Session', '/Drive%20Photos/IMG_1885.jpg'],
  ['Counting & Spindle Box Mathematics', '/Drive%20Photos/IMG_1920.jpg'],
  ['Interactive Smart Board Classroom', '/Drive%20Photos/IMG_1947.jpg'],
  ['Digital Presentation & Engagement', '/Drive%20Photos/IMG_1957.jpg'],
  ['Classroom Recitation & Expression', '/Drive%20Photos/IMG_1967.jpg'],
  ['Students Walking on Campus Grounds', '/Drive%20Photos/IMG_1978.jpg'],
  ['Computer Lab Workstation Learning', '/Drive%20Photos/IMG_1893.jpg'],
  ['Hands-on Computing & Digital Literacy', '/Drive%20Photos/IMG_1937.jpg'],
  ['School Campus Architecture & Signage', '/Drive%20Photos/IMG_1987.jpg'],
  ['Front Entrance & Play Grounds', '/Drive%20Photos/IMG_1988.jpg'],
  ['Creative Arts & Handcraft Exhibition', '/Drive%20Photos/Screenshot%202026-02-26%20115057.png'],
  ['Physical Training & Fun Activities', '/Drive%20Photos/Screenshot%202026-02-26%20115212.png'],
  ['Karate Martial Arts Training', '/Drive%20Photos/Screenshot%202026-02-26%20115351.png'],
  ['Yoga & Mindful Breathing Exercises', '/Drive%20Photos/Screenshot%202026-02-26%20115549.png'],
  ['Festivals & Cultural Celebrations', '/Drive%20Photos/Screenshot%202026-02-26%20115711.png'],
  ['Music, Rhythm & Dance Activities', '/Drive%20Photos/Screenshot%202026-02-26%20115812.png'],
  ['Student Awards & Recognition Ceremony', '/Drive%20Photos/Screenshot%202026-02-26%20115855.png'],
  ['Sports Day Events & Races', '/Drive%20Photos/Screenshot%202026-02-26%20120038.png'],
  ['Science Project Discovery Day', '/Drive%20Photos/Screenshot%202026-02-26%20120108.png'],
  ['Circle Time & Story Session', '/Drive%20Photos/Screenshot%202026-02-26%20120157.png'],
  ['Interactive Team Building Games', '/Drive%20Photos/Screenshot%202026-02-26%20120214.png'],
  ['Outdoor Sports & Play Sessions', '/Drive%20Photos/Screenshot%202026-02-26%20120519.png'],
  ['Annual Day Drama & Performances', '/Drive%20Photos/Screenshot%202026-02-26%20120556.png'],
  ['Morning Assembly & Gathering', '/Drive%20Photos/Screenshot%202026-02-26%20120631.png'],
  ['Celebrations & Joyful Moments', '/Drive%20Photos/Screenshot%202026-02-26%20120706.png']
]

export const Title = ({ children, sub }) => (<div className="title"><h2>{children}</h2>{sub && <p>{sub}</p>}<span /></div>)
