export interface VideoProfile {
  id: string;
  name: string;
  city: string;
  views: string;
  thumbnail: string;
  avatar: string;
  online: boolean;
}

export const videos: VideoProfile[] = [
  {
    id: 'zahara-j',
    name: 'Zahara J.',
    city: 'KAMPALA',
    views: '4.2k',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkZYeyF7DNy4z-dD3u8gfkIoizdP5Ex6PUhazZGPTnirz5TaTD5HuPawRVeoFHVCD1GjkM1_LtXZhVndX8qhJYVjVbo03Fgg81txnSkukjKi3DqHQGwUyMVvk_ZiIr5fE_nyUaBmI3GEJ2TAQ-I_jB9Lba7DmEgJowLe_Lmql86MrrjPXnBcAFjHjGTryiCJ1quxxFDPtdnPI5BG2t1zm3pCHIdZoX_4AzZCCcJj2-U09cmFEAN_OB8kT4rTdd37vvfuiGXXqArR1o',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAe6mdeRdepOO93Tl1AbL5e9Mwe751nVUt60bgjKwC2VEb_I1Cye9ytZbzz3VUuqlJfUABDEnRwxx5-4QNVaFnVR8I4UpLa2AOmp9gFoaBHxzhsvKtaVgDw76xWCK1NV3skMmTEjPrh1hom01xnKOG8iV3PDtWUYvEQ2nDuqUmr-cKnJW0HLBSPJbUitN4IAjs_J1LeOX_vwb1VYUedGzXDvBtThV1OC5RapG3p2z6njWK8a5BJ8oreUljRIwgoGYMQJY5XL3zblrsd',
    online: true,
  },
  {
    id: 'maya-entebbe',
    name: 'Maya Entebbe',
    city: 'ENTEBBE',
    views: '12.8k',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnM-RpcinZfG4anHc-TBFpY3gA9UYc6p8mXuKLl2TjWjP38Z8Y78q7jGy-AC4GsE67tnRs63hLHZzZpFnhSLPEU3qGlZQCx7JBX1IgwU88K1XYXVsRpNIBMnTpamJPI03TQJ6vpkpcMIqu7Y07pCg8ix2-80Li6OYaERIcWUhgywZpZAE4-atP3xXNwjWiMiLFJGd_qSkxEYM7IJ4LvSB4LYNGVw_abTmkHjoDTvMHenGzgxZcl3bcD-UpKSfKQIrKrqvtSue2Vfe2',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdxDAvbTbA4AedzVT_QLrEBYvEIdAXBavQXX80Cl4IxYjS7o2LsV9US_2xlDa1HCREgUrT9ZccA1Elacbo3BN7D3nc6TyU4kar-Sbkm-E7JwhQSqjqX1kAI7-qX1YHnpaRmTb7WWlpd5tNZwTEwrcUqBPWVQDmPpjX4jAaMitrabA_adoTfq3hy4h5Ah-M_kkLm_N98ASpRslr4DnW_wy0gAoDDK4uNzV4ZEGm-s_AU2abvTd3I1sff-IjdHJ0jY5pHZAbulq5lQjF',
    online: false,
  },
  {
    id: 'nora-divine',
    name: 'Nora Divine',
    city: 'JINJA',
    views: '892',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIxtAuoYgw3xmoOcVyElHgWFeyDBIfghHu_vLtGsU18_Ogjk-eMYThzFqGi-iOpN-MgdANsBj9V3QPjT9yOqNR246w1hsq0PCEdo_c2c2qt6vcrmXyCKFdzSDm-sVyxS00vw-U76RIYRneSVO9c04_Oe_AI9pBC4ylQxIY2S8RPPlzfUyzKd0d582TD1zO-sow1UJjWGBK57uIbr1Ecr4tqcugaIgsKujfuy7S9tnvfuqqNeWHIWySZJbldTcVUsSXWcPfTcO8G47M',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNzMmGC7mPRH93OI9iW9CuisBTHR-WJKSqKy9oU7QWYZ_O0HOGR9w8Ijv0UhpoM0bsAOZpsRVGyRaMS9_BzI5XoCXm7WiWPsQ3KUM0edc8jmZBdLtK_EGp6kWyTjAvpYdNlnH3ZifVitjy4pAR366inDNAW1oSnbohYdvyKA5kb6zNqPez-28q4dFLlMsBv7P9x_wO3_onr_ipmygx7oFcAVzemYXNtebb5YI5II8RutcmL3cNY60GhpUSiUiU0dx8nPqN9Ck1j3Zc',
    online: false,
  },
  {
    id: 'bella-rose',
    name: 'Bella Rose',
    city: 'KAMPALA',
    views: '6.1k',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDG_gysM103FzS84UtlsyHsvMtzQN74kPZke7VL1L2MoUawsFyVyeB06F5duH0eX-rYax-wgDZon3tVovCeWUNqdLdQsMuwrhKVPnlF5atYElw2dXZrxfjAYbvuTrcFeHeNv5jNflyuEGNCVqiW6CKJ0grNpWx06-i67bUhWRT5uzDkt7kA_wLSDBiAas33Ci6_No2nUaZGmVUN_f9yuLOhFaVDFP-gmzHcXArRyxp5rHZzwFDMlaX1J5HAXqdB5nL14vi2es9U7cXh',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIHcO40j5CtPIh75tADBHN9Upn2Mg2WrrJqhmo790AuGr5h9qFWma6l04MPT3paYUTsngc3sS2ESeNZAF0WIVeFczQEVLe3n11IgaYIolzmFswcx_ru0OrhTp9oxk_Tij0YfzE4XgGNtkzCPc-bxXWS__-dpHbyUducpeN9TZMjMDSRyjwwwEbr8ue044Dsk4xA9zh1dok79unlZ2Lucdct3bx9aMYcwaqzGHIawr_czb-meiNntMo9oi6_mVJUfUVyR1is9HtIz53',
    online: true,
  },
  {
    id: 'sonia-k',
    name: 'Sonia K.',
    city: 'MBARARA',
    views: '2.3k',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBW7zB3RHk5KCI1CGxEyNysP28fh5G4e2p_cKCgn6LUtTcX6dL9f4HUrC-CKfg-akj5yIPlYgyuo1gLShz4o7B8M1ZV0dTmzlum2s-nW8-EHA-Sc_-cQt_Ju9rGbRArytjrY_-uFGFcckVn-12V72wPL14Lq28hhP5wStokErsAQnkhIq3nxZulvTUmGFpGEApDwECVDWAZW-IIccql_M_AMSzMrAtbfRXKkOmQNZkKZKy7DVGgrdx-dDEbOv1OwuAnxTSiTuxQ2G7G',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUE4UjCnOKI2T53jLsgCZZKSheDvttjiLaY9vdv87nKmadnJRvoCIkT7bfFG5jrkKvMLbpQccWqqy02Nvxrv-PfuPGu0lxotJGDYWAV_ZmFuV4cA-ysP97pWr94MkPcKf9GuoBWbDstc1dmsERFX8bdFYetl1JjGa3ag9tjbHD2LSKSOfEzFh0RkPg1RxBDd9XQXjwa3sP-xAKNT22zRuiJrGzxeNAIAmv9DJxnNvnwDl1QAzJSefEgCN8wW6CrWyKiLtj4DFLUOYl',
    online: false,
  },
  {
    id: 'grace-elite',
    name: 'Grace Elite',
    city: 'KAMPALA',
    views: '15k',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4Ad9ANwg9SXfhALo2hjTFLT7Gnm1Yk2yRWOx04jSN-kyoCL_W_MEU6mg3PcreA8mCivWrZx_S--EGA7FwSf0oqLt6qI5jvulGwLHQf4HUPGEJ8sC8nHHgayhAoL6hzFefRDJ5K3eG6MS6FscX-rGvPjN4SNXthyxFqQsgBlOtEqr_ZlGiR5Uda7PBTCtjrn34rsREV5aiWLQttEiTWq2PJaTPjoGEu2d_3OFk7XP8SEdHPbODAQ4_s9rja4FgGN4WsbdpRtS5wsSk',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDu4Oy2WugwBLYXoVZhVC84Uu6pN5DakCJddGIbABhK9rZ6doBBCzDm_LKCFwOMNRBROwBS7gAkbPMSRzuAeEn9t_i2iFWTozJW3yD50uTS99Qtld8qYMhsh5A19j6AqlsidNUArOENtU6PghyiqLmLs26m5GXR4UGDtTbfjgynX0yJn6gYzFvEdmn8oe7u48dpoDPpQlBYMirTLZ7LhEGFeyPyW2vp8h8D2-CFtBD1eiGVzkHjcTwc7cNSC9MK6_xbBk5TcGuzTvqj',
    online: true,
  },
  {
    id: 'chloe-v',
    name: 'Chloe V.',
    city: 'GULU',
    views: '4.7k',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCz5W2XVQl-y9Dd-oDdOX419YbMFwYV-W4Yj9CLtu3Up4YJ4uQr50W8JXF3MI_qHdMjLh6nZbx5MqE2AbiF8FkRhG8Pr4lsJeWRdmyCiwWfS4BowkDQtURKrRSIpWJujpgXbzMVpmDKFz43hjIxYx6qfFGMy3LbUlFWmj55_cKSMhqYQo-n2Ww9LqHVcK8d4MNdt6egzPYNpuBjeqBa2N8RqRxaNn-_hQSehFfYKGgCsss5wp6vGi1rAMDyWRiz-VVYogD-dz96cHSB',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmItU9NqZAmECQvg5DQxfcF9bwYXe2BRCILzTR0RQ3PQAlMFCrnfmOU8F-5PedXLNcf7-gxOflpmX62awdQ7keRMMoeDjGnlGaZI3htAR5A_C04wNv0NUtmUqq_XjQpEf2Jj4l_y4vhoH2iGe1GBRdU02WWRBvvxUxgQZALQwqzyQs4hrfgGqzkNL8W-u3Nn_Ymh19mJ4eIBI2fHsjyHEAtDzxOFeIuFFGp4TiQUgK6F-XiKnuX3LdHSlQX8MvZ1eKrPY4qnfX44SZ',
    online: false,
  },
  {
    id: 'tiana-nile',
    name: 'Tiana Nile',
    city: 'JINJA',
    views: '3.1k',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBXqv2GuMsXgFKVfzcFjWANQPJ3J2aUDU5l5NKrngcvlFD6441RGiJvOmxX6WXq5fysr1C40oh__HTfUbRoxP0DrC-mO_5zKriCp6EHB_-56KJW40QlvzJd1AEeM2o81O5Wla5_f9HGHZ76aDVA3ASabanka2z_9PoZD9sY_pSV4tO9ZVzNHXEXXtvjqver-xI57W__xp9APXYNKkG5vM2I6zyu1g_iQ6g5cMnGnfupTrZfpc_qN5zL3TQPIlki7luV862U4uxwyYto',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMsBDOqFS9_TRc3Wp9-0pO5r8kx0RZRJ3zOVgnr7IOR5bEJMIxdRaKh_YIX01qPzwfqf9Jw0M4dJONWca5bCtWeKxGPLRS4cY8ps59qZEwG5vLUk0wfIl5UTR1I8HkG_IpedH223dMWArkaP-wrPZsjIBivRhFFet-W8ABAgWgCe_phXVmwmbwkCg15kD-Mc0nHS0KxYtljkxmn_26IC3zjSt-Ld_XIk77HbAhshDCG49fSktC_0GnvQeK6jdPNXBRFnYRAnFQKc77',
    online: false,
  },
];
