const borderColor = (color, color2, color3) => {
  return {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    borderWidth: "8px",
    borderStyle: "solid",
    borderLeftColor: color,
    borderTopColor: color3 ? color3 : color,
    cursor: "pointer",
    borderRightColor: color2,
    borderBottomColor: color2,
    marginTop: "5px",
    marginBottom: "5px",
  };
};
export const themeData = [
  {
    style: borderColor("#0A1128", "#6D9DC5", "#0A1128"),
    theme: {
      backgroundColor: "#0A1128",
      color: "#6D9DC5",
      thirdColor: "#FEFCFB",
    },
    colorLength: 3,
  },
  {
    style: borderColor("#472D30", "#E26D5C",'#FFE1A8'),
    theme: {
      backgroundColor: "#472D30",
      color: "#E26D5C",
      thirdColor: "#FFE1A8",
    },
    colorLength: 3,
  },
  //2 color scheme
  {
    style: borderColor("brown", "#2b343d"),
    theme: {
      backgroundColor: "#2b343d",
      color: "brown",
    },
  },

  {
    style: borderColor("#708bb2", "#00232b"),
    theme: {
      backgroundColor: "#00232b",
      color: "#708bb2",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#9f6daa", "#00232b"),
    theme: {
      backgroundColor: "#00232b",
      color: "#9f6daa",
    },
    colorLength: 2,
  },

  {
    style: borderColor("#d3b86c", "#193042"),
    theme: {
      backgroundColor: "#193042",
      color: " #d3b86c",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#5ab6cc", "#193042"),
    theme: {
      backgroundColor: "#193042",
      color: "#5ab6cc",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#f3b943", "#1d3344"),
    theme: {
      backgroundColor: "#1d3344",
      color: "#f3b943",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#769e3c", "#313c4e"),
    theme: {
      backgroundColor: "#313c4e",
      color: "#769e3c",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#bf965c", "#2b343d"),
    theme: {
      backgroundColor: "#2b343d",
      color: "#bf965c",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#769e3c", "#1b4f77"),
    theme: {
      backgroundColor: "#1b4f77",
      color: "#769e3c",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#42c6ac", "#11618e"),
    theme: {
      backgroundColor: "#11618e",
      color: "#42c6ac",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#bcbcbc", "#397ea8"),
    theme: {
      backgroundColor: "#397ea8",
      color: "#bcbcbc",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#f26464", "#34678c"),
    theme: {
      backgroundColor: "#34678c",
      color: "#f26464",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#2c363f", "#4685c6"),
    theme: {
      backgroundColor: "#4685c6",
      color: "#2c363f",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#191919", "#4685c6"),
    theme: {
      backgroundColor: "#4685c6",
      color: "#191919",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#5634a2", "#509ed3"),
    theme: {
      backgroundColor: "#509ed3",
      color: "#5634a2",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#40b281", "#455aa3"),
    theme: {
      backgroundColor: "#455aa3",
      color: "#40b281",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#ff7d8a", "#5e6579"),
    theme: {
      backgroundColor: "#5e6579",
      color: "#ff7d8a",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#f6913f", "#5e6579"),
    theme: {
      backgroundColor: "#5e6579",
      color: "#f6913f",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#d8b627", "#5e6579"),
    theme: {
      backgroundColor: "#5e6579",
      color: "#d8b627",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#b95aa7", "#353a44"),
    theme: {
      backgroundColor: "#353a44",
      color: "#b95aa7",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#ff7d8a", "#492c89"),
    theme: {
      backgroundColor: "#492c89",
      color: "#ff7d8a",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#ff7d8a", "#69599c"),
    theme: {
      backgroundColor: "#69599c",
      color: "#ff7d8a",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#e5ac20", "#69599c"),
    theme: {
      backgroundColor: "#69599c",
      color: "#e5ac20",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#bf965c", "#5d355e"),
    theme: {
      backgroundColor: "#5d355e",
      color: "#bf965c",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#bf965c", "#432543"),
    theme: {
      backgroundColor: "#432543",
      color: "#bf965c",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#bcbcbc", "#6b203f"),
    theme: {
      backgroundColor: "#6b203f",
      color: "#bcbcbc",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#252551", "#d83289"),
    theme: {
      backgroundColor: "#d83289",
      color: "#252551",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#323944", "#d33962"),
    theme: {
      backgroundColor: "#d33962",
      color: "#323944",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#ff7d8a", "#942664"),
    theme: {
      backgroundColor: "#942664",
      color: "#ff7d8a",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#942664", "#ff7d8a"),
    theme: {
      backgroundColor: "#ff7d8a",
      color: "#942664",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#e89267", "#6b2a2a"),
    theme: {
      backgroundColor: "#6b2a2a",
      color: "#e89267",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#e06a53", "#7c1313"),
    theme: {
      backgroundColor: "#7c1313",
      color: "#e06a53",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#e89267", "#721d37"),
    theme: {
      backgroundColor: "#721d37",
      color: "#e89267",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#e5918c", "#af1c38"),
    theme: {
      backgroundColor: "#af1c38",
      color: "#e5918c",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#f7964d", "#ce293d"),
    theme: {
      backgroundColor: "#ce293d",
      color: "#f7964d",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#213138", "#c9483a"),
    theme: {
      backgroundColor: "#c9483a",
      color: "#213138",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#d8bf6c", "#cc6262"),
    theme: {
      backgroundColor: "#cc6262",
      color: "#d8bf6c",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#932525", "#f46464"),
    theme: {
      backgroundColor: "#f46464",
      color: "#932525",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#255958", "#2cbfaa"),
    theme: {
      backgroundColor: "#2cbfaa",
      color: "#255958",
    },
    colorLength: 2,
  },
  {
    style: borderColor("#003347", "#438961"),
    theme: {
      backgroundColor: "#438961",
      color: "#003347",
    },
    colorLength: 2,
  },
];
