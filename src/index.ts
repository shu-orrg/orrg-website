const imageBase = "https://res.cloudinary.com/mexico86/image/upload/";
const transformation = "c_lfill,g_center,h_550,w_1200,x_0";

const imageList = [
  "/v1579253276/ORRG/BMX_cityscape_Sheffield_The_Outdoor_City_dih19k.jpg",
  "/v1579253275/ORRG/Bouldering_2._Sheffield_The_Outdoor_City_utjbxz.jpg",
  "/v1579253275/ORRG/Bouldering_1_Sheffield_The_Outdoor_City_bglz5p.jpg",
  "/v1579253275/ORRG/Bouldering_3_Sheffield_The_Outdoor_City_ww6qyf.jpg",
  "/v1579253274/ORRG/Bouldering_4_Sheffield_The_Outdoor_City_dbzyhp.jpg",
  "/v1579253274/ORRG/Eating_out_The_Riverside_pub_Sheffield_The_Outdoor_City_r7aor7.jpg",
  "/v1579253273/ORRG/Fell_running_out_to_the_city_limits_Sheffield_The_Outdoor_City_zv5frl.jpg",
  "/v1579253273/ORRG/Indoor_climbing_1_Sheffield_The_Outdoor_City_ezsjhk.jpg",
  "/v1579253272/ORRG/Paddle_boarding_on_the_River_Don_Sheffield_The_Outdoor_City_nsdte4.jpg",
  "/v1579253272/ORRG/Indoor_climbing_2_Sheffield_The_Outdoor_City_vzekap.jpg",
  "/v1579253272/ORRG/Paddle_boarding_on_the_River_Don_2_Sheffield_The_Outdoor_City_m8lap5.jpg",
  "/v1579253271/ORRG/Mountain_biking_in_Sheffield_The_Outdoor_City_lguhwv.jpg",
  "/v1579253271/ORRG/Mountain_biker_Sheffield_The_Outdoor_City_rbixgu.jpg",
  "/v1579253270/ORRG/Riding_inner_city_trails_1_Parkwood_Springs_Sheffield_The_Outdoor_City_txwkxf.jpg",
  "/v1579253270/ORRG/Planning_your_adventure_Sheffield_The_Outdoor_City_be1yym.jpg",
  "/v1579253270/ORRG/Road_cycling_Sheffield_The_Outdoor_City_dg9jya.jpg",
  "/v1579253269/ORRG/Riding_inner_city_trails_2_Parkwood_Springs_Sheffield_The_Outdoor_City_rv9pjr.jpg",
  "/v1579253269/ORRG/Trad_rock_climbing_2_Sheffield_The_Outdoor_City_e1ijiy.jpg",
  "/v1579253268/ORRG/Victoria_Quays_Sheffield_The_Outdoor_City_wbfq7y.jpg",
  "/v1579253268/ORRG/Urban_running_Winter_Garden_Sheffield_The_Outdoor_City_o4lubh.jpg",
  "/v1579253267/ORRG/Wild_Swimming_Sheffield_The_Outdoor_City_v9nint.jpg",
  "/v1579253267/ORRG/Yoga_1_Winter_Garden_Sheffield_The_Outdoor_City_rglnle.jpg",
  "/v1579253267/ORRG/Yoga_2_Winter_Garden_Sheffield_The_Outdoor_City_xgiysl.jpg",
  "/v1579253266/ORRG/Trad_rock_climbing_Sheffield_The_Outdoor_City_j4lbop.jpg"
];

const imageIndex = new Date().getDate() % imageList.length;

const selectImage = (): HTMLImageElement => {
  const element = document.createElement("img");
  element.setAttribute(
    "src",
    imageBase + transformation + imageList[imageIndex]
  );
  element.setAttribute("class", "img-fluid");

  return element;
};

const imageElement = document.getElementsByClassName("index-image");

imageElement[0].appendChild(selectImage());
