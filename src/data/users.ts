export interface AdminUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'Escort' | 'Client' | 'Partner';
  status: 'Online' | 'Inactive' | 'Pending';
  verified: boolean;
  joined: string;
  avatar: string;
  location: string;
  bookings: number;
  rating: number;
  accountType: string;
  lastActive: string;
}

export const adminUsers: AdminUser[] = [
  {
    id: '#AFH-9821',
    name: 'Amara Onyeka',
    email: 'amara.o@example.com',
    phone: '+234 809 123 4567',
    role: 'Escort',
    status: 'Online',
    verified: true,
    joined: 'Oct 12, 2023',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzGSDxI98l3u_kdl0LXNEFW4DQ3q5ZQ_ULjMs5tLlD-I3omQzd-eLn9hN49sQ9bW0yOPxzjAaMhWXyXIK6_uwXc10WII8TU4fbGKaPGuqrGuPnJZu6iI5n9z1IOspQMQ--Qoj3azqU6qd7NHnY-yBwzT_-XfSzXZn0TQ5kP0t1tnrko_btasyblGuQ35awzuvBs8YC-SzTxH1RNDNmXTLLuHvYqvdTOhnq_MficwLpd5lbos3bioCzX6OdeXc7bwrFK9F603FYKGlA',
    location: 'Lagos, Nigeria',
    bookings: 42,
    rating: 4.9,
    accountType: 'Premium Companion',
    lastActive: '5 mins ago',
  },
  {
    id: '#AFH-5432',
    name: 'Kwame Boateng',
    email: 'k.boateng@vip.gh',
    phone: '+233 24 555 9012',
    role: 'Client',
    status: 'Inactive',
    verified: false,
    joined: 'Jan 05, 2024',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDzJlYDvGqmLnQbGPzJ1ns5vBrHI3G8t8bm2m4tYULA0cLeM-IWnA3MP3AN77F97gl_ssc4jJskQai6q7y0-7lsSsUZr-N4M3OTWBesvMusmR-xtabKTzGymOD_OOgi_G7JCanaumRi7NN5lVKM666ju4LRj0b5QjypLJ9-qw5KHjH3ASR3KjO_xNtPC2OKKggM6TSHCv_Kp85LaoM3nYRXMzlcazLpKF0slq4rfOElwLn8dBm2VrkfqqWOXCjatudJBKtcJslUrCwQ',
    location: 'Accra, Ghana',
    bookings: 18,
    rating: 4.7,
    accountType: 'Standard Client',
    lastActive: '2 days ago',
  },
  {
    id: '#AFH-1102',
    name: 'Sade Adeyemi',
    email: 'sade.lux@cloud.com',
    phone: '+234 901 888 2211',
    role: 'Escort',
    status: 'Pending',
    verified: false,
    joined: 'Feb 28, 2024',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCY0etZ5H7imRYA6mdC3G6twWsPHB6triGnmZfVZ5ZBhP_1AmyK2NQFmPC47twSVb2tSvC_hYTA9p8F3hYJOWFBGOmlBY95QGOMUcYdWqHbquNqWDyEN-bo8nbjXoywXXeJGbQNzsaW6T-X-6i64d5Pohy6hrWh3f_WSuuBlb9hFgjRRCaUgN9Fz5SDI-y3mtDjrlR515Xo_NxHsbEbCQudYV5gGv7uZsHf3-ueu7XTfE_aTjcfB7RGVX2blauDR_DP53ddX51xnKnp',
    location: 'Lagos, Nigeria',
    bookings: 7,
    rating: 4.8,
    accountType: 'Pending Verification',
    lastActive: '1 hour ago',
  },
  {
    id: '#AFH-3344',
    name: 'Lerato Mokoena',
    email: 'lerato.m@executive.za',
    phone: '+27 82 456 7788',
    role: 'Partner',
    status: 'Online',
    verified: true,
    joined: 'Nov 18, 2023',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvaHhYtMobZ7MRJmkLLKz_J_LHdWj86C5JJFFKCwt-jix5KubPSyxQqpwZ2vs1bUVocjasPWVGCPX0SCWV04HtMAxZuS-kcA2s8_v8gUnq_avN7ABM35_8hy1hi5TSVhmEBzpP53mbMGfAV6d4hfamJHvHDjmtTkXHGJAgzGpmZT5eSxZODo1HPv8Zebes0pfHGal8zoEdDpqwGaZ2KwOEYHhdtfwnu12dXUHfRqLCAfVQ9CgmmUPUD0I9WNJA8vNgp_zjZFMMrrwi',
    location: 'Johannesburg, ZA',
    bookings: 156,
    rating: 5.0,
    accountType: 'Agency Partner',
    lastActive: '12 mins ago',
  },
  {
    id: '#AFH-7791',
    name: 'Nia Okafor',
    email: 'niaokafor@elite.ke',
    phone: '+254 712 990 442',
    role: 'Escort',
    status: 'Inactive',
    verified: true,
    joined: 'Sep 03, 2023',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSUv9HvuNRO5BYAJJuedx7lMN715mCHqiz8AEEAIG9Iz8hKiBdigOtsC5tfCmyOFl2483wE62cFkttr_gI0CRzN8FGiHO_NXUYpi9TDQA26rtIVtva3jVccLXbmnZA4uqipOuGSv8BIXtbShg0dUgqBzG7xM-O_cVhlo04KjmaBnorofFPQQcpoc7maxQN83Zf9QE2_K4PKbe9iqSvKsYxUgXaS3F923fweRDuztgk_gZynbWA8SasE-u_QrECoG28c3uYO6Pv3m7B',
    location: 'Nairobi, Kenya',
    bookings: 89,
    rating: 4.6,
    accountType: 'Premium Companion',
    lastActive: '3 days ago',
  },
];
