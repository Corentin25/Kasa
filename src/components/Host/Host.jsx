import "./host.scss";

export function Host({host}) {
  const hostName = host.name.split(" ");

  return (
    <div className="host">
      <p>{hostName[0]}<br />{hostName[1]}</p>
      <img
        src={host.picture}
        alt={host.name}
      />
    </div>
  );
}
