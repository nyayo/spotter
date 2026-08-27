export interface ApprovalProfile {
  id: string;
  name: string;
  tier: 'PREMIUM' | 'BASIC';
  submitted: string;
  thumbnail: string;
  location: string;
  rate: string;
  status: string;
  bio: string;
  realName: string;
  idVerified: boolean;
  phone: string;
  accountLinked: string;
  gallery: string[];
}

export const approvalProfiles: ApprovalProfile[] = [
  {
    id: 'adriana-v',
    name: 'Adriana V.',
    tier: 'PREMIUM',
    submitted: '2h ago',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSUv9HvuNRO5BYAJJuedx7lMN715mCHqiz8AEEAIG9Iz8hKiBdigOtsC5tfCmyOFl2483wE62cFkttr_gI0CRzN8FGiHO_NXUYpi9TDQA26rtIVtva3jVccLXbmnZA4uqipOuGSv8BIXtbShg0dUgqBzG7xM-O_cVhlo04KjmaBnorofFPQQcpoc7maxQN83Zf9QE2_K4PKbe9iqSvKsYxUgXaS3F923fweRDuztgk_gZynbWA8SasE-u_QrECoG28c3uYO6Pv3m7B',
    location: 'Sandton, Johannesburg',
    rate: 'R 2,500',
    status: 'Online',
    bio: 'Experience the pinnacle of sophisticated companionship. I am an intellectual conversationalist and an elegant presence for your high-profile events, dinner dates, or private retreats. I value discretion and punctuality above all else, providing a service that is as professional as it is memorable...',
    realName: 'Adriana Venter',
    idVerified: true,
    phone: '+27 •• ••• 4591',
    accountLinked: 'Instagram Business',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBh6K6qSlJG4T3TyJk1KG90NdipwaNmehNc81VQvLj-sjCVyksN90LB5uMctqnZVyH1kOHQoq9BNa1K6WqsfPms-H8UjsEnl30vo3cgxRHpYBlrBNVlZHtCvQ8R5j_SWv_2TsNAFSTl14sSh5tZrOXffASBzGh4md9ZcS7gx_QXwMZsxPcntyBiKQRoAVeWqCHqES_60oBox-DgheEa5C14MwlLUJls6eejEZzWoGLviKNetTVphvduYWENo8RnVMbFrS4N0ClrkWEM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8skm5a_P4dr2kTS2gz59_VMj3PHyemv2UmpvbU4pDqHGA3viH9ZatJWKL7SOEERaavicRqoaqreqE9UdT8dZ0g5cU13EvoUwLnZYymMZFZYC3MGIKxepwek6f5ANtWn6VGbm7P7_ze3zxBmbfghJwqkWiGcO_4vG7ytBZlwuaaWnfkCW47Lnp8WA6rxov1LLSF-CTD0wHTkw5Lb53ecgO_WqTryw6qNYSYt4UH2o2KP-mtdPceABBAG0pKV-1F9rJrHogKLplc-qQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAfYDDC7yyNPnmd_rege5DKlryLePxDWAe2lHES1tHVu4xUEO2WLGWt42tnNnHrnqSKL0u573FwhpYUmdWSNokzkIKoRRWqkVQW12O8BYaSwEkXbO1vY2Z0IyPK11NJTxaSvLHMS8Tnn677zgtgbuvA-F8_x-vO2sAAM3r42bmX0m38huS6r_ycDZbbeN6dWVlRhlDtApDiGBmkHwqo0ZOohlern_ZoNh25lhFwuxNYWm2GOiczWF5DW-myuCVzMZwtWr3YTsO4V0fm',
      '',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbTQadO64lMo_bzgU-8mAWq5UMXA80EBTsy3ZvUcg-905QjO285rGrfuccfxbfaaYfQO6lhy4aepi10qvcF6xtCw6sDDNs_3A3iQeIRqbk74vnZg2GqUsWXjnFsxqFqe9vo9K_ZrJIfd8nz-7eSOiSKC7MYviC2NjKKbt--mbTZmtaN8Mg_lxvYw_YNkIJ54V96R1Rc42cmVJ3IfESCv8Y1lpkFGfIIobl3RNDX65MrAVj-OHvfDkAk1Ia1JWrKryG4gD7PNUfwK-H',
    ],
  },
  {
    id: 'julian-rossi',
    name: 'Julian Rossi',
    tier: 'BASIC',
    submitted: '5h ago',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDuDRKQ7Am5ZtrhK1iOgzxKPB-P50y5zr0ggDUvcuO-PjWSZgJsOy4dFRKbcbe2tqXtgIqaj3EIIpdlnaIPwgipBVuG4ZP7-kaIShhF1KGRLLPqsHWyjmJFynXkX2FzsncuAVh0nw7PO2pPCV0PYbLRUwJxKPoCvZ8nbUmzfgzzUL3txp-uK6zFAJ9eNCVkuXdF_Wrseu6a6zYkoKG3Nxxje_OnMo2yNg_NcoJc2WUg9lE-hUHaFxqgGHJCDRX6K9l9mLIw_ORcFAUT',
    location: 'Cape Town, ZA',
    rate: 'R 1,800',
    status: 'Offline',
    bio: 'A refined gentleman companion for the discerning client. I specialize in dinner dates, corporate events, and travel companionship with the utmost discretion.',
    realName: 'Julian Rossi',
    idVerified: true,
    phone: '+27 •• ••• 2231',
    accountLinked: 'LinkedIn',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDuDRKQ7Am5ZtrhK1iOgzxKPB-P50y5zr0ggDUvcuO-PjWSZgJsOy4dFRKbcbe2tqXtgIqaj3EIIpdlnaIPwgipBVuG4ZP7-kaIShhF1KGRLLPqsHWyjmJFynXkX2FzsncuAVh0nw7PO2pPCV0PYbLRUwJxKPoCvZ8nbUmzfgzzUL3txp-uK6zFAJ9eNCVkuXdF_Wrseu6a6zYkoKG3Nxxje_OnMo2yNg_NcoJc2WUg9lE-hUHaFxqgGHJCDRX6K9l9mLIw_ORcFAUT',
    ],
  },
  {
    id: 'elena-k',
    name: 'Elena K.',
    tier: 'PREMIUM',
    submitted: '1d ago',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPHsEJf1nFAzcEemS5QoUNPomxFiH13MU61mALcO3Qc54_o2i_1MXNif5fk-r9CU6gizJpqVVMA1t5G4T2-UAyJmt-waYw426vWIwJ91YiAG0qZr5Y7Ft1yGMz75RCfVv_c5sPBPWY4CGGKGEtmMZhiLpECsIWs2XEc1jP6OgAo17BQUqv7XqIdjY2-OdWTasO8hTe6UGAeerIv7fUhTItUecUHOzoqPUc3oiSp1Jxhfr4NB-5TaeIfOeXt1-RIPOpndJCTGUGeOk0',
    location: 'Lagos, Nigeria',
    rate: '₦ 150,000',
    status: 'Online',
    bio: 'Sophisticated and cultured companion with a passion for art, fine dining, and meaningful conversation. Available for exclusive engagements.',
    realName: 'Elena Kovac',
    idVerified: true,
    phone: '+234 •• ••• 8890',
    accountLinked: 'Instagram Business',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPHsEJf1nFAzcEemS5QoUNPomxFiH13MU61mALcO3Qc54_o2i_1MXNif5fk-r9CU6gizJpqVVMA1t5G4T2-UAyJmt-waYw426vWIwJ91YiAG0qZr5Y7Ft1yGMz75RCfVv_c5sPBPWY4CGGKGEtmMZhiLpECsIWs2XEc1jP6OgAo17BQUqv7XqIdjY2-OdWTasO8hTe6UGAeerIv7fUhTItUecUHOzoqPUc3oiSp1Jxhfr4NB-5TaeIfOeXt1-RIPOpndJCTGUGeOk0',
    ],
  },
  {
    id: 'sophia-luna',
    name: 'Sophia Luna',
    tier: 'BASIC',
    submitted: '1d ago',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvjtKXMZpZwunPfBFzuhN5HSoanWaWsf3nOAp25KXHxjuqJfOKNL4gI82qS3zGSjcyw3T-aD6nwQKkUB98sZzzY1QZ1BmFEQT7yJZqbL6dJz-zHe-LytCwty6yNIdUTgB-wUWVC6HctcWU5d8dlWVty74ahs1CxvNm3HHMlmH9iZAdwKr_Hnone8RpSQUkXYzJJ9KWMBkHFFFDLcdOls6st5-ohnGViOECHpdEt4pJ-feXfPIYPiUQE1RTiEdiNNH3lKiZbRjW2xl6',
    location: 'Accra, Ghana',
    rate: 'GH₵ 800',
    status: 'Offline',
    bio: 'Elegant and discreet companion available for social events and private engagements. I pride myself on professionalism and charm.',
    realName: 'Sophia Luna Mensah',
    idVerified: false,
    phone: '+233 •• ••• 1102',
    accountLinked: 'None',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvjtKXMZpZwunPfBFzuhN5HSoanWaWsf3nOAp25KXHxjuqJfOKNL4gI82qS3zGSjcyw3T-aD6nwQKkUB98sZzzY1QZ1BmFEQT7yJZqbL6dJz-zHe-LytCwty6yNIdUTgB-wUWVC6HctcWU5d8dlWVty74ahs1CxvNm3HHMlmH9iZAdwKr_Hnone8RpSQUkXYzJJ9KWMBkHFFFDLcdOls6st5-ohnGViOECHpdEt4pJ-feXfPIYPiUQE1RTiEdiNNH3lKiZbRjW2xl6',
    ],
  },
];
