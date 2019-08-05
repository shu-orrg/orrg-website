const imageBase = "https://ucarecdn.com/";
const imageList = [
  "85bb1000-38da-40f6-8c1a-dbe81c17bd17/-/scale_crop/1200x350/center/",
  "e3a037b1-c5a7-49a4-a0fe-25d9848712e8/-/scale_crop/1200x350/center/",
  "721d3caa-8beb-4d91-92fa-0a88a07ac75d/-/scale_crop/1200x350/center/",
  "6c243a96-337c-49b6-a049-3e066c96756f/-/scale_crop/1200x350/center/",
  "5fdafb4a-b165-42c0-9b23-0ed6b90161b9/-/scale_crop/1200x350/center/",
  "730331c6-33ca-46ea-83b8-34778c2c99ae/-/scale_crop/1200x350/center/",
  "4339fd3a-030f-4321-9ccc-6ddb32365fbb/-/scale_crop/1200x350/center/",
  "0b4e5b17-701a-46cb-8682-438a15cef7b6/-/scale_crop/1200x350/center/",
  "41e509c5-16cd-4dd9-a7fc-99942a3d4188/-/scale_crop/1200x350/center/",
  "8aedf866-af75-4b3d-93fc-3fa1283c2458/-/scale_crop/1200x350/center/",
  "9be1e568-84b6-4a2f-82fb-0899fc61fe32/-/scale_crop/1200x350/center/",
  "5421420c-daa0-4751-86c2-bb13adb17a1f/-/scale_crop/1200x350/center/",
  "7e7b7911-1dd2-4196-8b62-dd768ccdb00a/-/scale_crop/1200x350/center/",
  "93faf9e5-602d-43ee-af88-2d86e98b710b/-/scale_crop/1200x350/center/",
  "2d6b9bea-57df-496b-b515-0c45ec0503da/-/scale_crop/1200x350/center/",
  "4e431b2f-af9d-4a6c-b913-811ed26b76f3/-/scale_crop/1200x350/center/",
];

const imageIndex = (new Date()).getDate() % imageList.length;

const selectImage = () : HTMLImageElement => {
  const element = document.createElement('img');
  element.setAttribute("src", imageBase + imageList[imageIndex]);
  element.setAttribute("class", "img-fluid");

  return element;
};

const imageElement = document.getElementsByClassName("index-image");
console.log(imageElement[0]);

imageElement[0].appendChild(selectImage());
