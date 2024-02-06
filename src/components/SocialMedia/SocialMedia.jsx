import "./SocialMedia.css";
const socialMedia = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];

const SocialMedia = () => {
  return (
    <ul>
      {socialMedia.map((element) =>
        element.includes(" ") ? (
          <li key={element}>
            <a href={`https://www.${element.replaceAll(" ", "")}.io`}>
              {element}
            </a>
          </li>
        ) : (
          <li key={element}>
            <a href={`https://www.${element}.com`}>
              {element}
            </a>
          </li>
        )
      )}
    </ul>
  );
};

export default SocialMedia;
