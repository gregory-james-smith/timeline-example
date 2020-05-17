const testData = [
  {times: [{"starting_time": 1355752800000, "ending_time": 1355759900000}, {"starting_time": 1355767900000, "ending_time": 1355774400000}]},
  {times: [{"starting_time": 1355759910000, "ending_time": 1355761900000}, ]},
  {times: [{"starting_time": 1355761910000, "ending_time": 1355763910000}]}
];
const rectAndCircleTestData = [
  {times: [{"starting_time": 1355752800000,
            "display": "circle"}, {"starting_time": 1355767900000, "ending_time": 1355774400000}]},
  {times: [{"starting_time": 1355759910000,
  "display":"circle"}, ]},
  {times: [{"starting_time": 1355761910000, "ending_time": 1355763910000}]}
];
const labelTestData = [
  {label: "person a", times: [{"starting_time": 1355752800000, "ending_time": 1355759900000}, {"starting_time": 1355767900000, "ending_time": 1355774400000}]},
  {label: "person b", times: [{"starting_time": 1355759910000, "ending_time": 1355761900000}, ]},
  {label: "person c", times: [{"starting_time": 1355761910000, "ending_time": 1355763910000}]}
];
const iconTestData = [
  {class:"seal", icon: "icons/seal.svg", times: [
    {"starting_time": 1355752800000, "ending_time": 1355759900000},
    {"starting_time": 1355767900000, "ending_time": 1355774400000}]},
  {class:"duck", icon: "icons/duck.svg", times: [
    {"starting_time": 1355759910000, "ending_time": 1355761900000,
    "display":"circle"}, ]},
  {class:"bear", icon: "icons/bear.svg", times: [
    {"starting_time": 1355761910000, "ending_time": 1355763910000}]}
];
const labelColorTestData = [
  {label: "person a", times: [{"color":"green", "label":"Weeee", "starting_time": 1355752800000, "ending_time": 1355759900000}, {"color":"blue", "label":"Weeee", "starting_time": 1355767900000, "ending_time": 1355774400000}]},
  {label: "person b", times: [{"color":"pink", "label":"Weeee", "starting_time": 1355759910000, "ending_time": 1355761900000}, ]},
  {label: "person c", times: [{"color":"yellow", "label":"Weeee", "starting_time": 1355761910000, "ending_time": 1355763910000}]}
];
const testDataWithColor = [
  {label: "fruit 1", fruit: "orange", times: [
    {"starting_time": 1355759910000, "ending_time": 1355761900000}]},
  {label: "fruit 2", fruit: "apple", times: [
    {"starting_time": 1355752800000, "ending_time": 1355759900000},
    {"starting_time": 1355767900000, "ending_time": 1355774400000}]},
  {label: "fruit3", fruit: "lemon", times: [
    {"starting_time": 1355761910000, "ending_time": 1355763910000}]}
  ];
const testDataWithColorPerTime = [
  {label: "fruit 2", fruit: "apple", times: [
    {fruit: "orange", "starting_time": 1355752800000, "ending_time": 1355759900000},
    {"starting_time": 1355767900000, "ending_time": 1355774400000},
    {fruit: "lemon", "starting_time": 1355774400000, "ending_time": 1355775500000}]}
  ];
const testDataRelative = [
  {times: [{"starting_time": 1355752800000, "ending_time": 1355759900000}, {"starting_time": 1355767900000, "ending_time": 1355774400000}]},
  {times: [{"starting_time": 1355759910000, "ending_time": 1355761900000}]},
  {times: [{"starting_time": 1355761910000, "ending_time": 1355763910000}]}
];
