export const styles = {
  flex: {
    display: "flex",
  },
  alignItemEnd: {
    alignItems: "flex-end",
  },
  alignItemCenter: {
    alignItems: "center",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentEnd: {
    justifyContent: "flex-end",
  },
  mb_5_n: {
    marginBottom: -5,
  },
  mb_10_n: {
    marginBottom: -10,
  },
  mb_15_n: { marginBottom: -15 },
  mb_20_n: {
    marginBottom: -20,
  },
  mb_0: {
    marginBottom: 0,
  },
  mb_5: {
    marginBottom: 5,
  },
  mb_10: {
    marginBottom: 10,
  },
  mt_5: {
    marginTop: 5,
  },
  mt_10: {
    marginTop: 10,
  },
  mt_25: {
    marginTop: 25,
  },
  mt_40: {
    marginTop: -40,
  },
  pb_20: {
    paddingBottom: 20,
  },
  pt_15: {
    paddingTop: 15,
  },
  pt_25: {
    paddingTop: 25,
  },
  lineHeight_17: {
    lineHeight: "17px",
  },
  lineHeight_20: { lineHeight: "20px" },
  aPadding: {
    marginLeft: 2.5,
    marginRight: 2.5,
  },
  workHeading: { marginBottom: 0, paddingBottom: 0 },
  educationHeading: { marginBottom: 0, paddingBottom: 0, marginTop: 25 },
  workItem: {
    marginBottom: -10,
  },
  summary: { lineHeight: "20px", marginBottom: 0, paddingBottom: 0 },

  paraStyles: (isBold = false) => {
    return {
      fontSize: "1em",
      fontWeight: isBold ? "bold" : "normal",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  },
};
