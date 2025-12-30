import "./Banner.scss";

export function Banner({image, title}) {
  return (
    <div className="headerBanner">
      <img src={image} alt="Bannière paysage" className="imgBanner"/>
      {title && <h1 className="titleBanner">{title}</h1>}
    </div>
  );
}
