import {
  faTrash,
  faSignOutAlt,
  fatwitter,
  faUser,
  faPen,
  faPlus,
  faPhone,
  faEnvelope,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faUser,
    faPen,
    faPlus,
    faPhone,
    faEnvelope,
    faMapLocation,
    fatwitter
  );
};

export default Icons;
