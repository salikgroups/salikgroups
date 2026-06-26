export type PakistanCity = {
  slug: string;
  name: string;
  province: string;
};

export const pakistanCities: PakistanCity[] = [
  { slug: "lahore", name: "Lahore", province: "Punjab" },
  { slug: "karachi", name: "Karachi", province: "Sindh" },
  { slug: "islamabad", name: "Islamabad", province: "Islamabad Capital Territory" },
  { slug: "rawalpindi", name: "Rawalpindi", province: "Punjab" },
  { slug: "faisalabad", name: "Faisalabad", province: "Punjab" },
  { slug: "multan", name: "Multan", province: "Punjab" },
  { slug: "gujranwala", name: "Gujranwala", province: "Punjab" },
  { slug: "peshawar", name: "Peshawar", province: "Khyber Pakhtunkhwa" },
  { slug: "quetta", name: "Quetta", province: "Balochistan" },
  { slug: "sialkot", name: "Sialkot", province: "Punjab" },
  { slug: "sargodha", name: "Sargodha", province: "Punjab" },
  { slug: "bahawalpur", name: "Bahawalpur", province: "Punjab" },
  { slug: "sheikhupura", name: "Sheikhupura", province: "Punjab" },
  { slug: "hyderabad", name: "Hyderabad", province: "Sindh" },
  { slug: "sukkur", name: "Sukkur", province: "Sindh" },
  { slug: "larkana", name: "Larkana", province: "Sindh" },
  { slug: "abbottabad", name: "Abbottabad", province: "Khyber Pakhtunkhwa" },
  { slug: "mardan", name: "Mardan", province: "Khyber Pakhtunkhwa" },
  { slug: "gujrat", name: "Gujrat", province: "Punjab" },
  { slug: "kasur", name: "Kasur", province: "Punjab" },
  { slug: "sahiwal", name: "Sahiwal", province: "Punjab" },
  { slug: "okara", name: "Okara", province: "Punjab" },
  { slug: "wah-cantt", name: "Wah Cantt", province: "Punjab" },
  { slug: "dera-ghazi-khan", name: "Dera Ghazi Khan", province: "Punjab" },
  { slug: "muzaffargarh", name: "Muzaffargarh", province: "Punjab" },
  { slug: "jhelum", name: "Jhelum", province: "Punjab" },
  { slug: "rahim-yar-khan", name: "Rahim Yar Khan", province: "Punjab" },
  { slug: "chiniot", name: "Chiniot", province: "Punjab" },
  { slug: "kamoke", name: "Kamoke", province: "Punjab" },
  { slug: "hafizabad", name: "Hafizabad", province: "Punjab" },
  { slug: "kohat", name: "Kohat", province: "Khyber Pakhtunkhwa" },
  { slug: "jacobabad", name: "Jacobabad", province: "Sindh" },
  { slug: "muridke", name: "Muridke", province: "Punjab" },
  { slug: "khanpur", name: "Khanpur", province: "Punjab" },
  { slug: "taxila", name: "Taxila", province: "Punjab" },
];

export const cityBySlug = Object.fromEntries(
  pakistanCities.map((city) => [city.slug, city]),
) as Record<string, PakistanCity>;
