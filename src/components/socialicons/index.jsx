import {
  FaGithub,
  // FaFacebookF,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";
import "./style.css";

export const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {/* {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )} */}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {/* {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )} */}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
