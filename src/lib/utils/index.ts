import EmiratesLogo from "../../assets/images/emirates.png";
import VirginLogo from "../../assets/images/virgin.png";
import MaldivianLogo from "../../assets/images/maldivian.png";
import SingaporeLogo from "../../assets/images/singapore.png";

export const LogoMap = {
  emirates: EmiratesLogo,
  virgin: VirginLogo,
  maldivian: MaldivianLogo,
  singapore: SingaporeLogo,
};

export const statusMap = {
  "On-Schedule": "info",
  Delayed: "warning",
  Cancelled: "error",
  Diverted: "highlight",
  Landed: "success",
  Boarding: "highlight",
  "Final Call": "highlight",
  "Gate Closed": "highlight",
  Departed: "success",
};